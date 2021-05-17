const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  devServer: {
    port: "8888",
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/assets/scss/*.scss")],
    },
  }
};
