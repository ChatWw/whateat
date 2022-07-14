# whateat 今天吃什么？

今天吃早上，中午，晚上吃什么，这是个困扰我们很久的问题，你可以通过这个项目去帮你选择。

## 拉取 dev 分支下代码

建议使用 ssh 地址，https 有些奇奇怪怪的问题

```
git clone -b dev git@github.com:ChatWw/whateat.git
```

## 安装依赖

```
yarn install
```

### 调试项目

```
yarn dev
```

### 打包发布到你的 github 主页上

```
yarn build
```

## tpis

> main 分支下是打包过后的代码，你可能需要通过 live server 去访问，如果你拉到自己的仓库发现无法通过 GitHub Pages 直接访问，那么你可能需要拉取 dev 分支，并且修改 vue.config.js 中的 publicPath 配置

```
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/whateat', // whateat是你github项目的名字,不建议中文
```
