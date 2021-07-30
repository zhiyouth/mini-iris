import axios, { AxiosRequestConfig } from '../axios';
import { getMiniIrisConfig } from '../bussiness-logic/config';

const formatRequestParams = ({ params, url } : { params: any; url: string; }): AxiosRequestConfig => {
  return {
    url,
    params,
    method: 'get',
  }
}

type TypeStub = {
  agreement_ids: number[];
  appid: string;
  code: string;
  encrypted_data: string;
  iv: string;
  pid: string;
}

// {
//   url,
//   method: "get",
//   params: {
//     appid: 'appid',
//     code: 'code',
//     encrypted_data: 'encrypted_data',
//     iv: 'iv',
//     pid: 'pid',
//   },
//   headers: {
//     'X-Ticket': 'tanghao'
//   },
// }

class LoginRegisterApi {
  // 第三方认证 已存在账号则直接给登陆态 账号不存在则返回 oauth_ticket，用于后续激活
  // 接口文档 https://interface.codemao.cn/project/1286/interface/api/157693
  public static stub(params: TypeStub) {
    // 发送 GET 请求
    const url = `${getMiniIrisConfig().host.tiger}//tiger/v3/web/accounts/oauth/wechat/miniprogram/stub`;
    const _params = formatRequestParams({
      params,
      url,
    });
    return axios(_params);
  }

  // 通过微信手机加密数据绑定手机号: 小程序绑定手机激活接口,支持微信小程序，支付宝小程序
  // 接口文档 https://interface.codemao.cn/project/1286/interface/api/157679
  public static hhh(params: AxiosRequestConfig) {
    return axios(params)
  }
}
export default LoginRegisterApi;
