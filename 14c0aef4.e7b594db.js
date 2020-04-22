(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(217)),i={id:"assets",title:"Assets",sidebar_label:"Assets"},s={id:"legacy-guides/assets",title:"Assets",description:"# How to add external assets to my client part of the project?",source:"@site/docs/legacy-guides/assets.md",permalink:"/yoshi/docs/next/legacy-guides/assets",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/legacy-guides/assets.md",version:"next",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1587572493,sidebar_label:"Assets",sidebar:"docs",previous:{title:"AB Translate",permalink:"/yoshi/docs/next/legacy-guides/ab-translate"},next:{title:"Analyze Your Bundle",permalink:"/yoshi/docs/next/legacy-guides/bundle-analyze"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"how-to-add-external-assets-to-my-client-part-of-the-project"},"How to add external assets to my client part of the project?"),Object(o.b)("p",null,"You can do one of the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install through npm and import to your bundle."),Object(o.b)("li",{parentName:"ul"},"Create ",Object(o.b)("inlineCode",{parentName:"li"},"src/assets")," or ",Object(o.b)("inlineCode",{parentName:"li"},"app/assets")," folder. Every assets inside the folder will be copied to the ",Object(o.b)("inlineCode",{parentName:"li"},"dist")," folder and can then be served from the cdn")))}p.isMDXComponent=!0},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(f,s({ref:t},l,{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);