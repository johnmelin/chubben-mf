const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "shell",
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

      remotes: {
        // // React: loaded as script file
        computas: "script computas@http://localhost:4204/remoteEntry.js",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
    }),
  ],
};
