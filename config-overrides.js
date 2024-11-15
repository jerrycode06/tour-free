module.exports = function override(config, env) {
  config.module.rules.unshift({
    test: /\.m?js$/,
    resolve: {
      fallback: { "process/browser": require.resolve("process/browser") },
    },
  });
  return config;
};
