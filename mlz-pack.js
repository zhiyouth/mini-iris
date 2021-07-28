/**
 * webpack配置文件
 * 具体详情请见：https://github.com/juicecube/mlz-pack
 */
const config = require('./example-config/index');

console.log(config);

const { cdnPath, runtime } = config;
const analyzed =
  process.env.NODE_ENV === 'production' && runtime.env === 'local';

module.exports = {
  webpack: {
    entryPath: './example/index.tsx',
    publicPath: cdnPath,
    analyzePlugin: !!analyzed,
    dropConsole: false,
    htmlPlugin: {
      filename: 'index.html',
      favicon: 'favicon.ico',
      template: './example/index.ejs',
      front_config: `<script>window.CODEMAOCONFIG = ${JSON.stringify(
        runtime,
      )}</script>`,
    },
    resolve: {
      alias: { react: require.resolve('./node_modules/react') },
    },
    devServer: {
      port: 6003,
    },
    extraCssPlugin: false,
  },
};
