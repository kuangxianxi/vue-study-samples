const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  //定义入口
  entry: './src/main.js',
  //定义出口,要求定义成对象,包括:path 和 filename
  output: {
    //path要求绝对路径,通过node提供的对象获取,__dirname表示当前文件的路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'release.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      //css loader
      {
        test: /\.css$/,
        //css-loader:解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
        //style-loader:将模块的导出作为样式添加到 DOM 中
        //注意:webpack中,解析数组是从右往左解析的
        use: [ 'style-loader', 'css-loader' ]
      },
        //图片的loader
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当图片的大小大于limit限制的值时,就会把图片解析成base64的字符串

              //当图片的大小小于limit限制的值时,就要使用file-loader解析到配置的出口文件夹中,
              //文件名是一个32位的hash值.由于映射到html中的url不会有出口的文件夹路径,所以需要配置publicPath
              limit: 300000,
              //可以使用name指定打包后的文件名
              //[name]: 原文件名
              //[hash:8]: 保留8位hash值
              //[ext]: 原扩展名
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
        //将ES6语法转换成ES5,使用babel-loader
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
        //vue loader,要配合VueLoaderPlugin一起使用
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]

  },
  //配置vue使用runtime-compiler,使其可以解析template
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};