(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),o=a(10),r=a(1),i=a(6),s=a(7),m=a(9),u=a(8),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"change",value:function(e,t,a,n){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"black";document.documentElement.style.setProperty("--main-color",e),document.documentElement.style.setProperty("--lmain-color",t),document.documentElement.style.setProperty("--inner-main-color",a),document.documentElement.style.setProperty("--main-background",n),document.documentElement.style.setProperty("--text-color",l)}},{key:"changeTheme",value:function(e){"def"===e?this.default():"alt"===e?this.alternative():"dark"===e?this.darkmode():"alt2"===e?this.alt2():"legacy"===e?this.legacy():this.default()}},{key:"default",value:function(){this.change("#6699cc","#a2d2ff","#457b9d","#ffe5d9")}},{key:"darkmode",value:function(){this.change("#1a1a1a","#3E474D","#808080","#2B2D2E","white")}},{key:"alt2",value:function(){this.change("#e8d7f1","#f3e0ec","#B49FCC","#d3bccc","black")}},{key:"legacy",value:function(){this.change("#0080ff","lightblue","#6699ff","bisque","black")}},{key:"alternative",value:function(){this.change("#7d4f50","#cc8b86","#d5b9b2","#f9eae1","black")}},{key:"handleChange",value:function(e){var t=e.target.value;this.changeTheme(t)}},{key:"render",value:function(){return l.a.createElement("select",{className:"themer",onChange:this.handleChange.bind(this)},l.a.createElement("option",{value:"def"},"Default Theme"),l.a.createElement("option",{value:"dark"},"Dark"),l.a.createElement("option",{value:"alt"},"Alternative"),l.a.createElement("option",{value:"alt2"},"Wisteria"),l.a.createElement("option",{value:"legacy"},"Legacy"))}}]),a}(n.Component),g=function(e){return l.a.createElement("ul",null,l.a.createElement(o.b,{className:"link",to:"/"},l.a.createElement("li",null,"Home")),l.a.createElement(o.b,{className:"link",to:"/Gallery"},l.a.createElement("li",null,"Gallery")),l.a.createElement(o.b,{className:"link",to:"/Skills"},l.a.createElement("li",null,"Skills")),l.a.createElement("li",null,l.a.createElement(d,null)))},p="https://wiki.haskell.org/wikiupload/4/4a/HaskellLogoStyPreview-1.png",h="https://pbs.twimg.com/profile_images/532662364613525504/GN559Lfb_400x400.png",E="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/c-plus-plus-programming-language.png",w="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/c-program.png",b="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/python-programming-language.png",f="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/html.png",v="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/css.png",k="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/javascript-programming-language.png",y="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/react-js.png",x="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/FileZilla_logo.svg/200px-FileZilla_logo.svg.png",N="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/github.png",j="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/microsoft-teams.png",O="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/visual-studio-code.png",P="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/microsoft-excel.png",C="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/microsoft-powerpoint.png",M="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/google-sheets.png",D="https://img.icons8.com/ios/452/katana.png",S="https://uxwing.com/wp-content/themes/uxwing/download/24-sport-and-awards/gaming-gamepad.png",A="https://uxwing.com/wp-content/themes/uxwing/download/08-technology/it.png",I="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/600px-HackerRank_Icon-1000px.png",G="https://uxwing.com/wp-content/themes/uxwing/download/08-technology/learning-machine-ai.png",H="https://uxwing.com/wp-content/themes/uxwing/download/09-controller-and-music/music.png",_="https://uxwing.com/wp-content/themes/uxwing/download/18-education/read-book.png",B={id:0},F=function(e){var t=e.type,a=e.label,n=e.content;return l.a.createElement("article",{className:"r-article "+t},l.a.createElement("h3",{className:"article-label"},a),l.a.createElement("div",{className:"paragraphs"},n))},L=function(e){var t=e.left,a=e.right;return l.a.createElement("div",{className:"bibox"},l.a.createElement("div",{className:"label info"},t),l.a.createElement("div",{className:"info"},a))},T=function(e){var t=e.src,a=e.alt,n=e.w,c=void 0===n?"40":n,o=e.h,r=void 0===o?"40":o;return l.a.createElement("img",{className:"logo",src:t,alt:a,width:c,height:r})},R=function(e){var t=e.label,a=e.icon;return l.a.createElement("div",{className:"labelicon"},l.a.createElement("span",{className:"icon"},a)," ",t)},U=function(e){var t=e.label,a=e.src,n=e.alt,c=e.desc;return l.a.createElement(L,{left:l.a.createElement(R,{label:t,icon:l.a.createElement(T,{src:a,alt:n,w:"20",h:"20"})}),right:c})},V={fullname:"Maxime Ung",avatar:"https://avatars1.githubusercontent.com/u/71248735?s=460&u=4df514b7a3d470625b87d0382d81938dc2587a53&v=4",job:"Developper / Programmer",email:"maxime.ung@epitech.eu",github:"https://www.github.com/Anacrius/",birthdate:"31/10/1997",location:"France"},z=["Hello, I am actually looking for a work-study contract in January 2021 in the field of IA, Big Data or Web Development. I want to learn new things and explore new horizons.","My strongest weakness is my lack of experience but my willingness to achieve my goals will end up to overcome it.","I have a strong interest into artificial consciousness, datas and information gestion because I believe that the handling and the correct exploitation of datas lead to progress."],J={"Epitech Paris":["(sept 2020 - now) Pre-Msc pro","(2019 - 2010) PGE 2nd year"],"Paris-V Descartes (University)":["(2015-2018) Economic bachelor's degree"],"Lyc\xe9e Montesquieu (High school)":["Highschool degree ES (economic and social)"]},q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={education:[],description:z.map((function(e){return l.a.createElement("p",{key:B.id++},e)}))},e.interests=l.a.createElement("div",null,l.a.createElement("h4",{id:"interests"},"Interests / Activities:"),l.a.createElement(U,{label:"Kendo",src:D,alt:"katana logo",desc:"Suburi"}),l.a.createElement(U,{label:"Video games",src:S,alt:"controller logo",desc:"Cooperation, Competition"}),l.a.createElement(U,{label:"Programming",src:A,alt:"laptop logo",desc:"Learning concepts"}),l.a.createElement(U,{label:"Problem Solving",src:I,alt:"hackerrank logo",desc:"Program to solve problems"}),l.a.createElement(U,{label:"Artificial consciousness",src:G,alt:"machine learning logo",desc:""}),l.a.createElement(U,{label:"Music",src:H,alt:"music logo",desc:"OST, post-rock, rock"}),l.a.createElement(U,{label:"Manga / Anime",src:_,alt:"book logo",desc:""})),e.about=l.a.createElement("div",{id:"about"},l.a.createElement(L,{left:"Birth date: ",right:"31/10/1997"}),l.a.createElement(L,{left:"Location: ",right:"France"}),l.a.createElement(L,{left:"Mail: ",right:l.a.createElement("a",{href:"mailto:"+V.email},V.email)}),l.a.createElement(L,{left:"GitHub:",right:l.a.createElement("a",{href:V.github},"www.github.com/Anacrius")}),e.interests),e.plogos=l.a.createElement("p",{className:"logos"},l.a.createElement(T,{src:p,alt:"haskell logo"}),l.a.createElement(T,{src:E,alt:"cpp logo"}),l.a.createElement(T,{src:w,alt:"c logo"}),l.a.createElement(T,{src:b,alt:"python logo"})),e.front_logos=l.a.createElement("p",{className:"logos"},l.a.createElement(T,{src:f,alt:"html logo"}),l.a.createElement(T,{src:v,alt:"css logo"}),l.a.createElement(T,{src:h,alt:"materialize logo"}),l.a.createElement(T,{src:k,alt:"js logo"}),l.a.createElement(T,{src:y,alt:"react logo"})),e.slogos=l.a.createElement("p",{className:"logos"},l.a.createElement(T,{src:N,alt:"github logo"}),l.a.createElement(T,{src:j,alt:"teams logo"}),l.a.createElement(T,{src:O,alt:"visual logo"}),l.a.createElement(T,{src:P,alt:"excel logo"}),l.a.createElement(T,{src:C,alt:"ppt logo"}),l.a.createElement(T,{src:M,alt:"gsheets logo"}),l.a.createElement(T,{src:x,alt:"filezilla logo"})),e.skills=l.a.createElement("p",{className:"skills"},l.a.createElement("h4",{className:"s-title"},"Computation / Video Games"),e.plogos,l.a.createElement("h4",{className:"s-title"},"Front-end web"),e.front_logos,l.a.createElement("h4",{className:"s-title"},"Softwares / Tools"),e.slogos),e.contact=l.a.createElement("article",{className:"right-side"},l.a.createElement("span",{id:"contact"},"Contact:"),l.a.createElement("a",{href:"mailto:"+V.email},l.a.createElement("p",{id:"email"},V.email)),l.a.createElement("a",{href:V.github},l.a.createElement("p",{id:"website"},"My public projects"))),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=[],t=[];for(var a in J)t=J[a].map((function(e){return l.a.createElement("p",{key:B.id++,className:"line"},e)})),e.push(l.a.createElement("article",{key:B.id++},l.a.createElement("h4",{className:"e-title"},a),t)),t=[];this.setState({education:e})}},{key:"render",value:function(){var e=V;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"resume"},l.a.createElement("div",{className:"leftBar"},l.a.createElement("div",{className:"aboutme"},l.a.createElement("img",{className:"profile-pic",src:e.avatar,alt:"github profilepic",width:"70",height:"70"}),l.a.createElement("div",{className:"textcontent"},l.a.createElement("p",{id:"fullname"},e.fullname),l.a.createElement("p",{id:"jobtitle"},e.job))),this.about),l.a.createElement("div",{className:"resume-body"},l.a.createElement("header",{className:"r-header"},l.a.createElement("article",{className:"left-side"},l.a.createElement("h1",{id:"r-title"},"My React CV"))),l.a.createElement("main",{className:"maincontent"},l.a.createElement(F,{type:"Description",label:"Personal Profile",content:this.state.description}),l.a.createElement(F,{type:"Skills",label:"Skills",content:this.skills}),l.a.createElement(F,{type:"Education",label:"Education",content:this.state.education.map((function(e){return e}))}),l.a.createElement(F,{type:"Documentation",label:"Documentation",content:l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.epitech.eu/msc-pro/entreprise-32192-rpwm/"}," More details about the work-study contract (french) "))})))))}}]),a}(n.Component),W=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Gallery part (build in progress)"))}}]),a}(n.Component),Z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Skills part (build in progress)"))}}]),a}(n.Component),K=function(e){return l.a.createElement("header",{id:"top-header"},l.a.createElement("h1",{id:"head"},l.a.createElement("span",{id:"job"},"UNG"),"Maxime"),l.a.createElement(g,null))},Q=function(e){return l.a.createElement("footer",null,l.a.createElement("div",{className:"efooter info"},l.a.createElement("h4",null,"React page made by Anacrius (Maxime Ung)")))};function X(){return l.a.createElement(o.a,null,l.a.createElement("div",{id:"app"},l.a.createElement(K,null),l.a.createElement("main",{id:"main"},l.a.createElement(r.c,null,l.a.createElement(r.a,{exact:!0,path:"/",component:q}),l.a.createElement(r.a,{path:"/gallery",component:W}),l.a.createElement(r.a,{path:"/skills",component:Z}))),l.a.createElement(Q,null)))}a(30);var Y=document.getElementById("root");Object(c.render)(l.a.createElement(o.a,null,l.a.createElement(X,null)),Y)}},[[20,1,2]]]);
//# sourceMappingURL=main.ba07c041.chunk.js.map