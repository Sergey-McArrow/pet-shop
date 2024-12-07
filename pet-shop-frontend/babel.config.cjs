/** @type {import('@babel/core').ConfigFunction} */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['@babel/preset-env', { 
        targets: { node: 'current' },
        modules: 'commonjs'
      }],
      '@babel/preset-typescript',
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    plugins: [
      function () {
        return {
          visitor: {
            MetaProperty(path) {
              path.replaceWithSourceString('({ env: require("@/test/__mocks__/env.js") })');
            },
          },
        };
      },
    ],
  };
};
