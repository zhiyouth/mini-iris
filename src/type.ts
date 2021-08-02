import { EnvName } from "root/config";

export type TypeEntryConfigs = {
  env: EnvName;
  name: string;
  pid: string;
}

export type TypeStorageData = {
  key: string;
  data: string;
}