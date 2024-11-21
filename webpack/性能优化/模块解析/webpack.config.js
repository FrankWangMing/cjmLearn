// const path = require('path');
// module.exports = {
//   mode:"production",
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   },
//   module:{
//     // noParse:"/\/jquery\/"
//         rules:[
//         {
//             test:/\.js$/,
//             use:[{
//             loader:"cache-loader",
//             options: {
//                 cacheDirectory: "./cache" // 缓存文件保存的地方（默认系统提供临时文件）
//                 }
//             },'babel-loader']
//         }
//         ]
//     }
// };


const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  mode:"development",
  devtool:"source-map",
  entry: './src/index.js',
  devServer:{
    open:true,
    hot:true,
    host:"localhost"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
        template:"./public/index.html"
    })]
};