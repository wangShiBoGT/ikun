(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{529:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("摘要")]),t._v(" "),s("p",[t._v("本文将深入探讨微信小程序开发中的关键技术点，包括高性能渲染、数据管理、网络请求优化、组件化开发，以及常见的坑和解决方案。")])]),t._v(" "),s("h2",{attrs:{id:"一、微信小程序架构与运行机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、微信小程序架构与运行机制"}},[t._v("#")]),t._v(" 一、微信小程序架构与运行机制")]),t._v(" "),s("h3",{attrs:{id:"_1-1-小程序的双线程架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-小程序的双线程架构"}},[t._v("#")]),t._v(" 1.1 小程序的双线程架构")]),t._v(" "),s("p",[t._v("微信小程序采用 "),s("strong",[t._v("WebView + JSBridge + Native")]),t._v(" 的双线程架构，分为 "),s("strong",[t._v("逻辑层（JS 运行环境）")]),t._v(" 和 "),s("strong",[t._v("视图层（WebView 渲染）")]),t._v("。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("逻辑层")]),t._v("：负责数据处理、业务逻辑执行，运行在 "),s("strong",[t._v("JavaScriptCore")]),t._v("（iOS）或 "),s("strong",[t._v("V8")]),t._v("（Android）环境。")]),t._v(" "),s("li",[s("strong",[t._v("视图层")]),t._v("：负责 UI 渲染，运行在 "),s("strong",[t._v("WebView")]),t._v("。")]),t._v(" "),s("li",[s("strong",[t._v("通信机制")]),t._v("：逻辑层与视图层通过 "),s("strong",[t._v("JSBridge")]),t._v(" 进行数据传递，异步操作会有一定的延迟。")])]),t._v(" "),s("p",[t._v("理解小程序的架构，有助于在开发过程中避免不必要的性能损耗，例如避免频繁的 "),s("strong",[t._v("setData")]),t._v(" 以减少通信开销。")]),t._v(" "),s("h2",{attrs:{id:"二、高性能小程序开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、高性能小程序开发"}},[t._v("#")]),t._v(" 二、高性能小程序开发")]),t._v(" "),s("h3",{attrs:{id:"_2-1-setdata-优化策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-setdata-优化策略"}},[t._v("#")]),t._v(" 2.1 setData 优化策略")]),t._v(" "),s("p",[s("code",[t._v("setData")]),t._v(" 是小程序开发的核心 API，但不合理的使用可能会导致性能下降。")]),t._v(" "),s("p",[s("strong",[t._v("问题点：")])]),t._v(" "),s("ul",[s("li",[t._v("每次 "),s("code",[t._v("setData")]),t._v(" 都会触发 "),s("strong",[t._v("JSON 解析、序列化")]),t._v("，数据量大时会导致 "),s("strong",[t._v("UI 卡顿")]),t._v("。")]),t._v(" "),s("li",[t._v("传递的数据会经过 "),s("strong",[t._v("JSBridge")]),t._v("，不必要的数据更新会增加通信开销。")])]),t._v(" "),s("p",[s("strong",[t._v("优化方案：")])]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("减少 setData 频率")]),t._v("，仅更新变化的数据。")]),t._v(" "),s("li",[s("strong",[t._v("避免 setData 传输大数据")]),t._v("，例如直接修改 "),s("code",[t._v("this.data")]),t._v(" 中的对象，而不是传递整个对象。")]),t._v(" "),s("li",[s("strong",[t._v("使用局部刷新技术")]),t._v("，例如 "),s("code",[t._v("this.setData({ ['list[0].name']: '新值' })")]),t._v("，而不是 "),s("code",[t._v("this.setData({ list: newList })")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"_2-2-组件化开发与-wxs-优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-组件化开发与-wxs-优化"}},[t._v("#")]),t._v(" 2.2 组件化开发与 WXS 优化")]),t._v(" "),s("p",[t._v("微信小程序支持组件化开发，合理拆分组件有助于提高代码复用性和可维护性。")]),t._v(" "),s("p",[s("strong",[t._v("WXS（WeChat Script）")]),t._v(" 是小程序提供的一种 "),s("strong",[t._v("高性能脚本语言")]),t._v("，运行在视图层，适用于数据计算、格式化等操作。")]),t._v(" "),s("p",[s("strong",[t._v("使用 WXS 的优势：")])]),t._v(" "),s("ul",[s("li",[t._v("运行在 WebView 端，不会阻塞 JS 线程。")]),t._v(" "),s("li",[t._v("比 "),s("code",[t._v("setData")]),t._v(" 更高效，适用于模板数据格式化。")])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("div",{staticClass:"language-wxs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// utils.wxs\nfunction formatPrice(price) {\n  return (price / 100).toFixed(2);\n}\nmodule.exports = { formatPrice };\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 组件中使用 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ price | formatPrice }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" utils "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../utils.wxs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-3-使用-virtual-list-优化长列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-使用-virtual-list-优化长列表"}},[t._v("#")]),t._v(" 2.3 使用 virtual-list 优化长列表")]),t._v(" "),s("p",[s("strong",[t._v("问题点：")])]),t._v(" "),s("ul",[s("li",[t._v("小程序默认的列表渲染方式会在 DOM 中保留所有节点，导致 "),s("strong",[t._v("长列表卡顿")]),t._v("。")])]),t._v(" "),s("p",[s("strong",[t._v("解决方案：")])]),t._v(" "),s("ul",[s("li",[t._v("使用 "),s("code",[t._v("wx.createIntersectionObserver()")]),t._v(" 进行懒加载。")]),t._v(" "),s("li",[t._v("使用 "),s("strong",[t._v("virtual-list（虚拟列表）")]),t._v(" 只渲染可视范围的元素。")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scroll-view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scroll-y")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wx:")]),t._v("for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{visibleList}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wx:")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ item.name }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scroll-view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("allData")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("visibleList")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rawData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("visibleList")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" rawData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"三、网络请求优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、网络请求优化"}},[t._v("#")]),t._v(" 三、网络请求优化")]),t._v(" "),s("h3",{attrs:{id:"_3-1-避免过多的-http-请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-避免过多的-http-请求"}},[t._v("#")]),t._v(" 3.1 避免过多的 HTTP 请求")]),t._v(" "),s("p",[t._v("小程序对 "),s("strong",[t._v("并发请求数")]),t._v(" 有限制（一般为 10 个），如果请求过多，会导致后续请求被阻塞。")]),t._v(" "),s("p",[s("strong",[t._v("优化策略：")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("使用 requestTask")]),t._v("：在请求未完成前，可调用 "),s("code",[t._v("requestTask.abort()")]),t._v(" 终止。")]),t._v(" "),s("li",[s("strong",[t._v("批量请求")]),t._v("：如果需要一次请求多个数据，建议 "),s("strong",[t._v("合并请求")]),t._v(" 以减少 HTTP 连接数。")]),t._v(" "),s("li",[s("strong",[t._v("本地缓存")]),t._v("：减少对接口的重复请求，例如使用 "),s("code",[t._v("wx.getStorageSync")]),t._v("。")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.example.com/products'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStorageSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'products'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-2-websocket-长连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-websocket-长连接"}},[t._v("#")]),t._v(" 3.2 WebSocket 长连接")]),t._v(" "),s("p",[t._v("如果需要实时数据（如聊天、股票行情），建议使用 "),s("strong",[t._v("WebSocket")]),t._v("，避免频繁轮询。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" socket "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connectSocket")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wss://example.com/socket'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nsocket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'收到消息:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"四、异常处理与兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、异常处理与兼容性"}},[t._v("#")]),t._v(" 四、异常处理与兼容性")]),t._v(" "),s("h3",{attrs:{id:"_4-1-兼容不同机型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-兼容不同机型"}},[t._v("#")]),t._v(" 4.1 兼容不同机型")]),t._v(" "),s("p",[t._v("小程序需要适配 "),s("strong",[t._v("不同屏幕尺寸")]),t._v(" 和 "),s("strong",[t._v("低版本微信")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("适配方案：")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("flex + rpx")]),t._v(" 实现自适应布局。")]),t._v(" "),s("li",[s("strong",[t._v("使用 wx.canIUse")]),t._v(" 检测 API 兼容性。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("canIUse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button.open-type.getUserInfo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'当前微信版本过低，不支持 getUserInfo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);