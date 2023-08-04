module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      require.resolve("expo-router/babel"),
      "nativewind/babel",
      [require.resolve('babel-plugin-module-resolver'), {
        "alias": {
          "@": "./src",
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }],
    ],
  };
};
