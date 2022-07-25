const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'agent-care.local',
    port: 8042
  },
  pwa: {
    name: 'Agent Care Portal',
    themeColor: '#133b5a'
  }
})
