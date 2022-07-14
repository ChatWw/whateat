<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  background-color: #f6ebd5;
  width: 100%;
  height: 100%;
  * {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
      Microsoft YaHei, SimSun, sans-serif;
  }
  box-sizing: border-box;
}
// 设置图片匀速动画
body {
  background-image: url("~@/assets/images/bg.jpg");
  background-attachment: fixed;
  background-position: center center;
  -webkit-animation: scrollToUp 10s linear infinite;
  animation: scrollToUp 10s linear infinite;
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
}
@-webkit-keyframes scrollToUp {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 -250px;
  }
}
@keyframes scrollToUp {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 -250px;
  }
}
</style>
