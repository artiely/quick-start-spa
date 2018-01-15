# 基于vue-cli的快速启动

1.加入启动自动以本机ip启动，方便移动端调试   
2.对axios进行简单封装,可以拦截,取消请求,请求统一管理   
3.自动安装常用依赖axios,js-cookie,less,sass,stylus,...     
4.打包后查看资源大小仪表图by `webpack-bundle-analyzer`    
```
npm run dist
```
5.开发仪表图by`webpack-jarvis`
```
localhost:1337
```


## Build Setup

``` bash
# 安装依赖
npm install

# 以本机ip启动 方便移动端调试（链接局域网vpn在有些情况下无效）
npm run dev

# 打包
npm run build

# 打包并分析构建
npm run dist

# 单元测试
npm run unit

# e2e测试
npm run e2e
