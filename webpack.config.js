const path = require("path");
// 引入html插件
const HTMLWebpackPlugin = require("html-webpack-plugin");
// 引入clear插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const autoprefixer = require('autoprefixer');

// webpack中的所有配置信息都应该写在module.exports 中
module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",
  // 设置mode
  mode: 'development', 

  //指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path:path.resolve(__dirname,"dist"),
    // 打包后文件的文件名
    filename: "bundle.js"
  },

  // webpack 打包时指定的模块
  module:{
     // 指定加载的规则
     rules:[
       {
         // test指定的是规则生效的文件
         test:/\.ts$/,
         // 要是用的loader
         use:[
           // 配置babel 
           {
             // 指定加载起
             loader:'babel-loader',
             options:{
               // 设置与定义的环境
               presets:[
                 [
                   "@babel/preset-env",
                   // 配置信息
                   {
                     // 要兼容的目标浏览器
                     targets :{
                       chrome:"88",
                     }  ,
                     // 指定corejson的版本
                     "corejs":"3",
                     // 使用corejs的方式“usage”表示按需加载
                     "useBuiltIns":"usage"
                   }

                 ]
               ]
             }
          },
           'ts-loader',
          
          ],
         exclude: /node-modules/

       },
       // 设置less文件的处理
       {
          test: /\.less$/,
          use:[
            // 使用顺序由下往上
            "style-loader",
            "css-loader",
            "less-loader",
          ]

       }
     ]
  },
  // 配置webpack打包插件
  plugins:[
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title:"这是自定义的title"
      template:"./src/index.html"
    }),
  ],
  // 设置引用模块
  resolve:{
    extensions:['.ts',".js"]
  }
}