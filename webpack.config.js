const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "secondMicroapp",
    projectName: "second-mfe",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ['single-spa', 'utility-microapp'],
    // modify the webpack config however you'd like to by adding to this object
  });
};
