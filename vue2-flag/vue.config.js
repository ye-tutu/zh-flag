/***
 * @Description: 
 * @Author: Harry
 * @Date: 2021-10-01 20:16:39
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-10-01 21:53:19
 * @LastEditors: Harry
 */
// vue.config.js
module.exports = {
  // ...
  publicPath: './',
  // vue.config.js
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '国庆头像制作'
        return args
      })
  }
  // ...
};
