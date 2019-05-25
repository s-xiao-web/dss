const proxy = require("http-proxy-middleware");
const proxyIP = 'http://110.43.198.66:60910'
module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: proxyIP,
      changeOrigin: true,
      pathRewrite: {
        '^/apis': '/api'
      }
    })
  );
  app.use(
    proxy("/fans/**", {
      target: "https://easy-mock.com/mock/5c0f31837214cf627b8d43f0/",
      changeOrigin: true
    })
  );
};