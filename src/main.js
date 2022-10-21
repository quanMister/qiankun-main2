import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import microApps from "../src/modules/micro-app";
// // 引入qiankun注册子应用和启动的接口函数
import { registerMicroApps, start } from "qiankun";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

// 引入微应用入口配置
registerMicroApps(microApps, {
    // 注册一些全局生命周期钩子，如进行日志打印，如果不需要可以不传
    beforeMount() { },
});
// 启动qiankun，并开启预加载
start({
    prefetch: true,
    sandbox: {
        strictStyleIsolation: true, // 开启样式隔离
    },
});
