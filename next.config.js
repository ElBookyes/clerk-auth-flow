const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, 'src/components/'),
      utils: path.resolve(__dirname, 'src/lib/utils/')
    };
    return config;
  }
};
