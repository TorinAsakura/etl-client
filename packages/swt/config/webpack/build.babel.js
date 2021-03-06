import path from 'path'
import webpack from 'webpack'
import jssGlobal from 'jss-global'
import jssNested from 'jss-nested'
import jssCamelCase from 'jss-camel-case'
import autoprefixer from 'autoprefixer'
import htmlTemplate from 'html-webpack-template'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import CssResolvePlugin from 'elementum-tools/lib/webpack/css-resolve-plugin'

export const mode = 'production'

export const entry = [
  '@babel/polyfill',
  './src/index',
]

export const optimization = {
  splitChunks: {
    cacheGroups: {
      styles: {
        name: 'styles',
        test: /\.?[jc]ss$/,
        chunks: 'all',
        enforce: true,
      },
    },
  },
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: false,
    }),
    new OptimizeCSSAssetsPlugin({}),
  ],
}

export const output = {
  path: path.join(__dirname, '../../dist'),
  filename: '[name].js',
  publicPath: '/',
}

export const module = {
  rules: [
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          query: {
            babelrc: false,
            presets: [
              ['@babel/preset-env', {
                targets: {
                  ie: 8,
                },
                shippedProposals: true,
                modules: false,
              }],
              '@babel/preset-react',
            ],
            plugins: [
              'react-hot-loader/babel',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import',
              ['elementum-tools/lib/babel/plugin', {
                alias: {
                  ER: path.join(__dirname, 'src'),
                  ERUI: path.join(__dirname, '../../../ui/src'),
                  ERAuth: path.join(__dirname, '../../../auth/src'),
                },
                extract: true,
              }],
              ['babel-plugin-inline-import', {
                extensions: [
                  '.md',
                ],
              }],
            ],
          },
        },
      ],
    },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({
                browsers: [
                  '>2%',
                  'last 2 versions',
                ],
              }),
            ],
          },
        },
      ],
    },
    {
      test: /\.jss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({
                browsers: [
                  '>2%',
                  'last 2 versions',
                ],
              }),
            ],
          },
        },
        'jss-loader',
      ],
    },
    {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file-loader?name=[name].[ext]',
    },
  ],
}

export const resolve = {
  plugins: [
    new CssResolvePlugin(),
  ],
}

export const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
  }),
  new HtmlWebpackPlugin({
    title: 'Etelaranta',
    inject: false,
    template: htmlTemplate,
    appMountId: 'app',
    links: [
      'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
    ],
  }),
  new webpack.LoaderOptionsPlugin({
    debug: true,
    options: {
      jssLoader: {
        plugins: [
          jssGlobal(),
          jssNested(),
          jssCamelCase(),
        ],
      },
    },
  }),
  new webpack.ProvidePlugin({
    fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
  }),
]
