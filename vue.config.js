const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/whateat/'
    : '/',
  transpileDependencies: true,
  lintOnSave: false
})
