(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(15),i=c.n(a),l=c(10),o=(c(22),c(0));function r(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"txt-".concat(e.mode),children:"About TextUtils"}),Object(o.jsxs)("div",{className:"about-content",children:[Object(o.jsx)("p",{className:"txt-".concat(e.mode),children:" Hi Iam Ajay and iam the creator of TextUtils."}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{className:"txt-".concat(e.mode),children:"TextUtils is a web application that helps you to format text. You get many features in our application like removing unwantend spacing, Converting to upper case, downloading the text as document and many more."})]})]})})}c(24);var j=c.p+"static/media/moon.c7c4d4f9.png",d=c(7);function b(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("nav",{className:"flex-container nav-".concat(e.mode),children:[Object(o.jsx)("div",{className:"left-content flex-container",children:Object(o.jsx)("h1",{children:Object(o.jsx)(d.b,{to:"/",className:"logo",children:e.title})})}),Object(o.jsx)("div",{className:"Links",children:Object(o.jsxs)("ul",{className:"flex-container",children:[Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/",className:"txt-".concat(e.mode," lnk"),children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/about",className:"txt-".concat(e.mode," lnk"),children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/services",className:"txt-".concat(e.mode," lnk"),children:"Services"})})]})}),Object(o.jsxs)("div",{className:"right-content flex-container",children:[Object(o.jsx)("input",{type:"text",placeholder:"Search"}),Object(o.jsx)("button",{className:"btn-".concat(e.mode),children:"Search"}),Object(o.jsx)("img",{src:j,alt:"",className:"mBtn",onClick:function(){e.modeSwitch()}})]})]})})}c(30);function h(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],a=c[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"main-content flex-container",children:[Object(o.jsx)("h2",{className:"tit my-3 txt-".concat(e.mode),children:"Enter the text to Analyze"}),Object(o.jsx)("textarea",{placeholder:"Enter your text here",cols:"100",rows:"10",onChange:function(e){a(e.target.value),console.log(s),s.length},value:s,className:"txt inp-".concat(e.mode)}),Object(o.jsxs)("div",{className:"button my-3",children:[Object(o.jsx)("button",{className:"btn-".concat(e.mode," mx1-3"),onClick:function(){console.log("Button Clicked");var e=s.toUpperCase();a(e)},children:"UpperCase"}),Object(o.jsx)("button",{className:"btn-".concat(e.mode," mx1-3"),onClick:function(){a("")},children:"Clear"}),Object(o.jsx)("button",{className:"btn-".concat(e.mode," mx1-3"),onClick:function(){var e,t,c="",n=0,i=s;console.log(i),e=i[0],t=i[0];for(var l=0;l<i.length;l++)if(0===n&&" "!==i[l]&&"\n"!==i[l]&&(n=1),1===n){if(" "!==(e=i[l])&&"\n"!==e)c+=e;else{if(" "===t||"\n"===i[l-2])continue;c+=e}t=e}a(c)},children:"Format"}),Object(o.jsx)("button",{className:"btn-".concat(e.mode," mx1-3"),onClick:function(){navigator.clipboard.writeText(s)},children:"Copy"})]}),Object(o.jsxs)("table",{className:"table my-3",children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Words"}),Object(o.jsx)("td",{children:s.split(" ").length})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Characters"}),Object(o.jsx)("td",{children:s.length})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Sentences"}),Object(o.jsx)("td",{children:s.split(".").length})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Paragraphs"}),Object(o.jsx)("td",{children:s.split("\n\n").length})]})]})]})})}c(31);function x(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"services-container",children:[Object(o.jsx)("h1",{className:"txt-".concat(e.mode),children:"Services"}),Object(o.jsxs)("div",{className:"services-content",children:[Object(o.jsx)("p",{className:"txt-".concat(e.mode),children:" This Page will be Updated Soon..."}),Object(o.jsx)("br",{})]})]})})}var m=c(2);var O=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(d.a,{children:[Object(o.jsx)(b,{title:"TextUtils",mode:c,modeSwitch:function(){"light"===c?(s("dark"),document.body.style.background="#181818"):(s("light"),document.body.style.background="white")}}),Object(o.jsxs)(m.c,{children:[Object(o.jsx)(m.a,{path:"/services",children:Object(o.jsx)(x,{mode:c})}),Object(o.jsx)(m.a,{path:"/about",children:Object(o.jsx)(r,{mode:c})}),Object(o.jsx)(m.a,{path:"/",children:Object(o.jsx)(h,{mode:c})})]})]})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),u()}},[[32,1,2]]]);
//# sourceMappingURL=main.648756b3.chunk.js.map