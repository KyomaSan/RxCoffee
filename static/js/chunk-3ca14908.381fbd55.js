(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ca14908"],{1276:function(t,e,n){"use strict";var i=n("d784"),a=n("44e7"),s=n("825a"),o=n("1d80"),r=n("4840"),c=n("8aa5"),u=n("50c4"),l=n("14c3"),d=n("9263"),h=n("d039"),p=[].push,g=Math.min,f=4294967295,v=!h((function(){return!RegExp(f,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(o(this)),s=void 0===n?f:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!a(t))return e.call(i,t,s);var r,c,u,l=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,v=new RegExp(t.source,h+"g");while(r=d.call(v,i)){if(c=v.lastIndex,c>g&&(l.push(i.slice(g,r.index)),r.length>1&&r.index<i.length&&p.apply(l,r.slice(1)),u=r[0].length,g=c,l.length>=s))break;v.lastIndex===r.index&&v.lastIndex++}return g===i.length?!u&&v.test("")||l.push(""):l.push(i.slice(g)),l.length>s?l.slice(0,s):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=o(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,a,n):i.call(String(a),e,n)},function(t,a){var o=n(i,t,this,a,i!==e);if(o.done)return o.value;var d=s(t),h=String(this),p=r(d,RegExp),k=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),x=new p(v?d:"^(?:"+d.source+")",m),b=void 0===a?f:a>>>0;if(0===b)return[];if(0===h.length)return null===l(x,h)?[h]:[];var C=0,y=0,$=[];while(y<h.length){x.lastIndex=v?y:0;var E,S=l(x,v?h:h.slice(y));if(null===S||(E=g(u(x.lastIndex+(v?0:y)),h.length))===C)y=c(h,y,k);else{if($.push(h.slice(C,y)),$.length===b)return $;for(var _=1;_<=S.length-1;_++)if($.push(S[_]),$.length===b)return $;y=C=E}}return $.push(h.slice(C)),$}]}),!v)},"14c3":function(t,e,n){var i=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var s=n.call(t,e);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"3be5":function(t,e,n){},"44e7":function(t,e,n){var i=n("861d"),a=n("c6b6"),s=n("b622"),o=s("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},6547:function(t,e,n){var i=n("a691"),a=n("1d80"),s=function(t){return function(e,n){var s,o,r=String(a(e)),c=i(n),u=r.length;return c<0||c>=u?t?"":void 0:(s=r.charCodeAt(c),s<55296||s>56319||c+1===u||(o=r.charCodeAt(c+1))<56320||o>57343?t?r.charAt(c):s:t?r.slice(c,c+2):o-56320+(s-55296<<10)+65536)}};t.exports={codeAt:s(!1),charAt:s(!0)}},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},9263:function(t,e,n){"use strict";var i=n("ad6d"),a=n("9f7f"),s=RegExp.prototype.exec,o=String.prototype.replace,r=s,c=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=c||l||u;d&&(r=function(t){var e,n,a,r,d=this,h=u&&d.sticky,p=i.call(d),g=d.source,f=0,v=t;return h&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(g="(?: "+g+")",v=" "+v,f++),n=new RegExp("^(?:"+g+")",p)),l&&(n=new RegExp("^"+g+"$(?!\\s)",p)),c&&(e=d.lastIndex),a=s.call(h?n:d,v),h?a?(a.input=a.input.slice(f),a[0]=a[0].slice(f),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:c&&a&&(d.lastIndex=d.global?a.index+a[0].length:e),l&&a&&a.length>1&&o.call(a[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(a[r]=void 0)})),a}),t.exports=r},"9f52":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"details-box"},[n("div",{staticClass:"top-nav"},[n("van-nav-bar",{attrs:{title:"商品详情","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}})],1),n("div",{staticClass:"show-img"},[n("img",{staticClass:"auto-img",attrs:{src:t.detailsData.small_img}})]),n("div",{staticClass:"show-msg"},[n("div",{staticClass:"title"},[n("h3",[t._v(t._s(t.detailsData.name))]),n("p",[t._v(t._s(t.detailsData.enname))]),n("h2",[t._v("￥"+t._s(t.detailsData.price))])]),n("div",{staticClass:"select"},[n("h3",[t._v("选择规格")]),t._l(t.detailsData.selectOptions,(function(e,i){return n("div",{key:i+4,staticClass:"templete"},[n("span",{staticClass:"s-title"},[t._v(t._s(e.title))]),n("ul",t._l(e.rule,(function(i,a){return n("li",{key:a+2,class:e.currentIndex==a?"active":"",on:{click:function(n){return t.select(e,a)}}},[t._v(" "+t._s(i.title)+" ")])})),0)])})),n("div",{staticClass:"select-num"},[n("h4",[t._v("数量选择")]),n("van-stepper",{staticClass:"p-num",attrs:{theme:"round","button-size":"20","disable-input":""},model:{value:t.seleNum,callback:function(e){t.seleNum=e},expression:"seleNum"}})],1),n("h4",[t._v("商品描述")]),t._l(t.detailsData.desc,(function(e,i){return n("p",{key:i,staticClass:"mess"},[t._v(t._s(i+1)+"、"+t._s(e))])}))],2)]),n("van-goods-action",[n("van-goods-action-icon",{attrs:{icon:"bag",color:"#999",text:"购物袋",badge:t.productCount<=0?"":t.productCount},on:{click:t.gotoShopbag}}),n("van-goods-action-icon",{attrs:{icon:"like",color:t.likestatus?"#854C21":"#999",text:t.likestatus?"已收藏":"收藏"},on:{click:t.islike}}),n("van-goods-action-button",{attrs:{color:"#b37647",type:"warning",text:"加入购物袋"},on:{click:t.addShopbag}}),n("van-goods-action-button",{attrs:{color:"#854C21",type:"danger",text:"立即购买"},on:{click:t.buynow}})],1)],1)},a=[],s=(n("4160"),n("a15b"),n("ac1f"),n("1276"),n("159b"),n("5530")),o=(n("3be5"),n("2f62")),r={name:"Details",data:function(){return{detailsData:{},likestatus:!1,seleNum:1}},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["changeShopbagCount"])),{},{getDetailsData:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:this.baseURL+"/productDetail",params:{appkey:this.appkey,pid:this.$route.params.pid}}).then((function(e){if(t.$toast.clear(),600==e.data.code){var n=e.data.result[0],i=["cream","tem","sugar","milk"];n.selectOptions=[],i.forEach((function(t){if(n[t]){var e=n[t].split("/"),i={title:n[t+"_desc"],currentIndex:0,rule:[]};e.forEach((function(t){var e={title:t};i.rule.push(e)})),n.selectOptions.push(i)}})),n.desc=n.desc.split(/\n/),t.detailsData=n}}))},onClickLeft:function(){this.$router.go(-1)},select:function(t,e){t.currentIndex!=e&&(t.currentIndex=e)},islike:function(){this.likestatus?this.unlike():this.like()},like:function(){var t=this,e=this.$cookies.get("tokenString");if(!e)return this.$toast.loading({message:"请先登录",forbidClick:!0,duration:2e3}),void setTimeout((function(){t.$router.push({name:"Login"})}),2e3);this.$axios({url:this.baseURL+"/like",method:"POST",data:{appkey:this.appkey,pid:this.$route.params.pid,tokenString:e}}).then((function(e){if(700==e.data.code)return t.$toast({message:e.data.msg,forbidClick:!0,duration:2e3}),void t.$router.push({name:"Login"});800==e.data.code?(t.likestatus=!0,t.$toast({message:e.data.msg,forbidClick:!0,duration:2e3})):t.$toast({message:e.data.msg,forbidClick:!0,duration:1e3})}))},unlike:function(){var t=this,e=this.$cookies.get("tokenString");this.$axios({url:this.baseURL+"/notlike",method:"POST",data:{appkey:this.appkey,pid:this.$route.params.pid,tokenString:e}}).then((function(e){if(700==e.data.code)return t.$toast({message:e.data.msg,forbidClick:!0,duration:1e3}),void t.$router.push({name:"Login"});900==e.data.code&&1==e.data.result&&(t.likestatus=!1,t.$toast({message:e.data.msg,forbidClick:!0,duration:1e3}))}))},checkLike:function(){var t=this,e=this.$cookies.get("tokenString");e&&this.axios({method:"GET",url:this.baseURL+"/findlike",params:{appkey:this.appkey,pid:this.$route.params.pid,tokenString:e}}).then((function(e){1e3==e.data.code&&e.data.result.length>0&&(t.likestatus=!0)}))},addShopbag:function(){var t=this,e=this.$cookies.get("tokenString");if(e){var n=[],i=this.detailsData.selectOptions;i.forEach((function(t){n.push(t.rule[t.currentIndex].title)})),this.axios({method:"POST",url:this.baseURL+"/addShopcart",data:{appkey:this.appkey,pid:this.$route.params.pid,count:this.seleNum,rule:n.join("/"),tokenString:e}}).then((function(e){if(700==e.data.code)return t.$toast({message:e.data.msg,forbidClick:!0,duration:3e3}),t.$router.push({name:"Login"});3e3==e.data.code&&1==e.data.status&&t.changeShopbagCount(t.productCount+1)}))}else this.$router.push({name:"Login"})},gotoShopbag:function(){this.$router.push({name:"Shopbag"})},getShopbagCount:function(){var t=this,e=this.$cookies.get("tokenString");e&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:this.baseURL+"/shopcartRows",params:{appkey:this.appkey,tokenString:e}}).then((function(e){t.$toast.clear(),700!=e.data.code&&8e3===e.data.code&&t.changeShopbagCount(e.data.result)})).catch((function(e){t.$toast.clear(),console.log("err ==> ",e)})))},buynow:function(){var t=this,e=this.$cookies.get("tokenString");if(e){var n=[],i=this.detailsData.selectOptions;i.forEach((function(t){n.push(t.rule[t.currentIndex].title)})),this.axios({method:"POST",url:this.baseURL+"/addShopcart",data:{appkey:this.appkey,pid:this.detailsData.pid,count:this.seleNum,rule:n.join("/"),tokenString:e}}).then((function(e){if(700==e.data.code)return t.$toast({message:e.data.msg,forbidClick:!0,duration:3e3}),t.$router.push({name:"Login"});if(3e3==e.data.code){var n=e.data.sid;console.log("details里的sids",n),t.$router.push({name:"Pay",query:{sids:n}})}}))}else this.$router.push({name:"Login"})}}),computed:Object(s["a"])(Object(s["a"])({},Object(o["c"])(["shopbagCount"])),{},{productCount:function(){return this.shopbagCount}}),created:function(){this.getDetailsData(),this.checkLike(),this.getShopbagCount()}},c=r,u=n("2877"),l=Object(u["a"])(c,i,a,!1,null,null,null);e["default"]=l.exports},"9f7f":function(t,e,n){"use strict";var i=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,n){"use strict";var i=n("23e7"),a=n("44ad"),s=n("fc6a"),o=n("a640"),r=[].join,c=a!=Object,u=o("join",",");i({target:"Array",proto:!0,forced:c||!u},{join:function(t){return r.call(s(this),void 0===t?",":t)}})},ac1f:function(t,e,n){"use strict";var i=n("23e7"),a=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var i=n("6eeb"),a=n("d039"),s=n("b622"),o=n("9263"),r=n("9112"),c=s("species"),u=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=s("replace"),h=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var g=s(t),f=!a((function(){var e={};return e[g]=function(){return 7},7!=""[t](e)})),v=f&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return e=!0,null},n[g](""),!e}));if(!f||!v||"replace"===t&&(!u||!l||h)||"split"===t&&!p){var k=/./[g],m=n(g,""[t],(function(t,e,n,i,a){return e.exec===o?f&&!a?{done:!0,value:k.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),x=m[0],b=m[1];i(String.prototype,t,x),i(RegExp.prototype,g,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}d&&r(RegExp.prototype[g],"sham",!0)}}}]);
//# sourceMappingURL=chunk-3ca14908.381fbd55.js.map