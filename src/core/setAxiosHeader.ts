import axios from "../axios";
import { getSDKVersion } from "../utils";
export const setAxiosHeader = (params: AnyObject) => {
  const { name, pid } = params;
  // 这里不可以是中文，会报错
  axios.defaults.headers.common = {
    "mini-iris-version": getSDKVersion(),
    "mini-iris-pid": pid,
  };
}