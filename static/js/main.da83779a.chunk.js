(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),r=a(6),u=a(1),o=a(8),i=a(9),m=a(11),s=a(10),h=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"change",value:function(e,t,a,n){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"black";document.documentElement.style.setProperty("--main-color",e),document.documentElement.style.setProperty("--lmain-color",t),document.documentElement.style.setProperty("--inner-main-color",a),document.documentElement.style.setProperty("--main-background",n),document.documentElement.style.setProperty("--text-color",l)}},{key:"changeTheme",value:function(e){"def"===e?this.default():"alt"===e?this.alternative():"dark"===e?this.darkmode():"alt2"===e?this.alt2():"legacy"===e?this.legacy():this.default()}},{key:"default",value:function(){this.change("#22577a","#a2d2ff","#457b9d","#ffe5d9")}},{key:"darkmode",value:function(){this.change("#1a1a1a","#3E474D","#808080","#2B2D2E","white")}},{key:"alt2",value:function(){this.change("#e8d7f1","#f3e0ec","#B49FCC","#d3bccc","black")}},{key:"legacy",value:function(){this.change("#0080ff","lightblue","#6699ff","bisque","black")}},{key:"alternative",value:function(){this.change("#7d4f50","#cc8b86","#d5b9b2","#f9eae1","black")}},{key:"handleChange",value:function(e){var t=e.target.value;this.changeTheme(t)}},{key:"render",value:function(){return l.a.createElement("select",{className:"themer",onChange:this.handleChange.bind(this)},l.a.createElement("option",{value:"def"},"Default"),l.a.createElement("option",{value:"dark"},"Dark"),l.a.createElement("option",{value:"alt"},"Alternative"),l.a.createElement("option",{value:"alt2"},"Wisteria"),l.a.createElement("option",{value:"legacy"},"Legacy"))}}]),a}(n.Component),d=function(e){return l.a.createElement("ul",null,l.a.createElement(r.b,{className:"link",to:"/"},l.a.createElement("li",null,"Home")),l.a.createElement(r.b,{className:"link",to:"/Gallery"},l.a.createElement("li",null,"Gallery")),l.a.createElement(r.b,{className:"link",to:"/Skills"},l.a.createElement("li",null,"Skills")),l.a.createElement("li",null,l.a.createElement(h,null)))},f=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Gallery part"))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Skills part"))}}]),a}(n.Component),p=function(e){return l.a.createElement("header",null,l.a.createElement("a",{href:"./"},l.a.createElement("h1",{id:"head"},l.a.createElement("span",{id:"job"},"UNG"),"Maxime")),l.a.createElement(d,null))},y=function(e){return l.a.createElement("footer",null,l.a.createElement("div",{className:"efooter info"},l.a.createElement("a",{className:"link",href:"./"},"About"),l.a.createElement("a",{className:"link",href:"./"},"Contact")))},b=function(e){return l.a.createElement("div",null,"Home")};function v(){return l.a.createElement(r.a,null,l.a.createElement("div",{id:"app"},l.a.createElement(p,null),l.a.createElement("main",null,l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",component:b}),l.a.createElement(u.a,{path:"/gallery",component:f}),l.a.createElement(u.a,{path:"/skills",component:E}))),l.a.createElement(y,null)))}a(30);var k=document.getElementById("root");Object(c.render)(l.a.createElement(r.a,null,l.a.createElement(v,null)),k)}},[[20,1,2]]]);
//# sourceMappingURL=main.da83779a.chunk.js.map