export type TypeStub = {
  agreement_ids: number[];
  appid: string;
  code: string;
  encrypted_data: string;
  iv: string;
  pid: string;
}

export type TypeRegisterByPhoneNumberEncryptedData = {
  encryptedData?: string;
  iv?: string;
  oauth_ticket?: string;
  wechatMiniprogramToken?: string;
}

export type TypeGetCaptchaByPhoneNumber = {
  oauth_ticket: string;
  phone_number: string;
  pid?: string;
}

export type TypeLoginByThirdParty = {
  oauth_ticket: string;
  captcha?: string;
  auth_version?: string;
}

export type TypeBindPhoneNumberByEncryptedData = {
  appid?: string;
  encryptedData?: string;
  iv?: string;
  wechatMiniprogramToken?: string;
}

export type TypeSendPhoneCaptcha = {
  phone_number: string;
  pid?: string;
}

export type TypeBindPhoneNumber = {
  phone_number: string;
  captcha: string;
}