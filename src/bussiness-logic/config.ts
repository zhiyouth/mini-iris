import { Config } from '../../config'
import { TypeStorageData } from '../type';
import { TypePlatFormName } from './type';

let _miniIrisConfig: Config;
export const getMiniIrisConfig = () => _miniIrisConfig;
export const setMiniIrisConfig = (config: Config) => {
  _miniIrisConfig = config;
}

let _platform: AnyObject;
export const getPlatform = ():AnyObject => _platform;
export const setPlatform = (platform: AnyObject) => {
  _platform = platform;
}

let _platformName: TypePlatFormName;
export const getPlatformName = ():TypePlatFormName => _platformName;
export const setPlatformName = (platformName: TypePlatFormName) => {
  _platformName = platformName;
}

type TypeGlobalData = {
  isInit?: boolean;
}

let _globalData: TypeGlobalData = {
  isInit: false,
};
export const getGlobalData = ():TypeGlobalData => _globalData;
export const setGlobalData = (globalData: TypeGlobalData) => {
  _globalData = globalData;
}

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