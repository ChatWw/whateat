const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/whateat',
  outputDir: 'dist',
  assetsDir: 'static',
  // baseUrl: process.env.NODE_ENV === 'production' ? '/whateat/' : '/',
  transpileDependencies: true,
  lintOnSave: false,
})
