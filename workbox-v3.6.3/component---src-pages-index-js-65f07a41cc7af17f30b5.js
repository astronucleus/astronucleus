(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{154:function(e,t,n){"use strict";n.r(t);var o=n(37),r=n.n(o),i=n(27),a=n(9),c=(n(0),n(160)),s=n(159),u=function(e){return Object(a.a)(c.Link,r()({css:Object(i.a)({color:"inherit",textDecoration:"none"})},e))},l={name:"pelz90",styles:"font-weight:400;"},f={name:"pelz90",styles:"font-weight:400;"};t.default=function(){return Object(a.a)("div",{css:Object(i.a)({display:"flex",height:"100vh",background:"#deeaf3"})},Object(a.a)("div",{css:Object(i.a)({position:"absolute",left:"33.333%",width:Object(s.rhythm)(1),height:"22vh",zIndex:10,background:"#deeaf3",borderBottomRightRadius:"60px 41%"})}),Object(a.a)("div",{css:Object(i.a)({position:"absolute",left:"33.33%",bottom:0,width:Object(s.rhythm)(1),height:"24vh",zIndex:10,background:"#deeaf3",borderTopLeftRadius:"60px 41%"})}),Object(a.a)("div",{css:Object(i.a)({display:"flex",position:"absolute",margin:Object(s.rhythm)(.75),top:0,bottom:0,left:0,right:0,justifyContent:"center",alignItems:"center",background:"black"})},Object(a.a)("h1",{css:Object(i.a)({width:"80%",color:"#deeaf3",fontWeight:600,fontSize:Object(s.scale)(1).fontSize,lineHeight:1.1,"@media (min-width: 420px)":{fontSize:Object(s.scale)(1.4).fontSize},"@media (min-width: 768px)":{fontSize:Object(s.scale)(2).fontSize}})},Object(a.a)("span",{css:l})," Brain-capture method for all things philosopical and tech"," ",Object(a.a)("span",{css:f}))),Object(a.a)("div",{css:Object(i.a)({color:"#deeaf3",position:"absolute",top:Object(s.rhythm)(1.5),zIndex:10,transform:"rotate(90deg)",transformOrigin:"left top 0",left:Object(s.rhythm)(2.5),fontSize:Object(s.scale)(.4).fontSize,lineHeight:Object(s.scale)(.4).lineHeight,"@media (min-width: 420px)":{left:Object(s.rhythm)(1.5),transform:"none"}})},Object(a.a)(u,{to:"/"},"tech-stoic")),Object(a.a)("div",{css:Object(i.a)({color:"#deeaf3",position:"absolute",right:Object(s.rhythm)(1.5),top:Object(s.rhythm)(1.5),zIndex:10,fontSize:Object(s.scale)(.4).fontSize,lineHeight:Object(s.scale)(.4).lineHeight})},Object(a.a)(u,{to:"/blog/"},"blog"),","," ",Object(a.a)(u,{to:"/about/"},"about")))}},158:function(e,t,n){var o;e.exports=(o=n(161))&&o.default||o},159:function(e,t,n){var o=new(n(164))({baseFontSize:"18px",headerFontFamily:["Cooper Hewitt","sans-serif"],bodyFontFamily:["Cooper Hewitt","sans-serif"],plugins:[new(0,n(165).default)],baseLineHeight:1.45,blockMarginBottom:.85,overrideThemeStyles:function(e){var t=e.rhythm;return{a:{color:"#3A69A8"},blockquote:{marginLeft:0,paddingLeft:t(5/8),borderLeft:t(3/8)+" solid #CDE7B0"},"blockquote > *":{fontStyle:"italic"},"blockquote > h1, blockquote > h2, blockquote > h3, blockquote > h4":{marginTop:0},"li > p":{marginBottom:t(.5)},"p code":{fontSize:"75%"},"tt,code":{fontSize:"85%"},pre:{lineHeight:1.22}}}});e.exports=o},160:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return b}),n.d(t,"useStaticQuery",function(){return h});var o=n(9),r=n(0),i=n.n(r),a=n(4),c=n.n(a),s=n(36),u=n.n(s);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"parsePath",function(){return s.parsePath}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(158),f=n.n(l);n.d(t,"PageRenderer",function(){return f.a});var d=i.a.createContext({}),b=function(e){return Object(o.a)(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(o.a)("div",null,"Loading (StaticQuery)")})},h=function(e){i.a.useContext;var t=i.a.useContext(d);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},161:function(e,t,n){"use strict";n.r(t);n(58);var o=n(0),r=n.n(o),i=n(4),a=n.n(i),c=n(59),s=n(2),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=u},164:function(e,t,n){e.exports=n(170)},165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(171)),r=a(n(172)),i=a(n(177));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return function(e,t){var n=e.rhythm,a=void 0;return a=(0,r.default)(t.blockMarginBottom)?n(t.blockMarginBottom):(0,i.default)(t.blockMarginBottom)?t.blockMarginBottom:n(1),{"tt,code":{backgroundColor:(0,o.default)(96),borderRadius:"3px",fontFamily:'"SFMono-Regular", Consolas,"Roboto Mono","Droid Sans Mono","Liberation Mono",Menlo,Courier,monospace',padding:0,paddingTop:"0.2em",paddingBottom:"0.2em"},pre:{background:(0,o.default)(96),borderRadius:"3px",lineHeight:1.42,overflow:"auto",wordWrap:"normal",padding:a},"pre code":{background:"none",lineHeight:1.42},"code:before,code:after,tt:before,tt:after":{letterSpacing:"-0.2em",content:'" "'},"pre code:before,pre code:after,pre tt:before,pre tt:after":{content:"none"}}}}},166:function(e,t,n){var o=n(167),r=n(175),i=n(176),a="[object Null]",c="[object Undefined]",s=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?c:a:s&&s in Object(e)?r(e):i(e)}},167:function(e,t,n){var o=n(173).Symbol;e.exports=o},168:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},169:function(e,t){var n=Array.isArray;e.exports=n},170:function(e,t){var n,o,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,c=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,o,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in n=Object(arguments[s]))i.call(n,u)&&(c[u]=n[u]);if(r){o=r(n);for(var l=0;l<o.length;l++)a.call(n,o[l])&&(c[o[l]]=n[o[l]])}}return c},s=function(e,t){t||(t=[0,""]),e=String(e);var n=parseFloat(e,10);return t[0]=n,t[1]=e.match(/[\d.\-\+]*\s*(.*)/)[1]||"",t},u=function(e){return s(e)[0]},l=function(e){return null==e&&(e=e),function(t,n,o,r){null==o&&(o=e),null==r&&(r=o);var i=s(t)[1];if(i===n)return t;var a=u(t);if("px"!==i)if("em"===i)a=u(t)*u(o);else if("rem"===i)a=u(t)*u(e);else{if("ex"!==i)return t;a=u(t)*u(o)*2}var c=a;if("px"!==n)if("em"===n)c=a/u(r);else if("rem"===n)c=a/u(e);else{if("ex"!==n)return t;c=a/u(r)/2}return parseFloat(c.toFixed(5))+n}},f=s,d=function(e){return f(e)[1]},b=function(e){return f(e)[0]},h={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},p=function(e,t){var n,o=l(t.baseFontSize),r=b(o(e,"px")),i=b(t.baseLineHeightInPx),a=b(o(t.minLinePadding,"px"));return(n=t.roundToNearestHalfLine?Math.ceil(2*r/i)/2:Math.ceil(r/i))*i-r<2*a&&(n+=t.roundToNearestHalfLine?.5:1),n},g=function(e){var t=l(e.baseFontSize);return function(n,o,r){null==n&&(n=1),null==o&&(o=e.baseFontSize),null==r&&(r=0);var i=n*b(e.baseLineHeightInPx)-r+"px",a=t(i,e.rhythmUnit,o);return"px"===d(a)&&(a=Math.floor(b(a))+d(a)),parseFloat(b(a).toFixed(5))+d(a)}},m=Object.prototype.toString;n=function(e){return"number"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Number]"==m.call(e)},o={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"diminished fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4},e.exports=function(e){var t,r,i,a,s=c({},{baseFontSize:"16px",baseLineHeight:1.45,headerLineHeight:1.1,scaleRatio:2,googleFonts:[],headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],bodyFontFamily:["georgia","serif"],headerColor:"inherit",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:"bold",bodyWeight:"normal",boldWeight:"bold",includeNormalize:!0,blockMarginBottom:1},e),u=(t=s,r=JSON.parse(JSON.stringify(h)),i=Object.assign({},r,t),a=l(i.baseFontSize),d(i.baseLineHeight)?(b(a(i.baseFontSize,"px")),i.baseLineHeightInPx=a(i.baseLineHeight,"px")):i.baseLineHeightInPx=b(i.baseFontSize)*i.baseLineHeight+"px",{rhythm:g(i),establishBaseline:function(){return l((e=i).baseFontSize),{fontSize:b(e.baseFontSize)/16*100+"%",lineHeight:e.baseLineHeight.toString()};var e},linesForFontSize:function(e){return p(e,i)},adjustFontSizeTo:function(e,t,n){return null==t&&(t="auto"),function(e,t,n,o){null==n&&(n=o.baseFontSize),"%"===d(e)&&(e=b(o.baseFontSize)*(b(e)/100)+"px");var r=l(o.baseFontSize);e=r(e,"px",n=r(n,"px"));var i=g(o);return"auto"===t&&(t=p(e,o)),{fontSize:r(e,o.rhythmUnit,n),lineHeight:i(t,n)}}(e,t,n,i)}});return u.scale=function(e){var t=s.baseFontSize.slice(0,-2),r=function(e,t){var r;return null==e&&(e=0),null==t&&(t="golden"),r=n(t)?t:null!=o[t]?o[t]:o.golden,Math.pow(r,e)}(e,s.scaleRatio)*t+"px";return u.adjustFontSizeTo(r)},Object.assign({},{options:s},u)}},171:function(e,t){function n(e){return!isNaN(parseFloat(e))&&isFinite(e)}e.exports=function(e,t,o){if(void 0===t&&(t=0),void 0===o&&(o=!1),"cool"===t?t=237:"slate"===t?t=122:"warm"===t&&(t=69),!n(t))throw new Error("Hue is not a number");if(!n(e))throw new Error("Lightness is not a number");e>100&&(e=100),e<0&&(e=0);var r=0;if(0!==t){r=19.92978+-.3651759*e+.001737214*Math.pow(e,2)}var i=0;return o?(i=e/100,e="100%,"):(i=(100-e)/100,e="0%,"),"hsla("+t+","+r+"%,"+e+i+")"}},172:function(e,t,n){var o=n(166),r=n(168),i="[object Number]";e.exports=function(e){return"number"==typeof e||r(e)&&o(e)==i}},173:function(e,t,n){var o=n(174),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},174:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(78))},175:function(e,t,n){var o=n(167),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,c=o?o.toStringTag:void 0;e.exports=function(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var o=!0}catch(s){}var r=a.call(e);return o&&(t?e[c]=n:delete e[c]),r}},176:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},177:function(e,t,n){var o=n(166),r=n(169),i=n(168),a="[object String]";e.exports=function(e){return"string"==typeof e||!r(e)&&i(e)&&o(e)==a}}}]);
//# sourceMappingURL=component---src-pages-index-js-65f07a41cc7af17f30b5.js.map