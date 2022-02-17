const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "computassere",
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },

      name: "computassere",
      filename: "remoteEntry.js",
      exposes: {
        "./web-components": "./src/bootstrap.ts",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
    }),
  ],
};
