const CompilerTest = require("./plugins/compilerTest");

let config = {
  lintOnSave: false,
  configureWebpack: config => {
    let pluginsPro = [new CompilerTest({ tip: "eeeee" })];
    config.plugins = [...config.plugins, ...pluginsPro];
  }
};
module.exports = config;
