import { configs } from "../../config";
import { setMiniIrisConfig } from "../bussiness-logic/config";
import { TypeEntryConfigs } from "../type";
import { setAxiosHeader } from "./setAxiosHeader";
export const init = (entryConfigs: TypeEntryConfigs) => {
  const { env, name, pid } = entryConfigs;
  setMiniIrisConfig(configs[env]);
  console.log('设置MiniIrisConfig成功')
  setAxiosHeader({
    name,
    pid
  });
}