# vw-layout

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
##使用vw的原因
flexible不能与响应式布局兼容，对Android没有做处理，导致1px和backgroudImage还要额外做处理的问题。
由于devicePixelRatio = 物理像素 / 独立像素。
css中的pc就是设备的独立像素。例如，在Retina屏的iphone上，devicePixelRatio的值为2，也就是说1个css像素相当于2个物理像素。
vw是基于Viewport视窗的长度单位，在CSS3中和Viewport相关的单位有四个，分别为vw、vh、vmin和vmax。
vw: 是Viewport's width的简写,1vw等于window.innerWidth的1%
vh：和vw类似，是Viewport's height的简写，1vh等于window.innerHeihgt的1%
vmin: vmin的值是当前vw和vh中较小的值
vmax: vmax的值是当前vw和vh中较大的值
+ 容器适配，可以用vw
+ 文本的适配，可以用vw
+ 大于1px的边框、圆角、阴影都可以使用vw
+ 内距和外距，可以使用vw

postcss-aspect-ratio-mini 主要用来处理元素容器的宽高比
**apect-ratio 不能跟其他属性写在一起，否则会忽略其他属性**


    [v-188-246] {
        aspect-ratio:'188:246';
    }
