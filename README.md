# 云嘉钉钉项目模版说明文档

## 配置相关

### 1. 钉钉信息配置

文件目录： `/src/config/index.ts`

配置选项: agentId appkey appsecret

### 2. eslint 自动格式化命令

#### eslint 检查

`yarn lint`

#### prettier 自动格式化

`yarn prettier`

### 3. 全局样式

根据项目需求定义全局样式，主题颜色

样式目录: `src/assets/style/main.scss`

### 4. 配置路由

路由目录： ```src/router/index.ts```

根据业务不同可在 router 文件夹下新增 modules 模块

## 请求相关

### 1. 请求信息

```src/service/http.ts```   下配置请求信息

```axios.defaults.baseURL = "/api"; // 做反向代理使用的标识路径
axios.defaults.timeout = 10000; // 超时时间
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8"; // 设置请求头和请求路径
```

### 2. 请求拦截


```src/service/http.ts``` 下

request 拦截

```axios.interceptors.request.use```
 
 response 拦截

```axios.interceptors.response.use```

### 3. 配置请求 url


```src/service/api/urlConfig.ts``` 下

类似以下的代码进行配置:

```
interface UrlMap {
  LOGIN_API: string;
}

export const urlMap: UrlMap = {
  LOGIN_API: "/login", // 登录接口
};
```

### 4. 请求示例


```import http from "@/service/http";
import * as T from "./types";
import { urlMap } from "../urlConfig";
const loginApi: T.ILoginApi = {
  login(params) {
    return http.post(urlMap.LOGIN_API, params);
  },
};
export default loginApi;```



