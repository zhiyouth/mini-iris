import { configs } from "root/config";
import { getPlatform, getPlatformName, setMiniIrisConfig } from "./bussiness-logic/config";

export * as axios from "./axios";
export * as Api from "./api";
setMiniIrisConfig(configs['dev']);
export const platfrom = getPlatform();
export const platfromName = getPlatformName();
