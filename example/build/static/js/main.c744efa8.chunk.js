(this["webpackJsonpreact-inline-autocomplete-example"]=this["webpackJsonpreact-inline-autocomplete-example"]||[]).push([[0],{44:function(e,t,n){e.exports=n(59)},52:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a,r=n(0),l=n.n(r),c=n(22),o=n.n(c),u=(n(52),n(43)),i=n(64),s=n(63),v=n(65),p=n(7),f=n.n(p),m=n(29),E=n.n(m),g=n(30),h=n.n(g);!function(e){e.TAB="Tab",e.ENTER="Enter",e.ARROW_UP="ArrowUp",e.ARROW_DOWN="ArrowDown"}(a||(a={}));var x="_31Ve9",A="_ZX6Lw",b="_NwvFz",d=["value","dataSource","className","navigate","caseSensitive","onBlur","onFocus","onChange","onPressEnter","onSelect"],O=f.a.forwardRef((function(e,t){var n=e.value,r=e.dataSource,l=e.className,c=e.navigate,o=void 0===c||c,u=e.caseSensitive,i=void 0===u||u,s=e.onBlur,v=e.onFocus,m=e.onChange,g=e.onPressEnter,O=e.onSelect,S=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,d),k=Object(p.useState)(""),w=k[0],R=k[1],N=Object(p.useState)(),j=N[0],y=N[1],P=Object(p.useState)(0),W=P[0],_=P[1],B=null!=n?n:w,C=Object(p.useRef)();f.a.useImperativeHandle(t,(function(){return C.current}));var D=function(e){m&&m(e),R(e)},F=function(e){_(0),y(e?r.filter((function(t){var n=t.text;return i?n.startsWith(e)&&n!==e:h.a.startsWith(n,e)&&!h.a.equals(n,e)})):[])},T=E()("ria-wrap",x,l),z=E()("ria-input",A),G=E()("ria-complete",b),I=function(){var e;return null!=j&&null!=(e=j[W])&&e.text?""+B+j[W].text.slice(B.length):void 0}();return f.a.createElement("div",{className:T},f.a.createElement("input",Object.assign({ref:C,className:z,value:B,type:"text",onBlur:s,onFocus:v,onChange:function(e){var t=e.target.value;D(t),F(t)},onKeyDown:function(e){switch(Object.values(a).includes(e.key)&&e.preventDefault(),e.key){case a.TAB:var t=null==j?void 0:j[W];if(!t)return;var n=t.text;D(n),O&&O(t),F(n);break;case a.ENTER:g&&g(B),F();break;case a.ARROW_UP:if(!o)break;_((function(e){return null!=j&&j.length?(e-1+j.length)%j.length:0}));break;case a.ARROW_DOWN:if(!o)break;_((function(e){return null!=j&&j.length?(e+1)%j.length:0}))}}},S)),f.a.createElement("div",{className:G},I))})),S=(n(56),n(57),[{text:"Amazon",value:"Amazon"},{text:"Google",value:"Google"},{text:"Google Search",value:"GoogleSearch"},{text:"Apple",value:"Apple"},{text:"Apple Pencil",value:"ApplePencil"},{text:"Apple Watch",value:"AppleWatch"},{text:"Apple Power",value:"ApplePower"}].map((function(e){return Object.assign(e,{color:"#"+(16777215*Math.random()<<0).toString(16)})})));var k=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=l.a.createRef(),o=function(e){a((function(t){return[e].concat(t)}))};return l.a.createElement("div",{className:"App"},l.a.createElement("section",null,S.map((function(e,t){return l.a.createElement(i.a,{key:t,color:e.color},e.text)}))),l.a.createElement("section",null,l.a.createElement(O,{ref:c,className:"inline-autocomplete-example",dataSource:S,caseSensitive:!1,onChange:function(e){o({value:e,event:"Change"})},onSelect:function(e){o({value:e.text,event:"Select"})},onPressEnter:function(e){o({value:e,event:"PressEnter"})}}),l.a.createElement(s.a,{type:"primary",size:"large",onClick:function(){c.current.focus()}},"Focus")),l.a.createElement("section",null,l.a.createElement(v.a,null,n.map((function(e,t){return l.a.createElement(v.a.Item,{key:t},l.a.createElement("pre",null,"Event: ",e.event,", ",e.value))})))))};o.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c744efa8.chunk.js.map