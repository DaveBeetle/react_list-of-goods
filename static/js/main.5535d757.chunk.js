(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),i=s.n(r),c=s(5),o=s(6),a=s(9),l=s(7),u=s(8),b=s(1),h=s.n(b),d=(s(14),s(15),s(2)),p=s.n(d),j=s(0),y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var v=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(c.a)(this,s);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={isReversed:!1,sortType:n.NONE},t.resetList=function(){t.setState({isReversed:!1,sortType:n.NONE})},t.reverseList=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortListByLength=function(){t.setState({sortType:n.LENGTH})},t.sortListByAlphabet=function(){t.setState({sortType:n.ALPHABET})},t}return Object(o.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isReversed,s=t.sortType,r=function(t,e){var s=e.sortType,r=e.isReversed,i=Object(u.a)(t);return s&&i.sort((function(t,e){switch(s){case n.ALPHABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return 0}})),r&&i.reverse(),i}(y,this.state);return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button","is-info",{"is-light":s!==n.ALPHABET}),onClick:this.sortListByAlphabet,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button","is-success",{"is-light":s!==n.LENGTH}),onClick:this.sortListByLength,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button","is-warning",{"is-light":!e}),onClick:this.reverseList,children:"Reverse"}),(s||e)&&Object(j.jsx)("button",{type:"button",className:"button is-danger",onClick:this.resetList,children:"Reset"})]}),Object(j.jsx)("ul",{children:r.map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),s}(h.a.Component);i.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5535d757.chunk.js.map