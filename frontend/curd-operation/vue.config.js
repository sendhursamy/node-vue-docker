const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'curd-operation.local',
    port: 8042
  },
  pwa: {
    name: process.env.VUE_APP_MODE == "test" ? 'curd operation - TEST MODE' : 'curd operation Portal',
    themeColor: process.env.VUE_APP_MODE == "test" ? '#FED000' : '#133b5a'
  }
})
