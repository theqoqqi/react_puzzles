"use strict";(self.webpackChunkreact_puzzles=self.webpackChunkreact_puzzles||[]).push([[630],{8630:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(1413),s=n(5671),u=n(3144),i=n(1752),o=n(1120),l=n(9340),a=n(1129),c=(n(2791),n(5132)),p=n(6157),f=n(184),h=function(e){(0,l.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,s.Z)(this,n),(r=t.call(this,e)).state={expressions:[{a:3,b:4,result:"?"},{a:2,b:7,result:"?"},{a:.1,b:.2,result:"?"}]},r}return(0,u.Z)(n,[{key:"componentDidMount",value:function(){(0,i.Z)((0,o.Z)(n.prototype),"componentDidMount",this).call(this),this.loadScript("script.js")}},{key:"componentDidUpdate",value:function(e,t,n){var r=this,s=this.state.expressions.every((function(e){return e.result===r.round(e.a+e.b)}));!this.isDone&&s&&this.solve()}},{key:"onClick",value:function(){var e=this;this.setState({expressions:this.state.expressions.map((function(t){return t.result=e.sum(t.a,t.b),"number"===typeof t.result&&(t.result=e.round(t.result)),t}))})}},{key:"sum",value:function(e,t){return window.sum(e,t)}},{key:"round",value:function(e){return parseFloat(e.toFixed(10))}},{key:"render",value:function(){var e=this;return(0,f.jsxs)("div",{children:[this.state.expressions.map((function(e,t){return(0,f.jsxs)("div",{children:[e.a," + ",e.b," = ",e.result]},t)})),(0,f.jsx)(p.Z,{className:"btn-sm w-100",onClick:function(){return e.onClick()},children:"sum"})]})}}]),n}(c.Z);h.title="Puzzle 18",h.propTypes=(0,r.Z)({},c.Z.propTypes)},1752:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(1120);function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=(0,r.Z)(e)););return e}function u(){return u="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=s(e,t);if(r){var u=Object.getOwnPropertyDescriptor(r,t);return u.get?u.get.call(arguments.length<3?e:n):u.value}},u.apply(this,arguments)}}}]);
//# sourceMappingURL=630.92cd03e0.chunk.js.map