# nativescript-vue-build-a-movie-brief-app
using nativescript-vue to build a simple movie-brief app 使用nativescript-vue实现一个简单的电影简介app android端

本项目所用Template为 [nativescript-vue-template](https://github.com/nativescript-vue/nativescript-vue-template)

### What is NativeScript?
NativeScript 是一个可以让你用Typescript或JavaScript开发原生ios或android app的开源框架
在我写下这篇文章的时候，[github][1]上的star数为12k。
### What is Vue.js?
Vue是一套用于构建用户界面的渐进式框架。在我写下这篇文章时，[github][2]上star数为85k。

### What is NativeScript-Vue?
用[社区文档][3]的定义来说就是一个允许你用vue.js去开发原生应用的插件。

#### 项目结构：
```
app
 |---api
      |---api               // 请求的接口
 |---App_Resources          // ios或android特定的资源(可暂时不管)
      |---Android
      |---iOS
 |---components             // 应用的各个组件
      |---cinema-list       // 电影院列表
      |---col-list          // 纵向列表
      |---coming-list       // 即将上映列表
      |---loading           // 加载过渡页面
      |---more-list         // 更多电影列表
 |---images                 // 图片资源
 |---router                 // 路由
      |---index
 |---views                  // 各个页面
      |---cinemas           // 电影院页面
      |---detail            // 电影简介页面
      |---home              // 首页
      |---more              // 更多电影页面
 |---app.css                // 全局css样式
 |---app.js                 // app入口文件 
hooks
platforms
 |---android                // 编译生成的代码
```
####技术栈
- nativescript-vue
- vue-router

#### 效果图
![](https://github.com/HolyZheng/nativescript-vue-build-a-movie-brief-app/blob/master/gif/nv_one.gif)

![](https://github.com/HolyZheng/nativescript-vue-build-a-movie-brief-app/blob/master/gif/nv_two.gif)

![](https://github.com/HolyZheng/nativescript-vue-build-a-movie-brief-app/blob/master/gif/nv_three.gif)

![](https://github.com/HolyZheng/nativescript-vue-build-a-movie-brief-app/blob/master/gif/nv_four.gif)

clone项目后
```
npm install                 //安装依赖
tns run android             //运行项目
```
  [1]: https://github.com/NativeScript/NativeScript
  [2]: https://github.com/vuejs/vue
  [3]: https://nativescript-vue.org/
