const https = require.resolve("https-browserify");

module.exports = function override(config, env) {
  config.resolve.fallback = {
    https: https,
    http: require.resolve("stream-http"),
    buffer: require.resolve("buffer/"),
  };
  return config;
};
