// 在主应用中注册微应用    各子应用信息如下
const microApps = [
    {
      name: "module-app1", // name都不能重复
      entry: "http://localhost:8081", // 定义子应用入口，基于qiankun的应用一般直接写子应用的入口html地址即可。
      activeRule: "/app1", // url变化后, 所有 activeRule 规则匹配上的微应用就会被插入到指定的 container 中。要和子项目中配置的拦截到对应子项目的标识保持一致（  base: window.__POWERED_BY_QIANKUN__ ? '/app1/' : '/',）。
      container: "#root-view", // 定义子应用的加载位置,如 id为root-view的一个盒子
      sandbox: {
        strictStyleIsolation: true, // 开启样式隔离
      },
    },
    // {
    //   name: "module-app2",
    //   entry: "http://localhost:8082",
    //   activeRule: "/app2",
    //   container: "#root-view",
    //   sandbox: {
    //     strictStyleIsolation: true, // 开启样式隔离
    //   },
    // },
  ];
  export default microApps;
  