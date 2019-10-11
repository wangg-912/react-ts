const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy(
            '/getTableInfos',
            {
                target: ' https://www.easy-mock.com/mock/5da01e66e06604327eefd5f4/api',
                changeOrigin: true
            }
        )
    );
};