(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)o=r[u],a[o]&&p.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},a={app:0},n=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"08ee":function(t,e,s){"use strict";var i=s("3ad2"),a=s.n(i);a.a},"0bfd":function(t,e,s){},"1a37":function(t,e,s){},"20a2":function(t,e,s){},"2baf":function(t,e,s){},"399f":function(t,e,s){"use strict";var i=s("1a37"),a=s.n(i);a.a},"3ad2":function(t,e,s){},"3d94":function(t,e,s){"use strict";var i=s("2baf"),a=s.n(i);a.a},"3dec":function(t,e,s){},"521a":function(t,e,s){"use strict";var i=s("8d1d"),a=s.n(i);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),a=(s("df49"),s("2696")),n=s("031d"),o=s("1cc1"),r=s("0679"),c=s("2799"),l=s("36b6"),d=s("0f85");i["a"].use(a["a"]),i["a"].use(n["a"]),i["a"].use(o["a"]),i["a"].use(r["a"]),i["a"].use(c["a"]),i["a"].use(l["a"]),i["a"].use(d["a"]);var u=s("df9a"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"detail"},[s("div",{staticClass:"detail-wrapper clearfix"},[s("div",{staticClass:"detail-container"},[s("div",{staticClass:"wrapper-title"},[s("div",{staticClass:"name"},[t._v(t._s(t.seller.name))]),s("Star",{attrs:{score:t.seller.score,size:48}})],1),t.seller.supports?s("div",{staticClass:"supports"},[s("div",{staticClass:"title"},[s("div",{staticClass:"line"}),s("span",{staticClass:"text"},[t._v("优惠信息")]),s("div",{staticClass:"line"})]),s("div",{staticClass:"content"},t._l(t.seller.supports,function(e,i){return s("div",{key:i,staticClass:"item"},[s("Support",{attrs:{size:2,type:e.type}}),s("span",{staticClass:"text"},[t._v(t._s(e.description))])],1)}),0)]):t._e(),t.seller.bulletin?s("div",{staticClass:"bulletin"},[s("div",{staticClass:"title"},[s("div",{staticClass:"line"}),s("span",{staticClass:"text"},[t._v("商家公告")]),s("div",{staticClass:"line"})]),s("div",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]):t._e()])]),s("div",{staticClass:"detail-close",on:{click:t.hide}},[s("i",{staticClass:"icon-close"})])])])},f=[],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stars",class:t.starType},t._l(t.starArray,function(t,e){return s("span",{key:e,staticClass:"star",class:t})}),0)},h=[],m=(s("c5f6"),{props:{size:Number,score:Number},computed:{starType:function(){return"star-"+this.size},starArray:function(){for(var t=Math.floor(2*this.score)/2,e="on",s="half",i="off",a=[],n=t%1!==0,o=0;o<Math.floor(t);o++)a[o]=e;n&&a.push(s);while(a.length<5)a.push(i);return a}}}),C=m,_=(s("8f0c"),s("2877")),b=Object(_["a"])(C,v,h,!1,null,null,null),g=b.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{directives:[{name:"show",rawName:"v-show",value:t.type>=0,expression:"type>=0"}],staticClass:"icon",class:t.supportType})},w=[],x={data:function(){return{classMap:["decrease","discount","special","invoice","guarantee"]}},props:{type:Number,size:Number},computed:{supportType:function(){return"support-".concat(this.size," ").concat(this.classMap[this.type])}}},k=x,S=(s("3d94"),Object(_["a"])(k,y,w,!1,null,null,null)),$=S.exports,O=(s("ac6a"),s("c1df")),T=s.n(O),P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"split"})},j=[],F={data:function(){return{}}},D=F,N=(s("b0cb"),Object(_["a"])(D,P,j,!1,null,null,null)),E=N.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rating-select"},[s("div",{staticClass:"rateType border-bottom-1px"},[s("span",{staticClass:"positive",class:{active:"2"==t.selectType},on:{click:function(e){return t.select(2)}}},[t._v("\n      "+t._s(t.desc.all)+"\n      "),s("span",{staticClass:"ratings-num"},[t._v(t._s(t.ratings?t.ratings.length:"0"))])]),s("span",{staticClass:"positive",class:{active:"0"==t.selectType},on:{click:function(e){return t.select(0)}}},[t._v("\n      "+t._s(t.desc.positive)+"\n      "),s("span",{staticClass:"ratings-num"},[t._v(t._s(t.positives?t.positives.length:"0"))])]),s("span",{staticClass:"negative",class:{active:"1"==t.selectType},on:{click:function(e){return t.select(1)}}},[t._v("\n      "+t._s(t.desc.negative)+"\n      "),s("span",{staticClass:"ratings-num"},[t._v(t._s(t.negatives?t.negatives.length:"0"))])])]),s("div",{staticClass:"switch",on:{click:function(e){return e.stopPropagation(),t.toggleContent(e)}}},[s("i",{staticClass:"icon-check_circle",class:{on:t.contentOnly}}),s("span",{staticClass:"selectedRatings"},[t._v("只看有内容的评价")])])])},B=[],z=2,R=0,M=1,A={props:{ratings:Array,desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}},contentOnly:{type:Boolean,default:!1},selectType:{type:Number,default:z}},computed:{positives:function(){if(this.ratings)return this.ratings.filter(function(t){return t.rateType==R})},negatives:function(){if(this.ratings)return this.ratings.filter(function(t){return t.rateType==M})}},methods:{toggleContent:function(t){t._constructed&&this.$emit("toggleContent",!this.contentOnly)},select:function(t){this.$emit("selectType",t)}}},H=A,I=(s("6682"),Object(_["a"])(H,L,B,!1,null,null,null)),Y=I.exports,J={data:function(){return{visible:!1}},methods:{show:function(){this.visible=!0,this.$emit("show")},hide:function(){this.visible=!1,this.$emit("hide")}}},U=2,W={data:function(){return{ratingTypeMap:["icon-thumb_up","icon-thumb_down"],contentOnly:!1,selectType:U}},computed:{computedRatings:function(){var t=this,e=this.ratings,s=[];return e.forEach(function(e){t.contentOnly&&!e.text||2!=t.selectType&&t.selectType!=e.rateType||s.push(e)}),s}},methods:{toggleContent:function(t){this.contentOnly=t},select:function(t){this.selectType=t},rateTime:function(t){return T()(t).format("YYYY-MM-DD HH:mm")}},components:{RatingSelect:Y,Split:E}},X={name:"detail",mixins:[J],props:{seller:{type:Object,default:function(){return{}}}},components:{Star:g,Support:$}},q=X,G=(s("399f"),Object(_["a"])(q,p,f,!1,null,"6f2987fe",null)),K=G.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade",appear:""}},[s("cube-popup",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],ref:"popup",attrs:{maskClosable:!0,position:"bottom"},on:{"mask-click":t.maskClick}},[s("transition",{attrs:{name:"move",appear:""},on:{"after-leave":t.onLeave}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"popup-content"},[s("div",{staticClass:"head"},[s("span",{staticClass:"cart"},[t._v("购物车")]),s("span",{staticClass:"clear",on:{click:function(e){return e.stopPropagation(),t.clear(e)}}},[t._v("清空")])]),s("cube-scroll",{ref:"foodsScroll",staticClass:"foods",attrs:{data:t.selectedFoods}},[s("div",t._l(t.selectedFoods,function(e,i){return s("div",{key:i,staticClass:"item border-bottom-1px"},[s("span",{staticClass:"name"},[t._v(t._s(e.name))]),s("span",{staticClass:"extra"},[s("span",{staticClass:"price"},[t._v("¥ "+t._s(e.price*e.count))]),s("Cartcontrol",{attrs:{food:e},on:{decrease:t.decrease,add:function(s){return t.add(e)},ballDrop:t.ballDrop}})],1)])}),0)])],1)])],1)],1)},V=[],Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cartcontrol"},[s("transition",{attrs:{name:"move"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"decrease",on:{click:function(e){return e.stopPropagation(),t.decreaseCart(e)}}},[s("i",{staticClass:"icon-remove_circle_outline cart-icon"})])]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"count"},[t._v(t._s(t.food.count))]),s("div",{staticClass:"add",on:{click:function(e){return e.stopPropagation(),t.addCart(e)}}},[s("i",{staticClass:"icon-add_circle cart-icon"})])],1)},tt=[],et={props:{food:{type:Object,default:function(){return{count:0}}}},methods:{decreaseCart:function(t){t._constructed&&this.$emit("decrease",this.food)},addCart:function(t){t._constructed&&(this.$emit("add",this.food),this.$emit("ballDrop",t.target))}}},st=et,it=(s("08ee"),Object(_["a"])(st,Z,tt,!1,null,null,null)),at=it.exports,nt={name:"shopcart-list",mixins:[J],props:{selectedFoods:{type:Array,default:function(){return[]}}},created:function(){var t=this;this.$on("show",function(){t.$nextTick(function(){t.$refs.foodsScroll.refresh()})})},methods:{clear:function(){var t=this;this.dialog=this.dialog||this.$createDialog({type:"confirm",title:"是否要清空购物车？",confirmBtn:{text:"确定",active:!0},cancleBtn:{text:"取消",active:!1},onConfirm:function(){t.$emit("clear")}}).show()},decrease:function(t){this.$emit("decrease",t)},add:function(t){this.$emit("add",t)},ballDrop:function(t){this.$emit("ballDrop",t)},maskClick:function(){this.hide(),this.$emit("hide")},onLeave:function(){this.$emit("leave")}},components:{Cartcontrol:at}},ot=nt,rt=(s("91e9"),Object(_["a"])(ot,Q,V,!1,null,"28c260e5",null)),ct=rt.exports,lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"shopcart-sticky"},[s("Shopcart",{ref:"shopcart",attrs:{deliveryPrice:t.deliveryPrice,minPrice:t.minPrice,selectedFoods:t.selectedFoods,fold:t.fold,sticky:!0},on:{add:t.add,decrease:t.decrease,clear:t.clear}})],1)},dt=[],ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"shopcart"},[s("div",{staticClass:"content",on:{click:t.toggleList}},[s("div",{staticClass:"content-left"},[s("div",{staticClass:"logo-wrapper",class:{haveSeleced:t.totalCount>0}},[s("div",{staticClass:"icon-shopping_cart"}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"totalCount"},[t._v(t._s(t.totalCount))])]),s("div",{staticClass:"price border-right-1px",class:{haveSeleced:t.totalCount>0}},[t._v("¥ "+t._s(t.totalPrice))]),s("div",{staticClass:"desc"},[t._v("另需配送费 ¥ "+t._s(t.deliveryPrice)+"元")])]),s("div",{staticClass:"content-right",class:t.payClass,on:{click:t.pay}},[t._v(t._s(t.payDesc))])]),s("div",{staticClass:"ball-container"},t._l(t.balls,function(e,i){return s("div",{key:i},[s("transition",{on:{"before-enter":t.beforeDrop,enter:t.droping,"after-enter":t.afterDrop}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"ball.show"}],staticClass:"ball"},[s("div",{staticClass:"inner"})])])],1)}),0)])])},pt=[],ft=10;function vt(){for(var t=[],e=0;e<ft;e++)t.push({show:!1});return t}var ht={data:function(){return{balls:vt(),listFold:this.fold}},props:{deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0},selectedFoods:{type:Array,default:function(){return[]}},fold:{type:Boolean,default:!0},sticky:{type:Boolean,default:!1}},created:function(){this.dropBalls=[]},methods:{drop:function(t){for(var e=0;e<this.balls.length;e++){var s=this.balls[e];if(!s.show)return s.show=!0,s.el=t,void this.dropBalls.push(s)}},beforeDrop:function(t){var e=this.dropBalls[this.dropBalls.length-1],s=e.el.getBoundingClientRect(),i=s.left-22,a=-(window.innerHeight-s.top-48);t.style.display="",t.style.transform=t.style.webkitTransform="translate3d(0,".concat(a,"px,0)");var n=t.getElementsByClassName("inner")[0];n.style.transform=n.style.webkitTransform="translate3d(".concat(i,"px,0,0)")},droping:function(t,e){this._reflow=document.body.offsetHeight,t.style.transform=t.style.webkitTransform="translate3D(0,0,0)";var s=t.getElementsByClassName("inner")[0];s.style.transform=s.style.webkitTransform="translate3D(0,0,0)",t.addEventListener("transitionend",e)},afterDrop:function(t){var e=this.dropBalls.shift();e&&(e.show=!1,t.style.display="none")},toggleList:function(){if(this.listFold){if(!this.totalCount)return;this.listFold=!1,this._showShopcartList(),this._showShopcartSticky()}else this.listFold=!0,this._hideShopcartList()},_showShopcartList:function(){var t=this;this.cartComp=this.cartComp||this.$createShopcartList({$props:{selectedFoods:"selectedFoods"},$events:{clear:this.clear,decrease:this.decrease,add:this.add,hide:function(){t.listFold=!0},leave:this._hideShopCartSticky,ballDrop:function(e){t.stickyComp.drop(e)}}}),this.cartComp.show()},_hideShopcartList:function(){var t=this.sticky?this.$parent.list:this.cartComp;t.hide&&t.hide()},_showShopcartSticky:function(){this.stickyComp=this.stickyComp||this.$createShopcartSticky({$props:{selectedFoods:"selectedFoods",deliveryPrice:"deliveryPrice",minPrice:"minPrice",fold:"listFold",list:this.cartComp},$events:{add:this.add}}),this.stickyComp.show()},_hideShopCartSticky:function(){this.stickyComp.hide()},pay:function(t){this.minPrice>this.totalPrice||(this.$createDialog({type:"alert",title:"支付",content:"需要支付".concat(this.totalPrice,"元")}).show(),t.stopPropagation())},clear:function(){this.$emit("clear")},decrease:function(t){this.$emit("decrease",t)},add:function(t){this.$emit("add",t)}},computed:{totalPrice:function(){var t=0;return this.selectedFoods.forEach(function(e){t+=e.price*e.count}),t},totalCount:function(){var t=0;return this.selectedFoods.forEach(function(e){t+=e.count}),t},payDesc:function(){var t,e=this.totalPrice,s=this.minPrice;return 0===this.totalPrice?t="¥ ".concat(s,"起送"):e<s?t="还差¥ ".concat(s-e,"起送"):e>=s&&(t="去结算"),t},payClass:function(){return this.totalPrice>=this.minPrice?"enough":"not-enough"}},watch:{fold:function(t){this.listFold=t},totalCount:function(t){this.listFold||t||this._hideShopcartList()}}},mt=ht,Ct=(s("8300"),Object(_["a"])(mt,ut,pt,!1,null,null,null)),_t=Ct.exports,bt={name:"shopcart-sticky",mixins:[J],props:{deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0},selectedFoods:{type:Array,default:function(){return[]}},fold:{type:Boolean,default:!0},list:{type:Object,default:function(){return{}}}},methods:{drop:function(t){this.$refs.shopcart.drop(t)},clear:function(){this.$emit("clear")},decrease:function(t){this.$emit("decrease",t)},add:function(t){this.$emit("add",t)}},components:{Shopcart:_t}},gt=bt,yt=(s("cb04"),Object(_["a"])(gt,lt,dt,!1,null,"81b60644",null)),wt=yt.exports,xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"move",appear:""},on:{"after-leave":t.afterLeave}},[t.visible?s("div",{staticClass:"food"},[s("cube-scroll",{ref:"scroll"},[s("div",[s("div",{staticClass:"description"},[s("div",{staticClass:"image-head"},[s("img",{staticClass:"image",attrs:{src:t.food.image}}),s("i",{staticClass:"icon-arrow_lift",on:{click:t.hide}})]),s("div",{staticClass:"food-description"},[s("div",{staticClass:"name"},[t._v(t._s(t.food.name))]),s("div",{staticClass:"detail"},[s("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),s("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),s("div",{staticClass:"price"},[s("span",{staticClass:"mark"},[t._v("¥")]),s("span",{staticClass:"now"},[t._v(t._s(t.food.price))]),t.food.oldPrice?s("span",{staticClass:"old"},[t._v("¥"+t._s(t.food.oldPrice))]):t._e()]),s("div",{staticClass:"cartcontrol-wrapper"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count||food.count===0"}],staticClass:"add-cart",on:{click:function(e){return e.stopPropagation(),t.addFirst(e)}}},[t._v("加入购物车")]),s("Cartcontrol",{directives:[{name:"show",rawName:"v-show",value:t.food.count,expression:"food.count"}],attrs:{food:t.food},on:{decrease:t.decrease,add:t.add,ballDrop:t.ballDrop}})],1)])]),s("Split"),s("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[s("div",{staticClass:"title"},[t._v("商品介绍")]),s("div",{staticClass:"content"},[t._v(t._s(t.food.info))])]),s("Split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),s("div",{staticClass:"ratings"},[s("div",{staticClass:"title"},[t._v("商品评价")]),s("RatingSelect",{attrs:{ratings:t.ratings,desc:t.desc,selectType:t.selectType,contentOnly:t.contentOnly},on:{toggleContent:t.toggleContent,selectType:t.select}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.ratings&&t.ratings.length,expression:"ratings && ratings.length"}],staticClass:"ratings-list"},t._l(t.computedRatings,function(e,i){return s("div",{key:i,staticClass:"rating-item border-bottom-1px"},[s("div",{staticClass:"time-user"},[s("span",{staticClass:"time"},[t._v(t._s(t.rateTime(e.rateTime)))]),s("div",{staticClass:"user"},[s("span",{staticClass:"username"},[t._v(t._s(e.username))]),s("img",{staticClass:"avatar",attrs:{src:e.avatar}})])]),s("div",{staticClass:"content"},[s("i",{staticClass:"type",class:t.ratingTypeMap[e.rateType]}),s("span",{staticClass:"text"},[t._v(t._s(e.text))])])])}),0),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.computedRatings.length,expression:"!computedRatings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])],1)],1)])],1):t._e()])},kt=[],St={name:"food",mixins:[J,W],props:{food:Object},data:function(){return{desc:{all:"全部",positive:"推荐",negative:"吐槽"},ratings:this.food.ratings}},created:function(){var t=this;this.$on("show",function(){t.$nextTick(function(){t.$refs.scroll.refresh()})})},methods:{add:function(){this.$emit("add",this.food)},decrease:function(){this.$emit("decrease",this.food)},ballDrop:function(t){this.$emit("ballDrop",t)},addFirst:function(t){this.$emit("add",this.food),this.$emit("ballDrop",t.target)},afterLeave:function(){this.$emit("foodLeave")}},components:{Cartcontrol:at}},$t=St,Ot=(s("df7e"),Object(_["a"])($t,xt,kt,!1,null,"15e90b72",null)),Tt=Ot.exports;Object(u["a"])(i["a"],K),Object(u["a"])(i["a"],ct),Object(u["a"])(i["a"],wt),Object(u["a"])(i["a"],Tt);var Pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header",{attrs:{seller:t.seller}}),s("Tab",{attrs:{tabs:t.tabs}})],1)},jt=[],Ft=(s("386d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:t.seller.avatar}})]),s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[s("span",{staticClass:"brand"}),s("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),s("div",{staticClass:"description"},[t._v(t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟必达")]),t.seller.supports?s("div",{staticClass:"supports"},[s("Support",{attrs:{type:t.seller.supports[0].type,size:1}}),s("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])],1):t._e()]),t.seller.supports?s("div",{staticClass:"support-count",on:{click:t.showDetail}},[s("span",[t._v(t._s(t.seller.supports.length)+"个")]),s("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),s("div",{staticClass:"bulletin-wrapper"},[s("span",{staticClass:"bulletin-title"}),s("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),s("i",{staticClass:"icon-keyboard_arrow_right",on:{click:t.showDetail}})]),s("div",{staticClass:"background"},[s("img",{attrs:{src:t.seller.avatar}})])])}),Dt=[],Nt={props:{seller:{type:Object}},methods:{showDetail:function(){this.detailCom=this.detailCom||this.$createDetail({$props:{seller:"seller"}}),this.detailCom.show()}},components:{Support:$}},Et=Nt,Lt=(s("521a"),Object(_["a"])(Et,Ft,Dt,!1,null,null,null)),Bt=Lt.exports,zt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tab"},[s("cube-tab-bar",{ref:"tabBar",staticClass:"border-bottom-1px",attrs:{data:t.tabs,showSlider:!0,useTransition:!1},model:{value:t.selectedLabel,callback:function(e){t.selectedLabel=e},expression:"selectedLabel"}}),s("div",{staticClass:"slide-wrapper"},[s("cube-slide",{ref:"slide",attrs:{autoPlay:!1,showDots:!1,"initial-index":t.index,loop:!1,options:t.slideOptions},on:{change:t.onChange,scroll:t.onScroll}},t._l(t.tabs,function(t,e){return s("cube-slide-item",{key:e},[s(t.components,{ref:"component",refInFor:!0,tag:"component",attrs:{seller:t.data.seller}})],1)}),1)],1)],1)},Rt=[],Mt=(s("20d6"),{props:{tabs:{type:Array,default:function(){return[]}},initialIndex:{type:Number,default:0}},data:function(){return{index:this.initialIndex,slideOptions:{listenScroll:!0,probeType:3}}},computed:{selectedLabel:{get:function(){return this.tabs[this.index].label},set:function(t){this.index=this.tabs.findIndex(function(e){return e.label==t})}}},mounted:function(){this.onChange(this.index)},methods:{onChange:function(t){this.index=t;var e=this.$refs.component[t];e&&e.fetch&&e.fetch()},onScroll:function(t){var e=this.$refs.tabBar.$el.clientWidth,s=this.$refs.slide.slide.scrollerWidth,i=-t.x/s*e;this.$refs.tabBar.setSliderTransform(i)}}}),At=Mt,Ht=(s("6817"),Object(_["a"])(At,zt,Rt,!1,null,"a41c531e",null)),It=Ht.exports,Yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods"},[s("div",{staticClass:"scroll-nav-wrapper"},[t.goods.length?s("cube-scroll-nav",{attrs:{side:!0,data:t.goods,options:t.scrollOptions},scopedSlots:t._u([{key:"bar",fn:function(e){return[s("cube-scroll-nav-bar",{attrs:{direction:"vertical",txts:t.barTxts,labels:e.labels,current:e.current},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"text"},[e.txt.type>=1?s("Support",{attrs:{size:3,type:e.txt.type}}):t._e(),s("span",[t._v(t._s(e.txt.name))]),e.txt.count>0?s("span",{staticClass:"bubble"},[s("Bubble",{attrs:{number:e.txt.count}})],1):t._e()],1)]}}],null,!0)})]}}],null,!1,686186565)},t._l(t.goods,function(e){return s("cube-scroll-nav-panel",{key:e.name,attrs:{label:e.name,title:e.name}},t._l(e.foods,function(e,i){return s("div",{key:i,staticClass:"food-item border-bottom-1px",on:{click:function(s){return t.showFoodDetail(e)}}},[s("img",{staticClass:"icon",attrs:{src:e.icon}}),s("div",{staticClass:"content"},[s("div",{staticClass:"food-name"},[t._v(t._s(e.name))]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.description,expression:"food.description"}],staticClass:"description"},[t._v(t._s(e.description))]),s("div",{staticClass:"extra"},[s("span",{staticClass:"sellCount"},[t._v("月售"+t._s(e.sellCount)+"份")]),s("span",{staticClass:"rating"},[t._v("好评率"+t._s(e.rating)+"%")])]),s("div",{staticClass:"price"},[s("span",{staticClass:"mark"},[t._v("¥")]),s("span",{staticClass:"nowPrice"},[t._v(t._s(e.price))]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.oldPrice,expression:"food.oldPrice"}],staticClass:"oldPrice"},[t._v("¥"+t._s(e.oldPrice))])])]),s("Cartcontrol",{staticClass:"cartcontrol",attrs:{food:e},on:{decrease:t.decrease,add:t.add,ballDrop:t.ballDrop}})],1)}),0)}),1):t._e()],1),s("Shopcart",{ref:"shopcart",attrs:{deliveryPrice:t.seller.deliveryPrice,minPrice:t.seller.minPrice,selectedFoods:t.selectedFoods},on:{clear:t.clear,add:t.add,decrease:t.decrease}})],1)},Jt=[],Ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bubble"},[t._v("\n"+t._s(t.number)+"\n ")])},Wt=[],Xt={props:{number:Number}},qt=Xt,Gt=(s("83be"),Object(_["a"])(qt,Ut,Wt,!1,null,"82633376",null)),Kt=Gt.exports,Qt=s("bc3a"),Vt=0;function Zt(t){return function(e){return Qt.get(t,{params:e}).then(function(t){var e=t.data,s=e.errno,i=e.data;if(s==Vt)return i})}}var te=Zt("/api/seller"),ee=Zt("/api/goods"),se=Zt("/api/ratings"),ie={data:function(){return{goods:[],choosedFood:{},scrollOptions:{click:!1,directionLockThreshold:0}}},props:{seller:Object},computed:{barTxts:function(){var t=[];return this.goods.forEach(function(e){var s=e.type,i=e.name,a=e.foods,n=0;a.forEach(function(t){n+=t.count||0}),t.push({type:s,name:i,count:n})}),t},selectedFoods:function(){for(var t=[],e=0;e<this.goods.length;e++)for(var s=0;s<this.goods[e].foods.length;s++){var i=this.goods[e].foods[s];i.count>0&&t.push(i)}return t}},methods:{fetch:function(){var t=this;this.fetched||(this.fetched=!0,ee({id:this.seller.id}).then(function(e){t.goods=e},function(){console.log("无法获取商品数据")}))},decrease:function(t){this.goods.forEach(function(e){return e.foods.forEach(function(e){e===t&&e.count&&(e.count-=1)})})},add:function(t){var e=this;this.goods.forEach(function(s){return s.foods.forEach(function(s){s===t&&(s.count?s.count+=1:e.$set(s,"count",1))})})},ballDrop:function(t){this._drop(t)},clear:function(){this.goods.forEach(function(t){return t.foods.forEach(function(t){t.count=0})})},showFoodDetail:function(t){this.choosedFood=t,this._showFood(),this._showShopcartSticky()},_showFood:function(){var t=this;this.foodComp=this.foodComp||this.$createFood({$props:{food:"choosedFood"},$events:{add:function(e){t.add(e)},decrease:this.decrease,foodLeave:this._hideShopCartSticky,ballDrop:function(e){t.stickyComp.drop(e)}}}),this.foodComp.show()},_showShopcartSticky:function(){this.stickyComp=this.stickyComp||this.$createShopcartSticky({$props:{selectedFoods:"selectedFoods",deliveryPrice:this.seller.deliveryPrice,minPrice:this.seller.minPrice,fold:!0},$events:{add:this.add,decrease:this.decrease,clear:this.clear}}),this.stickyComp.show()},_hideShopCartSticky:function(){this.stickyComp.hide()},_drop:function(t){this.$refs.shopcart.drop(t)}},components:{Cartcontrol:at,Support:$,Shopcart:_t,Bubble:Kt}},ae=ie,ne=(s("61e8"),Object(_["a"])(ae,Yt,Jt,!1,null,null,null)),oe=ne.exports,re=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("cube-scroll",{staticClass:"ratings-wrapper",attrs:{options:t.scrollOptions,data:t.computedRatings}},[s("div",[s("div",{staticClass:"overview"},[s("div",{staticClass:"overview-left"},[s("div",{staticClass:"score"},[t._v(t._s(t.seller.score))]),s("div",{staticClass:"text"},[t._v("综合评分")]),s("div",{staticClass:"rankRate"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),s("div",{staticClass:"overview-right"},[s("div",{staticClass:"item"},[t._v("\n          服务态度\n          "),s("Star",{attrs:{size:36,score:t.seller.serviceScore}}),s("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),s("div",{staticClass:"item"},[t._v("\n          商品评分\n          "),s("Star",{attrs:{size:36,score:t.seller.foodScore}}),s("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),s("div",{staticClass:"item"},[t._v("\n          送达时间\n          "),s("span",{staticClass:"text"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),s("Split"),t.ratings.length?s("div",{staticClass:"ratings-content"},[s("RatingSelect",{attrs:{ratings:t.ratings,selectType:t.selectType,contentOnly:t.contentOnly},on:{toggleContent:t.toggleContent,selectType:t.select}}),s("div",{staticClass:"rating-list"},t._l(t.computedRatings,function(e,i){return s("div",{key:i,staticClass:"item border-bottom-1px"},[s("img",{staticClass:"avatar",attrs:{src:e.avatar}}),s("div",{staticClass:"content"},[s("div",{staticClass:"username-time"},[s("span",{staticClass:"username"},[t._v(t._s(e.username))]),s("span",{staticClass:"time"},[t._v(t._s(t.rateTime(e.rateTime)))])]),s("div",{staticClass:"score"},[s("Star",{attrs:{size:24,score:e.score}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.deliveryTime,expression:"item.deliveryTime"}],staticClass:"deliveryTime"},[t._v(t._s(e.deliveryTime)+"分钟送达")])],1),s("div",{staticClass:"text"},[t._v(t._s(e.text))]),s("div",{directives:[{name:"show",rawName:"v-show",value:0!==e.recommend.length,expression:"item.recommend.length!==0"}],staticClass:"recommend"},[s("i",{staticClass:"thumpType",class:t.ratingTypeMap[e.rateType]}),t._l(e.recommend,function(e,i){return s("span",{key:i,staticClass:"recommend-item"},[t._v(t._s(e))])})],2)])])}),0),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.computedRatings.length,expression:"!computedRatings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])],1):t._e()],1)])},ce=[],le={mixins:[W],data:function(){return{ratings:[],scrollOptions:{click:!1,directionLockThreshold:0}}},props:{seller:Object},methods:{fetch:function(){var t=this;this.fetched||(this.fetched=!0,se({id:this.seller.id}).then(function(e){t.ratings=e}))}},components:{Star:g}},de=le,ue=(s("6764"),Object(_["a"])(de,re,ce,!1,null,null,null)),pe=ue.exports,fe=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("cube-scroll",{staticClass:"seller",attrs:{options:t.sellerScrollOptions}},[s("div",{staticClass:"desc"},[s("div",{staticClass:"desc-header border-bottom-1px"},[s("div",{staticClass:"title"},[t._v(t._s(t.seller.name))]),s("div",{staticClass:"score"},[s("Star",{attrs:{size:36,score:t.seller.score}}),s("span",{staticClass:"num"},[t._v("("+t._s(t.seller.ratingCount)+")")]),s("span",{staticClass:"sellCount"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),s("div",{staticClass:"collect-container",class:{active:t.collect},on:{click:t.toggleFavorite}},[s("i",{staticClass:"icon-favorite"}),s("span",{staticClass:"text"},[t._v(t._s(t.collectDesc))])])]),s("div",{staticClass:"delivery"},[s("div",{staticClass:"item border-right-1px"},[s("div",{staticClass:"title"},[t._v("起送价")]),s("div",{staticClass:"content"},[s("span",{staticClass:"num"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n        ")])]),s("div",{staticClass:"item border-right-1px"},[s("div",{staticClass:"title"},[t._v("商家配送")]),s("div",{staticClass:"content"},[s("span",{staticClass:"num"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n        ")])]),s("div",{staticClass:"item border-right-1px"},[s("div",{staticClass:"title"},[t._v("平均配送时间")]),s("div",{staticClass:"content"},[s("span",{staticClass:"num"},[t._v(t._s(t.seller.deliveryTime))]),t._v("元\n        ")])])])]),s("Split"),s("div",{staticClass:"bulletin-supports"},[s("div",{staticClass:"bulletin border-bottom-1px"},[s("div",{staticClass:"title"},[t._v("公告与活动")]),s("div",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),s("div",{staticClass:"supports"},t._l(t.seller.supports,function(e,i){return s("div",{key:i,staticClass:"border-bottom-1px support"},[s("Support",{attrs:{size:4,type:e.type}}),s("span",{staticClass:"text"},[t._v(t._s(e.description))])],1)}),0)]),s("Split"),s("div",{staticClass:"pics"},[s("div",{staticClass:"title"},[t._v("商家实景")]),s("cube-scroll",{staticClass:"pics-container",attrs:{data:t.seller.pics,direction:"horizontal",options:t.picsScrollOptions}},[s("div",{staticClass:"picsInner"},t._l(t.seller.pics,function(t,e){return s("img",{key:e,staticClass:"pics-item",attrs:{src:t}})}),0)])],1),s("Split"),s("div",{staticClass:"infos"},[s("div",{staticClass:"title border-bottom-1px"},[t._v("商家信息")]),s("div",{staticClass:"infos-container"},t._l(t.seller.infos,function(e,i){return s("div",{key:i,staticClass:"infos-item border-bottom-1px"},[t._v(t._s(e))])}),0)])],1)},ve=[],he=s("335a"),me="__seller__";function Ce(t,e,s){var i=he["a"].get(me,{});i[t]||(i[t]={}),i[t][e]=s,he["a"].set(me,i)}function _e(t,e,s){var i=he["a"].get(me,{});return i[t]&&i[t][e]||s}var be={props:{seller:Object},data:function(){var t=this;return{collect:function(){return _e(t.seller.id,"collect",!1)}(),sellerScrollOptions:{click:!1,directionLockThreshold:0},picsScrollOptions:{scrollX:!0,stopPropagation:!0,directionLockThreshold:0}}},methods:{toggleFavorite:function(){this.collect=!this.collect,Ce(this.seller.id,"collect",this.collect)}},computed:{collectDesc:function(){return this.collect?"已收藏":"收藏"}},components:{Star:g,Support:$,Split:E}},ge=be,ye=(s("8916"),Object(_["a"])(ge,fe,ve,!1,null,null,null)),we=ye.exports,xe=s("72bf"),ke=s.n(xe),Se={data:function(){return{seller:{id:ke.a.parse(window.location.search).id}}},created:function(){this._getSeller()},computed:{tabs:function(){return[{label:"商品",components:oe,data:{seller:this.seller}},{label:"评论",components:pe,data:{seller:this.seller}},{label:"商家",components:we,data:{seller:this.seller}}]}},methods:{_getSeller:function(){var t=this;te({id:this.seller.id}).then(function(e){t.seller=e})}},components:{Header:Bt,Tab:It}},$e=Se,Oe=Object(_["a"])($e,Pt,jt,!1,null,null,null),Te=Oe.exports;s("f867");i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(Te)}}).$mount("#app")},"5d9c":function(t,e,s){var i={"./zh-cn":"5c3a","./zh-cn.js":"5c3a"};function a(t){var e=n(t);return s(e)}function n(t){var e=i[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id="5d9c"},6103:function(t,e,s){},"61e8":function(t,e,s){"use strict";var i=s("3dec"),a=s.n(i);a.a},6682:function(t,e,s){"use strict";var i=s("9f10"),a=s.n(i);a.a},6764:function(t,e,s){"use strict";var i=s("a859"),a=s.n(i);a.a},6817:function(t,e,s){"use strict";var i=s("988f"),a=s.n(i);a.a},8300:function(t,e,s){"use strict";var i=s("9b62"),a=s.n(i);a.a},"83be":function(t,e,s){"use strict";var i=s("ad47"),a=s.n(i);a.a},8916:function(t,e,s){"use strict";var i=s("c8a1"),a=s.n(i);a.a},"8d1d":function(t,e,s){},"8f0c":function(t,e,s){"use strict";var i=s("6103"),a=s.n(i);a.a},"91e9":function(t,e,s){"use strict";var i=s("20a2"),a=s.n(i);a.a},"988f":function(t,e,s){},"9b62":function(t,e,s){},"9f10":function(t,e,s){},a859:function(t,e,s){},ad47:function(t,e,s){},b0cb:function(t,e,s){"use strict";var i=s("0bfd"),a=s.n(i);a.a},c8a1:function(t,e,s){},cb04:function(t,e,s){"use strict";var i=s("dca2"),a=s.n(i);a.a},dca2:function(t,e,s){},df7e:function(t,e,s){"use strict";var i=s("f352"),a=s.n(i);a.a},f352:function(t,e,s){},f867:function(t,e,s){}});
//# sourceMappingURL=app.f1ffde61.js.map