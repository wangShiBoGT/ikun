(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{430:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),s("p",[t._v("echarts在vue3+vite项目中使用的一点经验"),s("br")])]),t._v(" "),s("h3",{attrs:{id:"一、安装echarts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、安装echarts"}},[t._v("#")]),t._v(" 一、安装echarts")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("npm install echarts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save\n")])])]),s("p",[t._v("在页面使用时，需要使用以下两条命令任选其一来使用")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" echarts "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'echarts'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引入echarts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" echarts "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'echarts'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//需要使用 ES module 语法,不能使用 CommonJS 的 require。")]),t._v("\n")])])]),s("p",[t._v("为什么不能使用let echarts = require('echarts')；")]),t._v(" "),s("ol",[s("li",[t._v("Vite 默认使用 ES module 的语法,不能使用 CommonJS 的 require 语法。")]),t._v(" "),s("li",[t._v("echarts 默认导出是一个对象,不能直接赋值给一个变量。")])]),t._v(" "),s("h3",{attrs:{id:"二、markraw-避免不必要重新渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、markraw-避免不必要重新渲染"}},[t._v("#")]),t._v(" 二、markRaw 避免不必要重新渲染")]),t._v(" "),s("p",[t._v("我们封装echarts组件时往往会用传值给组件内部，来生成图，但是会发现图里的tooltip悬浮框导致不能使用")]),t._v(" "),s("p",[t._v("这是因为在vue3中使用了proxy对象代理，但echarts实例在vue3中不能是一个响应式对象，否则提示框会显示不出来，需要在代码内部添加vue3的markRaw，他的作用是让一个对象脱离vue的代理和追踪，标记为原始对象，不在转换为proxy。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" markRaw "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" echartsInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" echarts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("markRaw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("echartsInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"三、多个图表在同一页面下-设置容器宽高-否则显示空白"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、多个图表在同一页面下-设置容器宽高-否则显示空白"}},[t._v("#")]),t._v(" 三、多个图表在同一页面下，设置容器宽高，否则显示空白")]),t._v(" "),s("p",[t._v("动态获取数据时虽然处理数据的代码在前，但图表仍会先加载，所以刚开始加载图表时，如若数据量较大，会先显示空图表。动态id是为了每一个图能够获取到对应的DOM，切换页面时图表id已存在导致的空白页问题。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 图表初始化")]),t._v("\n  chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("markRaw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    echarts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("assetTrendsList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("assetTrendsList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_echarts_instance_'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"四、重新渲染-echarts-采用重新初始化或更新-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、重新渲染-echarts-采用重新初始化或更新-options"}},[t._v("#")]),t._v(" 四、重新渲染 ECharts 采用重新初始化或更新 options")]),t._v(" "),s("p",[t._v("有几种方案供参考")]),t._v(" "),s("h4",{attrs:{id:"重新初始化echarts实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重新初始化echarts实例"}},[t._v("#")]),t._v(" 重新初始化echarts实例")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基于准备好的dom，初始化echarts实例")]),t._v("\necharts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"monthCollect"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myChart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" echarts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"monthCollect"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyChart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"更新options里的值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新options里的值"}},[t._v("#")]),t._v(" 更新options里的值")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新 options 触发重新渲染")]),t._v("\nchart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),s("h3",{attrs:{id:"五、切换-echarts-实例避免画布消失"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、切换-echarts-实例避免画布消失"}},[t._v("#")]),t._v(" 五、切换 ECharts 实例避免画布消失")]),t._v(" "),s("p",[t._v("echarts渲染逻辑是：\n如果未实例化则进行实例化，在此期间会在Dom容器生成一个_echarts_instance_属性，该属性就是当前echarts的id,再进行后边的渲染操作，当我们刷新已经实例化的echarts图表时，echarts会先匹配该Dom容器上的_echarts_instance_属性值是否与实例对象一样，如果一样则会在原生的结构上进行渲染，但是因为已经破坏原生的结构，所以无法重新渲染出echarts")]),t._v(" "),s("p",[t._v("设置setAttribute('"),s("em",[t._v("echarts_instance")]),t._v("', '');")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("assetTrendsList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_echarts_instance_'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);