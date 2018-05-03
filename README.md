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

+ 容器适配，可以用vw
+ 文本的适配，可以用vw
+ 大于1px的边框、圆角、阴影都可以使用vw
+ 内距和外距，可以使用vw

postcss-aspect-ratio-mini 主要用来处理元素容器的宽高比
**apect-ratio 不能跟其他属性写在一起，否则会忽略其他属性**


    [v-188-246] {
        aspect-ratio:'188:246';
    }
