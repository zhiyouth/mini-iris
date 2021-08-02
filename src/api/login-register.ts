import axios from '../axios';
import { getMiniIrisConfig } from '../bussiness-logic/config';

type TypeStub = {
  agreement_ids: number[];
  appid: string;
  code: string;
  encrypted_data: string;
  iv: string;
  pid: string;
}

type TypeRegisterByPhoneNumberEncryptedData = {
  encryptedData?: string;
  iv?: string;
  oauth_ticket?: string;
  wechatMiniprogramToken?: string;
}

type TypeGetCaptchaByPhoneNumber = {
  oauth_ticket: string;
  phone_number: string;
  pid?: string;
}

type TypeLoginByThirdParty = {
  oauth_ticket: string;
  captcha?: string;
  auth_version?: string;
}

type TypeBindPhoneNumberByEncryptedData = {
  appid?: string;
  encryptedData?: string;
  iv?: string;
  wechatMiniprogramToken?: string;
}

type TypeSendPhoneCaptcha = {
  phone_number: string;
  pid?: string;
}

type TypeBindPhoneNumber = {
  phone_number: string;
  captcha: string;
}
 
class LoginRegisterApi {
  // 第三方认证 已存在账号则直接给登陆态 账号不存在则返回 oauth_ticket，用于后续激活
  // 接口文档 https://interface.codemao.cn/project/1286/interface/api/157693
  public static stub = (params: TypeStub) => axios({
    url : `${getMiniIrisConfig().host.tiger}/tiger/v3/web/accounts/oauth/wechat/miniprogram/stub`,
    params,
    method: 'post',
  });

  // 通过微信手机加密数据绑定手机号: 小程序绑定手机激活接口,支持微信小程序，支付宝小程序
  // 接口文档 https://interface.codemao.cn/project/1286/interface/api/157679
  public static register_by_phone_number_encrypted_data = (params: TypeRegisterByPhoneNumberEncryptedData) => axios({
    url: `${getMiniIrisConfig().host.tiger}/tiger/v3/web/accounts/oauth/third-party/by-encrypted-data`,
    params,
    method: 'post',
  })

  // 发送第三方绑定手机验证码
  // 接口文档 https://interface.codemao.cn/project/891/interface/api/118525
  public static get_captcha_by_phone_number = (params: TypeGetCaptchaByPhoneNumber) => axios({
    url: `${getMiniIrisConfig().host.tiger}/tiger/v3/web/accounts/captcha/oauth`,
    params,
    method: 'post',
  });

  // 第三方登录（激活）
  // 接口文档 https://interface.codemao.cn/project/891/interface/api/118541
  public static login_by_third_party = (params: TypeLoginByThirdParty) => axios({
    url: `${getMiniIrisConfig().host.tiger}/tiger/v3/web/accounts/oauth/third-party`,
    params,
    method: 'post'
  })

  // 通过加密加密数据绑定手机
  // https://interface.codemao.cn/project/1286/interface/api/157705
  public static bind_phone_number_by_encrypted_data = (params: TypeBindPhoneNumberByEncryptedData) => axios({
    url: `${getMiniIrisConfig().host.tiger}/tiger/v3/web/accounts/phone/bind/by-encrypted-data`,
    params,
    method: 'post'
  })

  // 发送绑定手机验证码
  // https://interface.codemao.cn/project/891/interface/api/119005
  public static send_phone_number = (params: TypeSendPhoneCaptcha) => axios({
    url: `${getMiniIrisConfig().host.tiger}/tiger/v3/app/accounts/captcha/phone/bind`,
    params,
    method: 'post'
  })

  // 绑定手机
  // https://interface.codemao.cn/project/891/interface/api/118565
  public static bind_phone_number = (params: TypeBindPhoneNumber) => axios({
    url: `${getMiniIrisConfig().host.tiger}/tiger/v3/web/accounts/phone/bind`,
    params,
    headers: {
      'x-http-method-override': 'PATCH',
    },
  })
  

}
export default LoginRegisterApi;
