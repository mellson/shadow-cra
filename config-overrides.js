const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    resourceQuery: /raw/,
    type: 'asset/source',
  })
);
