import http from "@/service/http";
import * as T from "./types";
import { urlMap } from "../urlConfig";
const appApi: T.IAppApi = {
  getAccessToken() {
    return http.get(urlMap.ACCESS_TOEK_API, {});
  },
  uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    return http.upload(urlMap.UPLOAD_FILE_API, formData);
  },

};
export default appApi;
