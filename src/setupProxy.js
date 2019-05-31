const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  console.log('haha 我被执行了')
  app.use(proxy(
    '/apis',
    {
      target: 'http://110.43.198.66:60910',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        '^/apis': '/api'
      },
      onProxyRes(proxyRes, req, res) {
        var cookies = proxyRes.headers['set-cookie']
        if (cookies == null || cookies.length == 0) {
          delete proxyRes.headers['set-cookie']
          return
        }
        for (var i = 0, n = cookies.length; i < n; i++) {
          if (cookies[i].match(/^JSESSIONID=[^;]+;[\s\S]*Path=\/[^;]+/)) {
            cookies[i] = cookies[i].replace(/Path=\/[^;]+/, 'Path=/');
          }
        }
        proxyRes.headers['set-cookie'] = cookies;
      }
    }
  ))
};