webpackJsonp([2],{1212:function(t,e,i){"use strict";function n(t){i(1247)}Object.defineProperty(e,"__esModule",{value:!0});var s=i(1228),o=i.n(s);for(var r in s)"default"!==r&&function(t){i.d(e,t,function(){return s[t]})}(r);var u=i(1249),l=i(18),a=n,c=l(o.a,u.a,!1,a,null,null);e.default=c.exports},1216:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(1220),e.default={name:"vue-list",props:["items"],data:function(){return{height:0,now:{x:0,y:0}}},mounted:function(){},methods:{on:function(t){this.now.y=t.touches[0].pageY},pull:function(t){t.touches[0].pageY<this.now.y&&(this.height=this.now.y-t.touches[0].pageY)},end:function(t){},cancel:function(t){}}}},1217:function(t,e,i){"use strict";function n(t){i(1218)}Object.defineProperty(e,"__esModule",{value:!0});var s=i(1216),o=i.n(s);for(var r in s)"default"!==r&&function(t){i.d(e,t,function(){return s[t]})}(r);var u=i(1222),l=i(18),a=n,c=l(o.a,u.a,!1,a,null,null);e.default=c.exports},1218:function(t,e,i){var n=i(1219);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(15)("810ac562",n,!0)},1219:function(t,e,i){e=t.exports=i(14)(!1),e.push([t.i,"",""])},1220:function(t,e,i){var n=i(1221);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(15)("54dfa5d0",n,!0)},1221:function(t,e,i){e=t.exports=i(14)(!1),e.push([t.i,"ul.items{margin:0}ul.items>li{margin:0 0 10px;padding:0;cursor:pointer}ul.items>li:last-child{margin:0}ul.items>li>div.media-body>p{margin-bottom:0}ul.items>li>div.media-body>p>br{clear:both}ul.items>li>div.media-body>p>span{float:right}ul.items>li>div.media-body>p>span:first-child{float:left}",""])},1222:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"items",style:{paddingTop:t.height},on:{touchstart:t.on,touchmove:t.pull,touchend:t.end,touchcancel:t.cancel}},t._l(t.items,function(e){return i("b-media",{key:e._id,attrs:{tag:"li"},on:{click:function(i){t.$router.push({path:"/"+e._id})}}},[i("b-img",{attrs:{slot:"aside",src:e.pict_url,width:"100",height:"100",alt:e.title},slot:"aside"}),t._v(" "),i("h5",{staticClass:"mt-0",domProps:{textContent:t._s(e.title)}}),t._v(" "),i("p",[i("span",[t._v("现价:"+t._s(e.zk_final_price)+" 原价:"+t._s(e.reserve_price))]),t._v(" "),i("span",[t._v("销量:"+t._s(e.volume))]),t._v(" "),i("br")]),t._v(" "),i("p",[i("span",[t._v("@"+t._s(e.shop_title))]),t._v(" "),i("span",[t._v(t._s(e.provcity))]),t._v(" "),i("br")])],1)}))},s=[],o={render:n,staticRenderFns:s};e.a=o},1228:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1217),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{VueList:s.default},name:"Hot",data:function(){return{items:[]}},filters:{itemFilter:function(t){return"/item/"+t}},mounted:function(){var t=this;this.$db.table("items").where({click_url:{$ne:null}}).other({limit:20,skip:0,show:{_id:1,title:1,shop_title:1,zk_final_price:1,reserve_price:1,provcity:1,volume:1,pict_url:1}}).get("find").then(function(e){t.items=e}),this.$nextTick(function(){t.$store.commit("foot",!t.$route.meta.hideFooter),t.$store.commit("title","推荐 | "+t.$store.state.site.title)})}}},1247:function(t,e,i){var n=i(1248);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(15)("5907cf0f",n,!0)},1248:function(t,e,i){e=t.exports=i(14)(!1),e.push([t.i,"",""])},1249:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("vue-list",{attrs:{items:t.items}})],1)},s=[],o={render:n,staticRenderFns:s};e.a=o}});