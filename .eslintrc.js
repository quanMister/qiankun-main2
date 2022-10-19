module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    // "plugin:prettier/recommended",  // 还没配置prettier就先注释掉
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  overrides: [
    {
      files: ["*.vue"], // 匹配views和二级目录中的index.vue
      rules: {
        "vue/multi-word-component-names": "off",
      }, //给上面匹配的文件指定规则
    },
  ],
};
