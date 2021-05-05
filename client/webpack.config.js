const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "./build");
const APP_DIR = path.resolve(__dirname, "./src");

const configDirs = { BUILD_DIR, APP_DIR };

function buildConfig(envvars) {
  if (envvars.env === "development" || envvars.env === "production") {
    return require(`./webpack/${envvars.env}.js`)(configDirs);
  } else {
    console.log("Wrong Webpack build parameter. Possible choices: 'development' or 'production'");
  }
}

module.exports = buildConfig;
