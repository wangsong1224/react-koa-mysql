// 配合eslint的配置(全局安装),用eslint --init 安装上react插件,支持jsx语法
// 将文件改为jsx的文件,将.jsx文件的配置文件关联为JavaScript React
// 然后配置一下eslintrc文件的rules 即可去掉红色下划线
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 6, //es6语法
    sourceType: "module", // 代码是 ECMAScript 模块
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    // 空格报错,vscode用了保存自动格式化,这个比较蛋疼,所以关了
    // indent: ["error", "tab"],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    // 禁止出现未使用过的变量,他判断的标准是有没有再次出现过,但是有的时候不太靠谱,所以禁掉了
    // 比如引入React 但是没有再次使用,但是引入值必要的
    "no-unused-vars": 0
  }
};