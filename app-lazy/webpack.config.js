const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ficc",
    projectName: "app-lazy",
    webpackConfigEnv,
    argv,
  });

  return webpackMerge.smart(defaultConfig, {
    externals: ["react-router-dom"],
  });
};
