const path = require('path')
const title = '切片管理'
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: '/',
    configureWebpack: {
        name: title
    },
    devServer: {
        proxy: {
            // 代理 /dev-api/user/login 到 http://127.0.0.1:3000/user/login
            [process.env.VUE_APP_BASE_API]: {
                target: `https://easy-mock.com/mock/5fa8e1dd234c9b0d8babe8f4/example/`,
                changeOrigin: true,
                pathRewrite: {
                    ["^" + process.env.VUE_APP_BASE_API]: ""
                }
            }
        },
    },

    chainWebpack(config) {
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}