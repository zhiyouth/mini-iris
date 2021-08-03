import { version } from '../../package.json'
import { TypeStorageData } from '../types/global';
import { getMiniIrisConfig, getPlatform, getPlatformName } from './config';
export const getSDKVersion = () => version;
export const getStorage = (key: string):string => {
  switch (getPlatformName()) {
    case 'wx': {
      return getPlatform().getStorageSync(key);
    }
    default: {
      return '';
    }
  }
}

export const setStorage = (storageData: TypeStorageData) => {
  switch (getPlatformName()) {
    case 'wx': {
      getPlatform().setStorage(storageData)
    }
  }
}

export const setToken = (token: string) => {
  setStorage({
    key: `${getMiniIrisConfig().env}-mini-iris-token`,
    data: token,
  })
}

export const getToken = () => {
  return getStorage(`${getMiniIrisConfig().env}-mini-iris-token`)
}