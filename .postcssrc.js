// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {}, // 主要是解决@import引入路径的问题。使用这个插件，可以轻易使用本地文件、node_modules或者web_modules。
    "postcss-url": {}, // 该插件主要用来处理文件，比如图片文件、字体文件等引用路径的处理。
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750, //视窗的宽度
      viewportHeight:1334,// 视窗的高度 
      unitPrecision: 3,//指定'px'转换成视窗单位值的小数位数
      viewportUnit: 'vw',// 指定需要转换成的视窗单位，建议使用vm
      selectorBlackList: ['.ignore', '.hairlines'],// 指定不转换为视窗单位的类
      minPixelValue: 1,// 小于活等于'1px'不转换成视窗单位，你也可以设置为你想要的值
      mediaQuery: false //是否允许在媒体查询中转换'px'
    },// 主要用来把px单位转换成vm、vh、vmin、vma这样的视窗单位
    "postcss-viewport-units":{},
    "cssnano":{
      preset:"advanced",
      autoprefixer:false,
      "postcss-zindex":false
    }, // 由于cssnext和cssnano都具有autoprefixer,事实上只需要一个,用来压缩和清理CSS代码
    // "autoprefixer": {}, // 如此一来，你在编码时不再需要考虑任何浏览器前缀的问题，可以专心撸码。这也是PostCSS最常用的一个插件之一。
  }
}
