const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssFocusVisible = require('postcss-focus-visible');

module.exports = {
  main: MiniCssExtractPlugin,
  loaders: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'typings-for-css-modules-loader',
      options: {
        sourceMap: true,
        modules: true,
        localIdentName: '[local]___[hash:base64:5]',
        namedExport: true,
        camelCase: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: () => [
          postcssFocusVisible({ preserve: true }),
        ]
      }
    },
    'less-loader'
  ],
  plugin: new MiniCssExtractPlugin({
    filename: 'main.css',
    chunkFilename: '[id].css'
  })
}
