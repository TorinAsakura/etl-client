import path from 'path'
import webpack from 'webpack'
import jssGlobal from 'jss-global'
import jssNested from 'jss-nested'
import jssCamelCase from 'jss-camel-case'
import autoprefixer from 'autoprefixer'
import htmlTemplate from 'html-webpack-template'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CssResolvePlugin from 'elementum-tools/lib/webpack/css-resolve-plugin'

export const mode = 'development'

export const entry = [
  '@babel/polyfill',
  './src/index',
]

export const output = {
  filename: '[name].js',
  publicPath: '/',
  path: '/',
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
        'style-loader',
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
        'style-loader',
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
  new HtmlWebpackPlugin({
    title: 'Etelaranta',
    inject: false,
    template: htmlTemplate,
    appMountId: 'app',
    links: [
      'https://fonts.googleapis.com/css?family=Roboto:400,500,700',
    ],
  }),
  new webpack.DefinePlugin({
    'process.env.API_URL': JSON.stringify(process.env.API_URL || 'https://gateway.stage.etelaranta.com/graphql'),
  }),
  new webpack.LoaderOptionsPlugin({
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
]
