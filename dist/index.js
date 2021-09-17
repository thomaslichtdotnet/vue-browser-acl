var e,t=(e=require("browser-acl"))&&"object"==typeof e&&"default"in e?e.default:e,r={install:function(e,r,l,c){void 0===l&&(l=void 0),void 0===c&&(c={});var u="function"==typeof r?r:function(){return r},s=Boolean(c.strict),f=Object.assign({acl:{strict:s},aliases:["role"],assumeGlobal:!s,caseMode:!0,debug:!1,directive:"can",failRoute:"/",helper:!0,strict:!1},c),d=o(f),v=new t(f.acl);"function"==typeof l?l(v):l instanceof t&&(v=l),v.router=function(e){f.router=e;var r=function(e,t){var r;return t&&(r=v).can.apply(r,[u(),e,t].concat([].slice.call(arguments,2)))||!t&&!f.strict};e.beforeEach(function(e,o,n){var a=function(e,o,n){var a=null,i=e.reduce(function(e,i){return e.then(function(e){if(!0!==e)return e;"string"==typeof i.fail&&(a=i.fail);var l,c,u=d(i),s="function"==typeof u?u(o,n,r):Promise.resolve(r.apply(void 0,[(l=u.split(" "))[0],void 0===(c=l[1])?f.assumeGlobal?t.GlobalRule:null:c]));if(f.strict&&!(s instanceof Promise))throw new Error("$route.meta.can must return a promise in strict mode");return s}).catch(function(e){return f.debug&&console.error(e),!1})},Promise.resolve(!0));return i.getFail=function(){return a},i}(e.matched.filter(function(e){return e.meta&&d(e.meta)}).map(function(e){return e.meta}),e,o);a.then(function(t){if(!0===t)return n();var r=a.getFail()||f.failRoute;"$from"===r&&(r=o.path),n("function"==typeof r?r(e,o):r)})})},f.router&&v.router(f.router);var p=function(e,r,o){var l,c,s,d,p,m,y,b=void 0!==(y=r.modifiers).disable?"disable":void 0!==y.readonly?"readonly":"hide";if(d=r.arg,Array.isArray(r.value)&&null!=(l=r.expression)&&l.startsWith("[")){var h=r.modifiers.global?a(r):n(r);s=h[0],p=h[1],m=h[2]}else if("string"==typeof r.value){var g=i(r,o,f);s=g[0],p=g[1],m=g[2]}else d&&"object"==typeof r.value?(s=d,p=r.value,m=[]):void 0===r.value&&!r.modifiers.global&&f.assumeGlobal&&(s=d,p=t.GlobalRule,m=[]);if(f.assumeGlobal&&!p&&(p=t.GlobalRule,m=m||[],s=s||d),!s||!p)throw new Error("Missing verb or verb object");var w=(c=v)[(r.modifiers.some?"some":r.modifiers.every&&"every")||"can"].apply(c,[u(),s,p].concat(m)),G=r.modifiers.not,j=e;j.disabled=!1,j.readOnly=!1,(w&&G||!w&&!G)&&("hide"===b?function(e,t){var r=document.createComment(" ");Object.defineProperty(r,"setAttribute",{value:function(){}}),t.text=" ",t.elm=r,t.isComment=!0,t.tag=void 0,t.data=t.data||{},t.data.directives=void 0,t.componentInstance&&(t.componentInstance.$el=r),e.parentNode&&e.parentNode.replaceChild(r,e)}(e,o):"disable"===b?j.disabled=!0:"readonly"===b&&(j.readOnly=!0))};if([f.directive].concat(f.aliases).forEach(function(t){return e.directive(t,p)}),f.helper){var m="$"+f.directive;e.prototype[m]=function(e,t){var r;return(r=v).can.apply(r,[u(),e,t].concat([].slice.call(arguments,2)))},e.prototype[m].not=function(e,t){var r;return!(r=v).can.apply(r,[u(),e,t].concat([].slice.call(arguments,2)))},e.prototype[m].every=function(e,t){var r;return(r=v).every.apply(r,[u(),e,t].concat([].slice.call(arguments,2)))},e.prototype[m].some=function(e,t){var r;return(r=v).some.apply(r,[u(),e,t].concat([].slice.call(arguments,2)))}}}},o=function(e){return function(t){return[e.directive].concat(e.aliases||[]).map(function(e){return t[e]}).filter(Boolean).shift()}},n=function(e){var t=e.arg,r=e.value;return[t||r[0],t?r[0]:r[1],r.slice(t?1:2)]},a=function(e){var r=e.arg,o=e.value;return[r||o[0],t.GlobalRule,r?o:o.slice(1)]},i=function(e,t,r){var o=e.arg,n=e.value,a=e.modifiers,i=o?[o,n]:n.split(" "),l=i[0],c=i[1];if(c&&a.global)throw new Error("You cannot provide verb object and use global modifier at the same time");return"string"==typeof c&&r.caseMode&&c[0].match(/[a-z]/)&&"object"==typeof t.context&&(c=t.context.$data[c]),[l,c,[]]};module.exports=r;
//# sourceMappingURL=index.js.map
