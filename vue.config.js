const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    //反向代理
    devServer: {
        // 环境配置
        host: "0.0.0.0",
        port: 8080,
        https: false,
        // hotOnly: false,
        open: false, //配置自动启动浏览器
        proxy: {
            // 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
            // "/service": {
            //     target: `http://172.16.21.153:6081/`,
            // },
        },
    },
});
