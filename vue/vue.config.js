module.exports = {
  "devServer": {
    port: 8888,
    "disableHostCheck": true,
    proxy: "http://product.test"
  },
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true
      }
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}