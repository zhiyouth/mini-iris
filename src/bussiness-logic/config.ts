import { Config } from '../../config'
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