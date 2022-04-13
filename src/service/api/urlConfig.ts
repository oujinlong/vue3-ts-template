const baseUrl = "http://localhost:8080";
interface UrlMap {
  ACCESS_TOEK_API: string;
  UPLOAD_FILE_API: string;
}

export const urlMap: UrlMap = {
  ACCESS_TOEK_API: baseUrl + "/app/getAccessToken", // 获取 AccessToken
  UPLOAD_FILE_API: baseUrl + "/app/import/file", // upload file

};
