webpackJsonp([5],{1215:function(t,e,n){"use strict";function i(t){n(1249)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1224),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);var s=n(1251),u=n(18),c=i,f=u(a.a,s.a,!1,c,null,null);e.default=f.exports},1224:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Item",data:function(){return{item:{}}},mounted:function(){var t=this;this.$nextTick(function(){t.$db.table("items").where({_id:t.$route.params.id}).get("findone").then(function(e){t.item=e,t.$store.commit("title",e.title+" | "+t.$store.state.site.title)})})}}},1249:function(t,e,n){var i=n(1250);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(15)("5fa73df4",i,!0)},1250:function(t,e,n){e=t.exports=n(14)(!1),e.push([t.i,"",""])},1251:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"main"})},r=[],a={render:i,staticRenderFns:r};e.a=a}});