const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "shell"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
      remotes: {
        computas: "script computas@http://localhost:4204/remoteEntry.js",
        karriere: "script karriere@http://localhost:8082/remoteEntry.js",
        minside: "script minside@http://localhost:4208/remoteEntry.js",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
    })
  ]
};
