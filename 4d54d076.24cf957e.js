(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{131:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(a,".").concat(m)]||b[m]||p[m]||i;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(131)),a={title:"Contribution"},c={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contribution",description:"Why contribute?",source:"@site/docs/contributing.md",slug:"/contributing",permalink:"/docs/contributing",editUrl:"https://github.com/fastcfs/fastcfs.github.io/edit/master/docusaurus/docs/contributing.md",version:"current",lastUpdatedBy:"zhangchunsheng",lastUpdatedAt:1614580272,sidebar:"docs",previous:{title:"Glossary",permalink:"/docs/glossary"},next:{title:"Showcases",permalink:"/docs/showcases"}},s=[{value:"Why contribute?",id:"why-contribute",children:[]},{value:"Not sure where to start?",id:"not-sure-where-to-start",children:[{value:"1. Contribute Code",id:"1-contribute-code",children:[]},{value:"2. Contribute Support",id:"2-contribute-support",children:[]}]},{value:"How Do I Become a Committer?",id:"how-do-i-become-a-committer",children:[]},{value:"Contributors List",id:"contributors-list",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"why-contribute"},"Why contribute?"),Object(i.b)("p",null,"FastCFS is a high performance distributed file storage system."),Object(i.b)("h2",{id:"not-sure-where-to-start"},"Not sure where to start?"),Object(i.b)("p",null,"It's a myth that writing code is the only way to contribute to open source."),Object(i.b)("h3",{id:"1-contribute-code"},"1. Contribute Code"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Check out GitHub issues with the tags ",Object(i.b)("inlineCode",{parentName:"li"},"good first issue"),", ",Object(i.b)("inlineCode",{parentName:"li"},"pull request welcome")," or ",Object(i.b)("inlineCode",{parentName:"li"},"help wanted")),Object(i.b)("li",{parentName:"ul"},"Write code examples for documentation"),Object(i.b)("li",{parentName:"ul"},"Report a bug and work on resolving it"),Object(i.b)("li",{parentName:"ul"},"Collaborate with others on building new features")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tips:")," If you want to add new features or change the API, please submit an issue first to make sure no one else is already working on the same thing and discuss the implementation and API details with maintainers and users by creating an issue. When everything is settled down, you can submit a pull request."),Object(i.b)("p",null,"Make sure to add tests for your features and bugfixes and update the documentation ","(","see below",")"," before submitting your code!"),Object(i.b)("h3",{id:"2-contribute-support"},"2. Contribute Support"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fix typos in documentation"),Object(i.b)("li",{parentName:"ul"},"Translate documentation to your local language"),Object(i.b)("li",{parentName:"ul"},"Write tutorials and blog posts, see more: ",Object(i.b)("a",{parentName:"li",href:"https://github.com/fastcfs/fastcfs.github.io"},"https://github.com/fastcfs/fastcfs.github.io")),Object(i.b)("li",{parentName:"ul"},"Answer questions on the Fastcfs Developers Home or Github issues"),Object(i.b)("li",{parentName:"ul"},"Organize Fastcfs meetups or user groups in your area")),Object(i.b)("p",null,"Contact ",Object(i.b)("a",{parentName:"p",href:"mailto:zhangchunsheng423@gmail.com"},"zhangchunsheng423@gmail.com")," to learn more"),Object(i.b)("h2",{id:"how-do-i-become-a-committer"},"How Do I Become a Committer?"),Object(i.b)("p",null,"First of all you need to get involved and be a Contributor."),Object(i.b)("p",null,"Based on your track-record as a contributor, one of our Maintainers or PMC members may invite you to be a committer ","(","after we've called a vote",")",". When that happens, if you accept, the following process kicks into place..."),Object(i.b)("p",null,"Note that becoming a committer is not just about submitting some patches; it\u2018s also about helping out on the development and user Discussion Forums, helping with documentation and the issues."),Object(i.b)("p",null,"See Become a Committer.md for becoming a committer steps and more details."),Object(i.b)("h2",{id:"contributors-list"},"Contributors List"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/fastcfs/fastcfs/wiki/Contributors"},"https://github.com/fastcfs/fastcfs/wiki/Contributors")))}l.isMDXComponent=!0}}]);