const path = require('path');

module.exports = {
  //定义入口
  entry: './src/main.js',
  //定义出口,要求定义成对象,包括:path 和 filename
  output: {
    //path要求绝对路径,通过node提供的对象获取,__dirname表示当前文件的路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'release.js'
  }
};