(self.webpackChunkreact_puzzles=self.webpackChunkreact_puzzles||[]).push([[572],{572:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return P}});var r=i(1413),n=i(885),s=i(5671),a=i(3144),o=i(9340),c=i(1129),l=i(2791),d=i(5132),u=i(4925),f=i(1694),p=i.n(f),h=i(783),v=i(4934),y=i(162),m=i(184),b=["id","bsPrefix","className","type","isValid","isInvalid","as"],k=l.forwardRef((function(e,t){var i=e.id,n=e.bsPrefix,s=e.className,a=e.type,o=void 0===a?"checkbox":a,c=e.isValid,d=void 0!==c&&c,f=e.isInvalid,h=void 0!==f&&f,k=e.as,x=void 0===k?"input":k,Z=(0,u.Z)(e,b),j=(0,l.useContext)(v.Z).controlId;return n=(0,y.vE)(n,"form-check-input"),(0,m.jsx)(x,(0,r.Z)((0,r.Z)({},Z),{},{ref:t,type:o,id:i||j,className:p()(s,n,d&&"is-valid",h&&"is-invalid")}))}));k.displayName="FormCheckInput";var x=k,Z=["bsPrefix","className","htmlFor"],j=l.forwardRef((function(e,t){var i=e.bsPrefix,n=e.className,s=e.htmlFor,a=(0,u.Z)(e,Z),o=(0,l.useContext)(v.Z).controlId;return i=(0,y.vE)(i,"form-check-label"),(0,m.jsx)("label",(0,r.Z)((0,r.Z)({},a),{},{ref:t,htmlFor:s||o,className:p()(n,i)}))}));j.displayName="FormCheckLabel";var C=j;var N=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],T=l.forwardRef((function(e,t){var i=e.id,n=e.bsPrefix,s=e.bsSwitchPrefix,a=e.inline,o=void 0!==a&&a,c=e.reverse,d=void 0!==c&&c,f=e.disabled,b=void 0!==f&&f,k=e.isValid,Z=void 0!==k&&k,j=e.isInvalid,T=void 0!==j&&j,I=e.feedbackTooltip,P=void 0!==I&&I,O=e.feedback,g=e.feedbackType,w=e.className,E=e.style,_=e.title,S=void 0===_?"":_,F=e.type,R=void 0===F?"checkbox":F,V=e.label,z=e.children,L=e.as,B=void 0===L?"input":L,W=(0,u.Z)(e,N);n=(0,y.vE)(n,"form-check"),s=(0,y.vE)(s,"form-switch");var A=(0,l.useContext)(v.Z).controlId,D=(0,l.useMemo)((function(){return{controlId:i||A}}),[A,i]),U=!z&&null!=V&&!1!==V||function(e,t){return l.Children.toArray(e).some((function(e){return l.isValidElement(e)&&e.type===t}))}(z,C),q=(0,m.jsx)(x,(0,r.Z)((0,r.Z)({},W),{},{type:"switch"===R?"checkbox":R,ref:t,isValid:Z,isInvalid:T,disabled:b,as:B}));return(0,m.jsx)(v.Z.Provider,{value:D,children:(0,m.jsx)("div",{style:E,className:p()(w,U&&n,o&&"".concat(n,"-inline"),d&&"".concat(n,"-reverse"),"switch"===R&&s),children:z||(0,m.jsxs)(m.Fragment,{children:[q,U&&(0,m.jsx)(C,{title:S,children:V}),O&&(0,m.jsx)(h.Z,{type:g,tooltip:P,children:O})]})})})}));T.displayName="FormCheck";var I=Object.assign(T,{Input:x,Label:C}),P=function(e){(0,o.Z)(i,e);var t=(0,c.Z)(i);function i(e){var r;return(0,s.Z)(this,i),(r=t.call(this,e)).choices={first:"Choose me!",second:"No, me!",third:"Better me!"},r.choiceStates={},Object.keys(r.choices).forEach((function(e){r.choiceStates[e]=!1})),r}return(0,a.Z)(i,[{key:"onChange",value:function(e){var t=this;Object.keys(this.choices).forEach((function(e){var i=document.getElementById(e);t.choiceStates[e]=i.checked})),Object.values(this.choiceStates).every((function(e){return e}))&&this.solve()}},{key:"render",value:function(){var e=this;return(0,m.jsx)("div",{children:Object.entries(this.choices).map((function(t){var i=(0,n.Z)(t,2),r=i[0],s=i[1];return(0,m.jsx)(I,{id:r,type:"radio",name:"choice",label:s,onChange:function(t){return e.onChange(t)}},r)}))})}}]),i}(d.Z);P.title="Puzzle 9",P.propTypes=(0,r.Z)({},d.Z.propTypes)},888:function(e,t,i){"use strict";var r=i(9047);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,i,n,s,a){if(a!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return i.PropTypes=i,i}},2007:function(e,t,i){e.exports=i(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},783:function(e,t,i){"use strict";var r=i(1413),n=i(4925),s=i(1694),a=i.n(s),o=i(2791),c=i(2007),l=i.n(c),d=i(184),u=["as","className","type","tooltip"],f={type:l().string,tooltip:l().bool,as:l().elementType},p=o.forwardRef((function(e,t){var i=e.as,s=void 0===i?"div":i,o=e.className,c=e.type,l=void 0===c?"valid":c,f=e.tooltip,p=void 0!==f&&f,h=(0,n.Z)(e,u);return(0,d.jsx)(s,(0,r.Z)((0,r.Z)({},h),{},{ref:t,className:a()(o,"".concat(l,"-").concat(p?"tooltip":"feedback"))}))}));p.displayName="Feedback",p.propTypes=f,t.Z=p},4934:function(e,t,i){"use strict";var r=i(2791).createContext({});t.Z=r}}]);
//# sourceMappingURL=572.db5e0474.chunk.js.map