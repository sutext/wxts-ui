# wxts-ui

-   超级实用微信小程序自定义组件集合

## 使用说明

-   button 原生小程序 button 的扩展，简化原生 button 使用的繁琐样式代码
-   grader 用户评星打分控件，需要全局配置 thems
-   poper 自定义淡出弹框组件
-   popup 自定义从下面或者 顶部弹出的菜单组件，可以理解为 picker 的自定义升级版
-   search 搜索框
-   segment 分段选择器
-   slidbar 支持滑动删除的视图封装
-   navbar 自定义导航栏 可自定义返回事件 以及返回按钮图片
-   toolbar 底部工具栏 需要自行实现内部 UI
-   示例代码请参考 [wxts-cli](https://www.npmjs.com/package/wxts-cli)

-   使用之前可进行全局主题配置,需在小程序入口文件处配置。
    app.ts

```ts
import { conf } from 'wxts-cli';
conf.theme = '#ffca50';
conf.grader.color = '#ffca50';
conf.grader.themes.theme = { on: '/images/icon_star_on.png', off: '/images/icon_star_off.png' };
conf.toolbar.camber = 34;
conf.button.theme = 'fill';
conf.button.color.text = '#333';
export default class App extends wx.App {}
```
