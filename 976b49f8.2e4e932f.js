(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(6),o=(n(0),n(217)),r={id:"managing-dependencies",title:"Managing Dependencies",sidebar_label:"Managing Dependencies"},c={id:"legacy-guides/managing-dependencies",title:"Managing Dependencies",description:'NPM uses a file called [`package-lock.json`](https://docs.npmjs.com/files/package-lock.json) as a "lockfile".  ',source:"@site/docs/legacy-guides/managing-dependencies.md",permalink:"/yoshi/docs/next/legacy-guides/managing-dependencies",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/legacy-guides/managing-dependencies.md",version:"next",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1587572493,sidebar_label:"Managing Dependencies",sidebar:"docs",previous:{title:"How to use SVG?",permalink:"/yoshi/docs/next/legacy-guides/svg"}},l=[{value:"What are the advantagesdisadvantages of each approach?",id:"what-are-the-advantagesdisadvantages-of-each-approach",children:[]},{value:"What is the defaultpreferred approach?",id:"what-is-the-defaultpreferred-approach",children:[]},{value:"How to start using a lockfile?",id:"how-to-start-using-a-lockfile",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"NPM uses a file called ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.npmjs.com/files/package-lock.json"}),Object(o.b)("inlineCode",{parentName:"a"},"package-lock.json")),' as a "lockfile".',Object(o.b)("br",{parentName:"p"}),"\n","A lockfile lists the exact dependency versions that are expected to be downloaded and installed when ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," is executed."),Object(o.b)("p",null,"Generally there are two approaches to working with dependencies in the NPM ecosystem:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Using a lockfile")," - if a ",Object(o.b)("inlineCode",{parentName:"li"},"package-lock.json")," is present, the exact dependency versions defined in that lockfile will be downloaded when you ",Object(o.b)("inlineCode",{parentName:"li"},"npm install"),".",Object(o.b)("br",{parentName:"li"}),"The ",Object(o.b)("inlineCode",{parentName:"li"},"package-lock.json")," will be committed to source-control and will affect all developers working on the project and the CI builds."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Not using a lockfile")," - if ",Object(o.b)("inlineCode",{parentName:"li"},"package-lock.json")," is not present, whenever you do a fresh ",Object(o.b)("inlineCode",{parentName:"li"},"npm install")," the latest versions of your dependencies will be downloaded from the npm registry (based on semantic versioning as detailed ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept"}),"here"),").")),Object(o.b)("p",null,"This is a high-level explanation. For more details you can read up on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.npmjs.com/files/package-locks"}),"NPM documentation")),Object(o.b)("h2",{id:"what-are-the-advantagesdisadvantages-of-each-approach"},"What are the advantages\\disadvantages of each approach?"),Object(o.b)("p",null,"Advantages of using a lockfile:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"By locking the entire dependency tree, changes in 3rd party libraries are only applied when you choose to initiate an upgrade.",Object(o.b)("br",{parentName:"li"}),"This reduces the likelihood of introducing bugs related to these changes without you knowing."),Object(o.b)("li",{parentName:"ul"},"Having a lockfile helps assure reproducible deterministic builds- meaning if the ",Object(o.b)("inlineCode",{parentName:"li"},"install")," step passed successfully when the lockfile was created\\changed, then each subsequent build that only reads the existing lockfile should also pass and the exact same content will be installed."),Object(o.b)("li",{parentName:"ul"},"Having a lockfile results in significantly faster installations.")),Object(o.b)("p",null,"Disadvantages of using a lockfile:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Having a lockfile means needing to remember to update the lockfile and reason about the changes, and deal with lockfile conflicts.",Object(o.b)("br",{parentName:"li"}),"This is especially problematic when your dependencies change often (as in the case internally in Wix where your package version is auto-incremented on every commit).")),Object(o.b)("h2",{id:"what-is-the-defaultpreferred-approach"},"What is the default\\preferred approach?"),Object(o.b)("p",null,"Because of the advantages mentioned above, the default NPM behavior is to use a lockfile, and one is generated automatically when you run ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," for the first time.",Object(o.b)("br",{parentName:"p"}),"\n","However for projects generated by ",Object(o.b)("inlineCode",{parentName:"p"},"create-yoshi-app")," a ",Object(o.b)("inlineCode",{parentName:"p"},"package-lock.json")," will not be generated.",Object(o.b)("br",{parentName:"p"}),"\n","This is because in Wix it's common to depend on other Wix packages that update often (on every commit), therefore you would need to update your ",Object(o.b)("inlineCode",{parentName:"p"},"package-lock.json")," very often and conflicts are likely."),Object(o.b)("h2",{id:"how-to-start-using-a-lockfile"},"How to start using a lockfile?"),Object(o.b)("p",null,"By default, projects generated by ",Object(o.b)("inlineCode",{parentName:"p"},"create-yoshi-app")," do not use a lockfile. To use a lockfile, edit the ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file (NPM configuration file) in the root folder and set ",Object(o.b)("inlineCode",{parentName:"p"},"package-lock=true"),".",Object(o.b)("br",{parentName:"p"}),"\n","The next time you run ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," a lockfile will be created and you should commit it."))}p.isMDXComponent=!0},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(r,".").concat(u)]||d[u]||b[u]||o;return n?i.a.createElement(h,c({ref:t},s,{components:n})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);