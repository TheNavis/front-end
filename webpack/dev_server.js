const { join } = require('path');
const devServer = {
  open: true,
  quiet: false,
  port: 3000,
  contentBase: join(__dirname, '..', 'dist'),
  hot: true,
  historyApiFallback: true,
  inline: true,
  noInfo: false,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
  },
  proxy: {
    "/api/*":{
      target:"http://localhost:8000/",
      secure:"false"
    },
  },
};
module.exports = devServer;