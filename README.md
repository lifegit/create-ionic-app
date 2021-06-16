# ionic-app

ionic-app demo


## 介绍

1. 本项目使用 [ionicV5](https://ionicframework.com)、[React](https://react.docschina.org/)、scss 开发。
1. ionic 是一个可以生成android、ios、web的框架。入门见：https://www.yuque.com/mingzibaliao/web/adkgua
1. UI组件库采用 [ant design mobile v3](https://next.mobile.ant.design/)
1. hooks库采用 [ahooks](https://ahooks.js.org/zh-CN/hooks/async)，可查看官方样例后开发本项目。
1. 表单验证采用 [react-hook-form](https://github.com/react-hook-form/react-hook-form)
1. http 采用 ResultApi 规范 ，常见状态码：
   1. 200：相应成功
   1. 204：删除成功
   1. 401：没登录
   1. 403：没权限
   1. 404：不存在页面
   1. 500：服务异常
   1. 422：表单验证失败
   1. 429：请求过于频繁

## 运行

```bash
$ npm install
$ ionic serve
$ ionic build
```


