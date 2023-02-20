const path = require('path');
const svgrPlugin = require('vite-plugin-svgr');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },

  async viteFinal(config) {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        svgrPlugin({
          svgrOptions: {
            icon: true,
          },
        }),
      ],
      resolve: {
        alias: [
          {
            find: '@assets',
            replacement: path.resolve(__dirname, '../src/assets'),
          },
          {
            find: '@pages',
            replacement: path.resolve(__dirname, '../src/pages'),
          },
          {
            find: '@components',
            replacement: path.resolve(__dirname, '../src/components'),
          },
          {
            find: '@atoms',
            replacement: path.resolve(__dirname, '../src/components/atoms'),
          },
          {
            find: '@hoc',
            replacement: path.resolve(__dirname, '../src/components/hoc'),
          },
          {
            find: '@molecules',
            replacement: path.resolve(__dirname, '../src/components/molecules'),
          },
          {
            find: '@organisms',
            replacement: path.resolve(__dirname, '../src/components/organisms'),
          },
          { find: '@', replacement: path.resolve(__dirname, '../src') },
        ],
      },
    };
  },
};
