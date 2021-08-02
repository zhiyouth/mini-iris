import axios from "../axios";
import { getSDKVersion } from "../utils";
export const setAxiosHeader = (params: AnyObject) => {
  const { name, pid } = params;
  axios.defaults.headers.common["mini-iris-version"] = getSDKVersion();
  axios.defaults.headers.common["mini-iris-name"] = name;
  axios.defaults.headers.common["mini-iris-pid"] = pid;
}