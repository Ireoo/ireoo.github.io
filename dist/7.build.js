webpackJsonp([7],{1215:function(t,e,n){"use strict";function i(t){n(1256)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1231),r=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);var u=n(1258),a=n(18),c=i,f=a(r.a,u.a,!1,c,null,null);e.default=f.exports},1231:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Item",data:function(){return{item:{}}},mounted:function(){var t=this;this.$nextTick(function(){t.$store.commit("foot",!t.$route.meta.hideFooter),t.$db.table("items").where({_id:t.$route.params.id}).get("findone").then(function(e){t.item=e,t.$store.commit("title",e.title+" | "+t.$store.state.site.title)})})}}},1256:function(t,e,n){var i=n(1257);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(15)("c2cf9f50",i,!0)},1257:function(t,e,n){e=t.exports=n(14)(!1),e.push([t.i,"",""])},1258:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"main"})},o=[],r={render:i,staticRenderFns:o};e.a=r}});