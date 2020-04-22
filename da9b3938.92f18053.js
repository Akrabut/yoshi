(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1),i=(n(0),n(217));const o={id:"managing-dependencies",title:"Managing Dependencies",sidebar_label:"Managing Dependencies"},r={id:"version-4.x/legacy-guides/managing-dependencies",title:"Managing Dependencies",description:'NPM uses a file called [`package-lock.json`](https://docs.npmjs.com/files/package-lock.json) as a "lockfile".  ',source:"@site/versioned_docs/version-4.x/legacy-guides/managing-dependencies.md",permalink:"/yoshi/docs/legacy-guides/managing-dependencies",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/legacy-guides/managing-dependencies.md",version:"4.x",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1587572998,sidebar_label:"Managing Dependencies",sidebar:"version-4.x/docs",previous:{title:"How to use SVG?",permalink:"/yoshi/docs/legacy-guides/svg"}},l=[{value:"What are the advantagesdisadvantages of each approach?",id:"what-are-the-advantagesdisadvantages-of-each-approach",children:[]},{value:"What is the defaultpreferred approach?",id:"what-is-the-defaultpreferred-approach",children:[]},{value:"How to start using a lockfile?",id:"how-to-start-using-a-lockfile",children:[]}],c={rightToc:l};function s({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"NPM uses a file called ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.npmjs.com/files/package-lock.json"}),Object(i.b)("inlineCode",{parentName:"a"},"package-lock.json")),' as a "lockfile".',Object(i.b)("br",{parentName:"p"}),"\n","A lockfile lists the exact dependency versions that are expected to be downloaded and installed when ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," is executed."),Object(i.b)("p",null,"Generally there are two approaches to working with dependencies in the NPM ecosystem:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Using a lockfile")," - if a ",Object(i.b)("inlineCode",{parentName:"li"},"package-lock.json")," is present, the exact dependency versions defined in that lockfile will be downloaded when you ",Object(i.b)("inlineCode",{parentName:"li"},"npm install"),".",Object(i.b)("br",{parentName:"li"}),"The ",Object(i.b)("inlineCode",{parentName:"li"},"package-lock.json")," will be committed to source-control and will affect all developers working on the project and the CI builds."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Not using a lockfile")," - if ",Object(i.b)("inlineCode",{parentName:"li"},"package-lock.json")," is not present, whenever you do a fresh ",Object(i.b)("inlineCode",{parentName:"li"},"npm install")," the latest versions of your dependencies will be downloaded from the npm registry (based on semantic versioning as detailed ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept"}),"here"),").")),Object(i.b)("p",null,"This is a high-level explanation. For more details you can read up on the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.npmjs.com/files/package-locks"}),"NPM documentation")),Object(i.b)("h2",{id:"what-are-the-advantagesdisadvantages-of-each-approach"},"What are the advantages\\disadvantages of each approach?"),Object(i.b)("p",null,"Advantages of using a lockfile:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"By locking the entire dependency tree, changes in 3rd party libraries are only applied when you choose to initiate an upgrade.",Object(i.b)("br",{parentName:"li"}),"This reduces the likelihood of introducing bugs related to these changes without you knowing."),Object(i.b)("li",{parentName:"ul"},"Having a lockfile helps assure reproducible deterministic builds- meaning if the ",Object(i.b)("inlineCode",{parentName:"li"},"install")," step passed successfully when the lockfile was created\\changed, then each subsequent build that only reads the existing lockfile should also pass and the exact same content will be installed."),Object(i.b)("li",{parentName:"ul"},"Having a lockfile results in significantly faster installations.")),Object(i.b)("p",null,"Disadvantages of using a lockfile:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Having a lockfile means needing to remember to update the lockfile and reason about the changes, and deal with lockfile conflicts.",Object(i.b)("br",{parentName:"li"}),"This is especially problematic when your dependencies change often (as in the case internally in Wix where your package version is auto-incremented on every commit).")),Object(i.b)("h2",{id:"what-is-the-defaultpreferred-approach"},"What is the default\\preferred approach?"),Object(i.b)("p",null,"Because of the advantages mentioned above, the default NPM behavior is to use a lockfile, and one is generated automatically when you run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," for the first time.",Object(i.b)("br",{parentName:"p"}),"\n","However for projects generated by ",Object(i.b)("inlineCode",{parentName:"p"},"create-yoshi-app")," a ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," will not be generated.",Object(i.b)("br",{parentName:"p"}),"\n","This is because in Wix it's common to depend on other Wix packages that update often (on every commit), therefore you would need to update your ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," very often and conflicts are likely."),Object(i.b)("h2",{id:"how-to-start-using-a-lockfile"},"How to start using a lockfile?"),Object(i.b)("p",null,"By default, projects generated by ",Object(i.b)("inlineCode",{parentName:"p"},"create-yoshi-app")," do not use a lockfile. To use a lockfile, edit the ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file (NPM configuration file) in the root folder and set ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock=true"),".",Object(i.b)("br",{parentName:"p"}),"\n","The next time you run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," a lockfile will be created and you should commit it."))}s.isMDXComponent=!0},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(r,".").concat(u)]||d[u]||b[u]||o;return n?i.a.createElement(h,l({ref:t},s,{components:n})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);