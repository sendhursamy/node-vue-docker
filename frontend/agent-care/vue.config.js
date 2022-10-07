const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'agent-care.local',
    port: 8042
  },
  pwa: {
    name: process.env.VUE_APP_MODE == "test" ? 'Agent Care Portal - TEST MODE' : 'Agent Care Portal',
    themeColor: process.env.VUE_APP_MODE == "test" ? '#FED000' : '#133b5a'
  }
})
