(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{403:function(t,n,e){},416:function(t,n,e){"use strict";e(403)},423:function(t,n,e){"use strict";e.r(n);var a=e(82),s={props:{currentTag:{type:String,default:""}},computed:{tags(){return[{name:this.$recoLocales.tag.all,path:"/tag/"},...this.$tags.list]}},methods:{tagClick(t){this.$emit("getCurrentTag",t)},getOneColor:a.a}},r=(e(416),e(0)),c=Object(r.a)(s,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"tags"},t._l(t.tags,(function(e,a){return n("span",{key:a,class:{active:e.name==t.currentTag},style:{backgroundColor:t.getOneColor()},on:{click:function(n){return t.tagClick(e)}}},[t._v(t._s(e.name))])})),0)}),[],!1,null,"361d6d7c",null);n.default=c.exports}}]);