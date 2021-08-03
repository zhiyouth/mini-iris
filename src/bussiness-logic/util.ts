import { version } from '../../package.json'
import { TypePlatFormName } from '../types/bussiness-logic/config';
import { TypeStorageData } from '../types/global';
import { getGlobalData, getMiniIrisConfig, getPlatform, getPlatformName } from './config';
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
  judgeIsInit();
  setStorage({
    key: `${getMiniIrisConfig().env}-mini-iris-token`,
    data: token,
  })
}

export const getToken = () => {
  judgeIsInit();
  return getStorage(`${getMiniIrisConfig().env}-mini-iris-token`)
}

export const mapPlateformToPlateFormName = (_index: number):TypePlatFormName => {
  switch (_index) {
    case 1: return 'uni';
    case 2: return 'wx';
    case 3: return 'my';
    case 4: return 'swan';
    case 5: return 'tt';
    case 6: return 'qq';
    case 7: return 'qh';
    case 8: return 'ks';
    case 9: return 'dd';
    default: return '';
  }
}

export const judgeIsInit = () => {
  if(!getGlobalData().isInit) {
    throw new Error('没有int')
  }
}