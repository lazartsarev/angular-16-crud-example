
module.exports = (config, options, targetOptions) => {
  config.module.rules.unshift({
    test: /\.svg/,
    type: 'asset/inline',
  });

  return config;
};
