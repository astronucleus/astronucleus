(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,n){"use strict";n.r(t);n(32);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(149),l=n.n(c),s=n(146),u=n.n(s),m=n(148),p=n.n(m),d=n(0),h=n(146),f=n(148),g=(f.rhythm,f.scale),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.nextPost;return e&&e.children&&e.children[0]&&(e=e.children[0]),e?d.createElement("div",null,d.createElement("h6",{style:Object.assign({},g(-.5),{margin:0,letterSpacing:-.25})},"READ THIS NEXT:"),d.createElement("h3",{style:{margin:0}},d.createElement(h,{to:e.fields.slug},e.frontmatter.title)),d.createElement("p",null,e.excerpt),d.createElement("hr",null)):null},t}(d.Component),E=n(152),b=n(161),v=n.n(b);n.d(t,"pageQuery",function(){return q});var w=p.a.rhythm,k=p.a.scale,x=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n=this,a=this.props.data.markdownRemark;if(this.props.data.markdownRemark.fields.tagSlugs){var r=this.props.data.markdownRemark.fields.tagSlugs;e=r.map(function(e,t){var a=t<r.length-1&&i.a.createElement("span",null," | ");return i.a.createElement("span",{key:e},i.a.createElement(u.a,{to:e},n.props.data.markdownRemark.frontmatter.tags[t]),a)}),t=i.a.createElement("em",{style:Object.assign({},k(-.2),{display:"block",marginBottom:w(1)})},"Tagged with ",e)}return i.a.createElement(E.a,{location:this.props.location},i.a.createElement(l.a,{title:""+a.frontmatter.title,meta:[{name:"description",content:a.excerpt}]}),i.a.createElement("h1",null,a.frontmatter.title),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}}),t,i.a.createElement("p",{style:Object.assign({},k(-.2),{display:"block",marginBottom:w(1)})},"Posted ",a.frontmatter.date),i.a.createElement("hr",{style:{marginBottom:w(1)}}),i.a.createElement(y,{nextPost:a.frontmatter.readNext}),i.a.createElement("p",{style:{marginBottom:0}},i.a.createElement("img",{src:v.a,style:{borderRadius:"100%",float:"left",marginRight:w(.25),marginBottom:0,width:w(2),height:w(2)}}),i.a.createElement("a",{href:"https://tech-stoic.github.io"},"back to homepage")))},t}(i.a.Component),q=(t.default=x,"3115313593")},147:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},148:function(e,t,n){var a=n(155),r=n(156).default,o=n(157).default;r.plugins=[new o],r.baseLineHeight=1.4,r.blockMarginBottom=.75,r.overrideThemeStyles=function(e){return{"blockquote > h1, blockquote > h2, blockquote > h3, blockquote > h4":{marginTop:0},"li > p":{marginBottom:(0,e.rhythm)(.5)},"p code":{fontSize:"75%"},"tt,code":{fontSize:"85%"},pre:{lineHeight:1.22}}};var i=new a(r);e.exports=i},150:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(51),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,n){"use strict";n(32);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(146),l=n.n(c),s=n(149),u=n.n(s),m=(n(150),n(153),n(148)),p=n.n(m),d=p.a.rhythm,h=p.a.scale,f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e;return e=-1!==["/","/tags/"].indexOf(this.props.location.pathname)||-1!==this.props.location.pathname.indexOf("/tags/")?i.a.createElement(l.a,{style:{textDecoration:"none",boxShadow:"none",color:"grey"},to:"/"},i.a.createElement("h1",{style:Object.assign({},h(1),{marginBottom:d(0),marginTop:0,color:"yellow,"})},"tech-stoic")):i.a.createElement(l.a,{style:{textDecoration:"none",boxShadow:"none",color:"inherit"},to:"/"},i.a.createElement("h3",{style:{marginTop:0}},"tech stoic")),i.a.createElement("div",{style:{padding:d(1.5)+" "+d(.75),maxWidth:d(22),margin:"0 auto"}},i.a.createElement(u.a,{defaultTitle:"tech-stoic",titleTemplate:"tech-stoic | %s"}),i.a.createElement("div",null,e),this.props.children)},t}(i.a.Component);t.a=f},153:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(146),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(147),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(33);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},161:function(e,t,n){e.exports=n.p+"static/profile-3117e94e7ec16197a3cb49750c25505c.png"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-308272238fe0493bd51a.js.map