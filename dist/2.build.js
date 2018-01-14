webpackJsonp([2],{1212:function(t,e,i){"use strict";function s(t){i(1247)}Object.defineProperty(e,"__esModule",{value:!0});var n=i(1228),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);var l=i(1249),a=i(18),c=s,u=a(o.a,l.a,!1,c,null,null);e.default=u.exports},1216:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(1220),e.default={name:"vue-list",props:["items","top","bottom"],data:function(){return{height:0,now:{loading:!1,x:0,y:0}}},mounted:function(){var t=this;this.$nextTick(function(){document.addEventListener("touchstart",t.touch,!1),document.addEventListener("touchmove",t.touch,!1),document.addEventListener("touchend",t.touch,!1),document.getElementsByClassName("body")[0].addEventListener("scroll",t.scroll,!1)})},destroyed:function(){document.removeEventListener("touchstart",this.touch,!1),document.removeEventListener("touchmove",this.touch,!1),document.removeEventListener("touchend",this.touch,!1),document.getElementsByClassName("body")[0].removeEventListener("scroll",this.scroll,!1)},methods:{touch:function(t){var e=this,t=t||window.event;switch(t.type){case"touchstart":this.now.y=t.touches[0].pageY;break;case"touchend":100!==this.height||this.now.loading?this.height=0:(this.now.loading=!0,this.top(function(t){e.now.loading=!1,e.height=0}));break;case"touchmove":var i=document.getElementsByClassName("body")[0].scrollTop;if(t.touches[0].pageY>this.now.y&&0===i){t.preventDefault();var s=t.touches[0].pageY-this.now.y;this.height=s/3,this.height>100&&(this.height=100)}}},scroll:function(t){var e=this,i=t.target.clientHeight;t.target.scrollHeight-i-t.target.scrollTop<=100&&!this.now.loading&&(this.now.loading=!0,this.bottom(function(t){e.now.loading=!1}))}}}},1217:function(t,e,i){"use strict";function s(t){i(1218)}Object.defineProperty(e,"__esModule",{value:!0});var n=i(1216),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);var l=i(1222),a=i(18),c=s,u=a(o.a,l.a,!1,c,null,null);e.default=u.exports},1218:function(t,e,i){var s=i(1219);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(15)("0b5d136e",s,!0)},1219:function(t,e,i){e=t.exports=i(14)(!1),e.push([t.i,"ul.items{padding:10px;background:#fff}",""])},1220:function(t,e,i){var s=i(1221);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(15)("54dfa5d0",s,!0)},1221:function(t,e,i){e=t.exports=i(14)(!1),e.push([t.i,"ul.items{margin:0}ul.items>li{margin:0 0 10px;padding:0;cursor:pointer}ul.items>li:last-child{margin:0}ul.items>li>div.media-body>p{margin-bottom:0}ul.items>li>div.media-body>p>br{clear:both}ul.items>li>div.media-body>p>span{float:right}ul.items>li>div.media-body>p>span:first-child{float:left}",""])},1222:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"items",style:{"margin-top":t.height+"px"}},t._l(t.items,function(e){return i("b-media",{key:e._id,attrs:{tag:"li"},on:{click:function(i){t.$router.push({path:"/"+e._id})}}},[i("b-img",{attrs:{slot:"aside",src:e.pict_url,width:"100",height:"100",alt:e.title},slot:"aside"}),t._v(" "),i("h5",{staticClass:"mt-0",domProps:{textContent:t._s(e.title)}}),t._v(" "),i("p",[i("span",[t._v("现价:"+t._s(e.zk_final_price)+" 原价:"+t._s(e.reserve_price))]),t._v(" "),i("span",[t._v("销量:"+t._s(e.volume))]),t._v(" "),i("br")]),t._v(" "),i("p",[i("span",[t._v("@"+t._s(e.shop_title))]),t._v(" "),i("span",[t._v(t._s(e.provcity))]),t._v(" "),i("br")])],1)}))},n=[],o={render:s,staticRenderFns:n};e.a=o},1228:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(1217),n=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={components:{VueList:n.default},name:"Hot",data:function(){return{sql:{table:"items",where:{click_url:{$ne:null}},other:{limit:20,skip:0,show:{_id:1,title:1,shop_title:1,zk_final_price:1,reserve_price:1,provcity:1,volume:1,pict_url:1}}},items:[],page:1}},filters:{itemFilter:function(t){return"/item/"+t}},mounted:function(){var t=this;this.sql.other.skip=0,this.$db.table(this.sql.table).where(this.sql.where).other(this.sql.other).get("find").then(function(e){t.page=1,t.items=e}),this.$nextTick(function(){t.$store.commit("foot",!t.$route.meta.hideFooter),t.$store.commit("title","推荐 | "+t.$store.state.site.title)})},methods:{top:function(t){var e=this;this.sql.other.skip=0,this.$db.table(this.sql.table).where(this.sql.where).other(this.sql.other).get("find").then(function(i){e.page=1,e.items=i,t(null)}).catch(function(e){alert(e),t(e)})},bottom:function(t){var e=this;this.sql.other.skip=20*this.page,this.$db.table(this.sql.table).where(this.sql.where).other(this.sql.other).get("find").then(function(i){20===i.length&&e.page++,i.forEach(function(i){e.items.push(i),t()})}).catch(function(e){t(e),alert(e)})}}}},1247:function(t,e,i){var s=i(1248);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(15)("4fd5e5dd",s,!0)},1248:function(t,e,i){e=t.exports=i(14)(!1),e.push([t.i,"",""])},1249:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("vue-list",{attrs:{items:t.items,top:t.top,bottom:t.bottom}})],1)},n=[],o={render:s,staticRenderFns:n};e.a=o}});