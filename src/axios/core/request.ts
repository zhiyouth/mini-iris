import { isFunction, isPlainObject } from '../helpers/is';
import { assert, toUpperCase } from '../helpers/utils';
import {
  AxiosAdapterRequestConfig,
  AxiosAdapterRequestMethod,
  AxiosAdapterTask,
} from './adapter';
import { AxiosRequestConfig, AxiosResponse, AxiosResponseError } from './Axios';
import { isCancelToken } from './cancel';
import { AxiosErrorResponse, createError } from './createError';
import { generateType } from './generateType';

function tryToggleProgressUpdate(
  adapterConfig: AxiosAdapterRequestConfig,
  progressUpdate?: Function,
) {
  if (isFunction(progressUpdate)) {
    switch (adapterConfig.type) {
      case 'upload':
        if (isFunction(adapterConfig.onUploadProgress)) {
          progressUpdate(adapterConfig.onUploadProgress);
        }
        break;
      case 'download':
        if (isFunction(adapterConfig.onDownloadProgress)) {
          progressUpdate(adapterConfig.onDownloadProgress);
        }
        break;
      default:
    }
  }
}

export function request<TData = any>(
  config: AxiosRequestConfig,
): Promise<AxiosResponse<TData>> {
  return new Promise((resolve, reject) => {
    assert(isFunction(config.adapter), 'adapter 需要是一个 function');
    console.log(config, 'ccc')
    const adapterConfig: AxiosAdapterRequestConfig = {
      ...config,
      url: config.url ?? '',
      type: generateType(config),
      method: toUpperCase<AxiosAdapterRequestMethod>(config.method, 'GET'),
      success,
      fail,
    };

    const adapterTask = config.adapter!(adapterConfig) as
      | AxiosAdapterTask
      | undefined;

    function success(response: AxiosResponse): void {
      response.config = config;
      response.request = adapterTask;
      if (
        !isFunction(config.validateStatus) ||
        config.validateStatus(response.status)
      ) {
        resolve(response);
      } else {
        catchError('请求失败', response);
      }
    }

    function fail(error: AxiosResponseError): void {
      error.config = config;
      error.request = adapterTask;
      catchError('网络错误', error);
    }

    function catchError(message: string, response?: AxiosErrorResponse): void {
      reject(createError(message, config, adapterTask, response));
    }

    if (isPlainObject(adapterTask)) {
      tryToggleProgressUpdate(adapterConfig, adapterTask.onProgressUpdate);
    }

    if (isCancelToken(config.cancelToken)) {
      config.cancelToken.listener.then((reason: any) => {
        if (isPlainObject(adapterTask)) {
          tryToggleProgressUpdate(adapterConfig, adapterTask.offProgressUpdate);

          if (isFunction(adapterTask.abort)) {
            adapterTask.abort();
          }
        }

        reject(reason);
      });
    }
  });
}
