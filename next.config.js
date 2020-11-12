const path = require("path");

module.exports = {
  webpack: (config) => {
    return config;
  },
  env: {
    AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE,
  },
};
