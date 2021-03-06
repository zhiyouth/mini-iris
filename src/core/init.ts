import { configs } from "../../config";
import { setGlobalData, setMiniIrisConfig } from "../bussiness-logic/config";
import { TypeEntryConfigs } from "../types/global";
import { setAxiosHeader } from "./setAxiosHeader";

export const init = (entryConfigs: TypeEntryConfigs) => {
  const { env, name, pid } = entryConfigs;
  setMiniIrisConfig(configs[env]);
  // TO和后台碰一下
  setAxiosHeader({
    name,
    pid
  });
  setGlobalData({isInit: true});
}