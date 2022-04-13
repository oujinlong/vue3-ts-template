export interface IAppApi {
  getAccessToken: () => Promise<any>;

  /**
   * 上传文件
   */
  uploadFile: (file: File) => Promise<any>;


}
