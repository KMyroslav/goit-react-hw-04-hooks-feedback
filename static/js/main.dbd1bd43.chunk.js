(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(4),o=c.n(a),i=(c(9),c(2)),s=c(0);var b=function(e){var t=e.title,c=e.children;return Object(s.jsxs)("section",{children:[Object(s.jsx)("h2",{children:t}),c]})};var d=function(e){var t=e.good,c=e.neutral,n=e.bad,r=e.countTotal,a=e.calculateFeedback;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["Good: ",t]}),Object(s.jsxs)("p",{children:["Neutral: ",c]}),Object(s.jsxs)("p",{children:["Bad: ",n]}),Object(s.jsxs)("p",{children:["Total: ",r()]}),Object(s.jsxs)("p",{children:["Positive feedback: ",a().toFixed(0),"%"]})]})};var j=function(e){var t=e.options,c=e.onFeedbackBtnClick;return Object(s.jsx)("div",{children:t.map((function(e){return Object(s.jsx)("button",{type:"button",onClick:c(e),children:e},e)}))})};var u=function(e){var t=e.message;return Object(s.jsx)("p",{children:t})};var l=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),o=Object(i.a)(a,2),l=o[0],h=o[1],O=Object(n.useState)(0),k=Object(i.a)(O,2),f=k[0],x=k[1],v=function(){return c+l+f};return Object(s.jsxs)("div",{children:[Object(s.jsx)(b,{title:"Please leave feedback",children:Object(s.jsx)(j,{options:["good","neutral","bad"],onFeedbackBtnClick:function(e){switch(e){case"good":r((function(e){return e+1}));break;case"neutral":h((function(e){return e+1}));break;case"bad":x((function(e){return e+1}));break;default:console.error("onFeedbackBtnClick type:"+e)}}})}),Object(s.jsx)(b,{title:"Statistics",children:v()?Object(s.jsx)(d,{good:c,neutral:l,bad:f,countTotal:v,calculateFeedback:function(){return c?100*c/v():0}}):Object(s.jsx)(u,{message:"No feedback given"})})]})};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.dbd1bd43.chunk.js.map