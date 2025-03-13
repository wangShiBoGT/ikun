(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{538:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("摘要")]),t._v(" "),s("p",[t._v("Vue3相比Vue2，在响应式系统上做出了重大优化，核心区别在于由"),s("code",[t._v("Object.defineProperty")]),t._v("升级为"),s("code",[t._v("Proxy")]),t._v("，提升了性能和灵活性。")])]),t._v(" "),s("h3",{attrs:{id:"一、vue2的响应式系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、vue2的响应式系统"}},[t._v("#")]),t._v(" 一、Vue2的响应式系统")]),t._v(" "),s("p",[t._v("Vue2的响应式是基于"),s("code",[t._v("Object.defineProperty")]),t._v("来实现的，其工作方式如下：")]),t._v(" "),s("ul",[s("li",[t._v("Vue在初始化时，通过"),s("code",[t._v("Object.defineProperty")]),t._v("劫持数据对象的属性，定义getter和setter。")]),t._v(" "),s("li",[t._v("当属性被访问时，getter会触发依赖收集。")]),t._v(" "),s("li",[t._v("当属性被修改时，setter会触发视图更新。")])]),t._v(" "),s("h4",{attrs:{id:"存在的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存在的问题"}},[t._v("#")]),t._v(" 存在的问题")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("无法监听对象新增属性")]),t._v("：Vue2的响应式只能劫持已经存在的属性，新增属性不会被检测到。")]),t._v(" "),s("li",[s("strong",[t._v("无法监听数组变化")]),t._v("：数组的索引变动不会触发视图更新。")]),t._v(" "),s("li",[s("strong",[t._v("性能问题")]),t._v("：对每个对象属性都要进行遍历并添加getter/setter，对深层嵌套对象的处理较为复杂。")])]),t._v(" "),s("h3",{attrs:{id:"二、vue3的响应式系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、vue3的响应式系统"}},[t._v("#")]),t._v(" 二、Vue3的响应式系统")]),t._v(" "),s("p",[t._v("Vue3的响应式系统基于"),s("code",[t._v("Proxy")]),t._v("进行实现，解决了Vue2的诸多痛点。")]),t._v(" "),s("h4",{attrs:{id:"proxy的优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxy的优势"}},[t._v("#")]),t._v(" Proxy的优势")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("可监听动态新增的属性")]),t._v("：使用"),s("code",[t._v("Proxy")]),t._v("后，无论是新增属性还是删除属性，都能被监听到。")]),t._v(" "),s("li",[s("strong",[t._v("支持数组变化")]),t._v("：能够正确检测数组的索引变动、"),s("code",[t._v("length")]),t._v("变化等。")]),t._v(" "),s("li",[s("strong",[t._v("性能优化")]),t._v("：Vue3只需要代理整个对象，而不是遍历对象的每个属性，提升了响应式的性能。")])]),t._v(" "),s("h4",{attrs:{id:"vue3中的响应式api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue3中的响应式api"}},[t._v("#")]),t._v(" Vue3中的响应式API")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("reactive")]),t._v("：用于创建响应式对象。")]),t._v(" "),s("li",[s("code",[t._v("ref")]),t._v("：用于创建基本数据类型的响应式变量。")]),t._v(" "),s("li",[s("code",[t._v("readonly")]),t._v("：创建只读的响应式对象。")]),t._v(" "),s("li",[s("code",[t._v("shallowReactive")]),t._v(" 和 "),s("code",[t._v("shallowRef")]),t._v("：创建浅层响应式数据。")])]),t._v(" "),s("p",[t._v("示例代码：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" reactive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello Vue3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Count is "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"三、vue3响应式的实际应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、vue3响应式的实际应用"}},[t._v("#")]),t._v(" 三、Vue3响应式的实际应用")]),t._v(" "),s("p",[t._v("Vue3的响应式系统在性能、功能、易用性上都有明显的提升，特别适用于大型项目中的复杂状态管理。建议在开发新项目时优先使用Vue3的"),s("code",[t._v("reactive")]),t._v("和"),s("code",[t._v("ref")]),t._v("，以充分利用新响应式系统的优势。")]),t._v(" "),s("h3",{attrs:{id:"结论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),s("p",[t._v("Vue3通过"),s("code",[t._v("Proxy")]),t._v("彻底重构了响应式系统，解决了Vue2在属性新增、数组变动等方面的局限性，使得数据管理更加高效和灵活，提升了整体开发体验。")])])}),[],!1,null,null,null);s.default=r.exports}}]);