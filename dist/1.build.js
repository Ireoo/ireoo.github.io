webpackJsonp([1],{1207:function(t,e,i){"use strict";function n(t){i(1232)}Object.defineProperty(e,"__esModule",{value:!0});var s=i(1223),o=i.n(s);for(var r in s)"default"!==r&&function(t){i.d(e,t,function(){return s[t]})}(r);var a=i(1234),u=i(18),l=n,c=u(o.a,a.a,!1,l,null,null);e.default=c.exports},1216:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(1220),e.default={name:"vue-list",props:["items"],data:function(){return{height:0,now:{x:0,y:0}}},mounted:function(){var t=this;this.$nextTick(function(){t.$el.addEventListener("touchstart",t.touch,!1),t.$el.addEventListener("touchmove",t.touch,!1),t.$el.addEventListener("touchend",t.touch,!1)})},methods:{touch:function(t){var t=t||window.event;switch(t.type){case"touchstart":this.now.y=t.touches[0].pageY;break;case"touchend":this.height,this.height=0;break;case"touchmove":var e=document.getElementsByClassName("body")[0].scrollTop;t.touches[0].pageY>this.now.y&&0===e&&(t.preventDefault(),this.height=t.touches[0].pageY-this.now.y,this.height>100&&(this.height=100))}}}}},1217:function(t,e,i){"use strict";function n(t){i(1218)}Object.defineProperty(e,"__esModule",{value:!0});var s=i(1216),o=i.n(s);for(var r in s)"default"!==r&&function(t){i.d(e,t,function(){return s[t]})}(r);var a=i(1222),u=i(18),l=n,c=u(o.a,a.a,!1,l,null,null);e.default=c.exports},1218:function(t,e,i){var n=i(1219);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(15)("0bd52689",n,!0)},1219:function(t,e,i){e=t.exports=i(14)(!1),e.push([t.i,"",""])},1220:function(t,e,i){var n=i(1221);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(15)("54dfa5d0",n,!0)},1221:function(t,e,i){e=t.exports=i(14)(!1),e.push([t.i,"ul.items{margin:0}ul.items>li{margin:0 0 10px;padding:0;cursor:pointer}ul.items>li:last-child{margin:0}ul.items>li>div.media-body>p{margin-bottom:0}ul.items>li>div.media-body>p>br{clear:both}ul.items>li>div.media-body>p>span{float:right}ul.items>li>div.media-body>p>span:first-child{float:left}",""])},1222:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"items",style:{"padding-top":t.height+"px"},attrs:{id:"items"}},t._l(t.items,function(e){return i("b-media",{key:e._id,attrs:{tag:"li"},on:{click:function(i){t.$router.push({path:"/"+e._id})}}},[i("b-img",{attrs:{slot:"aside",src:e.pict_url,width:"100",height:"100",alt:e.title},slot:"aside"}),t._v(" "),i("h5",{staticClass:"mt-0",domProps:{textContent:t._s(e.title)}}),t._v(" "),i("p",[i("span",[t._v("现价:"+t._s(e.zk_final_price)+" 原价:"+t._s(e.reserve_price))]),t._v(" "),i("span",[t._v("销量:"+t._s(e.volume))]),t._v(" "),i("br")]),t._v(" "),i("p",[i("span",[t._v("@"+t._s(e.shop_title))]),t._v(" "),i("span",[t._v(t._s(e.provcity))]),t._v(" "),i("br")])],1)}))},s=[],o={render:n,staticRenderFns:s};e.a=o},1223:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1217),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{VueList:s.default},name:"Index",data:function(){return{items:[]}},filters:{itemFilter:function(t){return"/item/"+t}},mounted:function(){var t=this;this.$db.table("items").where({click_url:{$ne:null}}).other({limit:20,skip:0,show:{_id:1,title:1,shop_title:1,zk_final_price:1,reserve_price:1,provcity:1,volume:1,pict_url:1}}).get("find").then(function(e){t.items=e}).catch(alert),this.$nextTick(function(){t.$store.commit("foot",!t.$route.meta.hideFooter),t.$store.commit("title",""+t.$store.state.site.title)})}}},1232:function(t,e,i){var n=i(1233);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(15)("51cf1fe4",n,!0)},1233:function(t,e,i){e=t.exports=i(14)(!1),e.push([t.i,"",""])},1234:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("vue-list",{attrs:{items:t.items}})],1)},s=[],o={render:n,staticRenderFns:s};e.a=o}});