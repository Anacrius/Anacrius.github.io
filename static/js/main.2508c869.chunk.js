(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{20:function(e,t,a){e.exports=a(33)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(18),r=a(10),o=a(1),i=a(7),s=a(9),m=a(8),h=a(6),g=function e(t,a,c,n){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"black",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"black";Object(h.a)(this,e),this.main_color=t,this.light_main=a,this.inner_main=c,this.background=n,this.text_color=l,this.light_text=r},u=new g("#6699cc","#a2d2ff","#457b9d","#ffe5d9","black","#000066"),p=new g("#7d4f50","#cc8b86","#d5b9b2","#f9eae1","black"),d=new g("#1a1a1a","#3E474D","#293241","#2B2D2E","#ffe6cc","#ffcc99"),E=new g("#1a1a1a","#3E474D","#293241","#2B2D2E","lightgray","#ff3333"),w=new g("#e8d7f1","#f3e0ec","#B49FCC","#d3bccc","black"),v=new g("#0080ff","lightblue","#6699ff","bisque","black"),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"change",value:function(e){document.documentElement.style.setProperty("--main-color",e.main_color),document.documentElement.style.setProperty("--lmain-color",e.light_main),document.documentElement.style.setProperty("--inner-main-color",e.inner_main),document.documentElement.style.setProperty("--main-background",e.background),document.documentElement.style.setProperty("--text-color",e.text_color),document.documentElement.style.setProperty("--ltext-color",e.light_text)}},{key:"componentDidMount",value:function(){this.changeTheme("dark")}},{key:"changeTheme",value:function(e){"def"===e?this.change(u):"alt"===e?this.change(p):"dark"===e?this.change(d):"dark2"===e?this.change(E):"alt2"===e?this.change(w):"legacy"===e?this.change(v):this.change(d)}},{key:"handleChange",value:function(e){var t=e.target.value;this.changeTheme(t)}},{key:"render",value:function(){return n.a.createElement("select",{className:"themer",onChange:this.handleChange.bind(this)},n.a.createElement("option",{value:"dark"},"Dark"),n.a.createElement("option",{value:"def"},"Default Theme"),n.a.createElement("option",{value:"dark2"},"Dark (2)"),n.a.createElement("option",{value:"alt"},"Alternative"),n.a.createElement("option",{value:"alt2"},"Wisteria"),n.a.createElement("option",{value:"legacy"},"Legacy"))}}]),a}(c.Component),f=function(e){return n.a.createElement("ul",null,n.a.createElement(r.b,{className:"link",to:"/"},n.a.createElement("li",null,"Home")),n.a.createElement(r.b,{className:"link",to:"/Gallery"},n.a.createElement("li",null,"Gallery")),n.a.createElement(r.b,{className:"link",to:"/Skills"},n.a.createElement("li",null,"Skills")),n.a.createElement("li",null,n.a.createElement(b,null)))},x="https://wiki.haskell.org/wikiupload/4/4a/HaskellLogoStyPreview-1.png",k="https://pbs.twimg.com/profile_images/532662364613525504/GN559Lfb_400x400.png",y="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/c-plus-plus-programming-language.png",L="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/c-program.png",N="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/python-programming-language.png",M="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/html.png",C="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/css.png",z="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/javascript-programming-language.png",D="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/react-js.png",H="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/jquery.png",j="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/FileZilla_logo.svg/200px-FileZilla_logo.svg.png",P="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/github.png",_="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/microsoft-teams.png",O="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/visual-studio-code.png",S="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/microsoft-excel.png",V="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/microsoft-powerpoint.png",B="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/google-sheets.png",A="https://cdn.countryflags.com/thumbs/france/flag-square-250.png",I="https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-250.png",T="https://img.icons8.com/ios/452/katana.png",G="https://uxwing.com/wp-content/themes/uxwing/download/24-sport-and-awards/gaming-gamepad.png",U="https://uxwing.com/wp-content/themes/uxwing/download/08-technology/it.png",q="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/600px-HackerRank_Icon-1000px.png",F="https://uxwing.com/wp-content/themes/uxwing/download/08-technology/learning-machine-ai.png",J="https://uxwing.com/wp-content/themes/uxwing/download/09-controller-and-music/music.png",X="https://uxwing.com/wp-content/themes/uxwing/download/18-education/read-book.png",R={phone:n.a.createElement("svg",{className:"svg-icon",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"25px",height:"25px",viewBox:"0 0 122.88 122.88","enable-background":"new 0 0 122.88 122.88",xmlSpace:"preserve"},n.a.createElement("g",null,n.a.createElement("path",{d:"M13.001,0h96.878c7.152,0,13.001,5.849,13.001,13.001v96.878 c0,7.152-5.849,13.001-13.001,13.001H13.001C5.849,122.88,0,117.031,0,109.879V13.001C0,5.849,5.849,0,13.001,0L13.001,0z M21.196,33.195c6.529,4.49,13.026,9,18.496,14.824c-3.148,13.872,9.386,24.945,20.829,31.483c4.461,2.551,6.432,4.35,11.411,3.48 l19.623,19.215C54.648,114.594,13.23,62.588,21.196,33.195L21.196,33.195z M76.99,78.052l4.304-4.382 c1.254-1.261,3.304-1.271,4.558-0.048l15.856,15.627c1.264,1.248,1.279,3.291,0.043,4.557l-4.311,4.369 c-1.234,1.271-3.279,1.271-4.55,0.051L77.028,82.599C75.766,81.354,75.749,79.306,76.99,78.052L76.99,78.052z M25.047,24.009 l3.129-3.787c1.333-1.628,3.771-1.871,5.386-0.533l16.232,13.378c1.631,1.34,1.869,3.775,0.533,5.397l-3.125,3.789 c-1.335,1.615-3.764,1.851-5.395,0.52L25.562,29.39C23.945,28.057,23.711,25.619,25.047,24.009L25.047,24.009z"}))),place:n.a.createElement("svg",{className:"svg-icon",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"25px",height:"25px",viewBox:"0 0 122.88 117.55","enable-background":"new 0 0 122.88 117.55",xmlSpace:"preserve"},n.a.createElement("g",null,n.a.createElement("path",{d:"M78.81,82.78c-4.35,4.77-9.42,9.05-15.12,12.51c-0.7,0.51-1.65,0.58-2.43,0.08 c-8.41-5.35-15.48-11.78-21.03-18.76c-7.66-9.61-12.49-20.27-14.14-30.53c-1.68-10.41-0.11-20.42,5.07-28.56 c2.04-3.22,4.65-6.15,7.83-8.68C46.3,3.01,54.65-0.06,62.96,0c8.01,0.06,15.91,3.05,22.74,9.28c2.4,2.18,4.42,4.68,6.07,7.39 c5.57,9.17,6.77,20.87,4.32,32.73c-2.41,11.71-8.41,23.62-17.28,33.35V82.78L78.81,82.78L78.81,82.78z M25.32,74.54 c1.98,0,3.59,1.61,3.59,3.59c0,1.98-1.61,3.59-3.59,3.59h-6.74l-8.88,28.67h103.22l-9.64-28.67h-5.57c-1.98,0-3.59-1.61-3.59-3.59 c0-1.98,1.61-3.59,3.59-3.59h10.7l14.46,43.01H0l13.32-43.01H25.32L25.32,74.54z M61.38,18.51c9.88,0,17.88,8.01,17.88,17.87 c0,9.88-8.01,17.88-17.88,17.88c-9.88,0-17.87-8-17.87-17.88C43.49,26.51,51.5,18.51,61.38,18.51L61.38,18.51L61.38,18.51z"}))),mail:n.a.createElement("svg",{className:"svg-icon",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"25px",height:"25px",viewBox:"0 0 122.879 88.855","enable-background":"new 0 0 122.879 88.855",xmlSpace:"preserve"},n.a.createElement("g",null,n.a.createElement("path",{d:"M7.048,0h108.784c1.939,0,3.701,0.794,4.977,2.069c1.277,1.277,2.07,3.042,2.07,4.979v74.759 c0,1.461-0.451,2.822-1.221,3.951c-0.141,0.365-0.361,0.705-0.662,0.994c-0.201,0.189-0.422,0.344-0.656,0.461 c-1.225,1.021-2.799,1.643-4.508,1.643H7.048c-1.937,0-3.701-0.793-4.979-2.07C0.794,85.51,0,83.748,0,81.807V7.048 c0-1.941,0.792-3.704,2.068-4.979C3.344,0.792,5.107,0,7.048,0L7.048,0z M5.406,78.842l38.124-38.22L5.406,9.538V78.842 L5.406,78.842z M47.729,44.045L8.424,83.449h105.701L76.563,44.051L64.18,54.602l0,0c-0.971,0.83-2.425,0.877-3.453,0.043 L47.729,44.045L47.729,44.045z M80.674,40.549l36.799,38.598V9.198L80.674,40.549L80.674,40.549z M8.867,5.406l53.521,43.639 l51.223-43.639H8.867L8.867,5.406z"}))),cake:n.a.createElement("svg",{className:"svg-icon",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"25px",height:"25px",viewBox:"0 0 110.08 122.88","enable-background":"new 0 0 110.08 122.88",xmlSpace:"preserve"},n.a.createElement("path",{d:"M63.85,18.63h3.9v6.55h16.4c3.7,0,6.72,3.02,6.72,6.72V37c-2.55,2.11-4.91,3.25-7.05,3.3 c-2.68,0.07-5.24-1.66-7.65-5.39l0,0c-0.13-0.2-0.3-0.38-0.5-0.52c-0.89-0.65-2.13-0.45-2.78,0.44c-2.44,3.35-4.95,5.21-7.53,5.35 c-2.61,0.14-5.53-1.46-8.79-5.03c-0.04-0.05-0.09-0.09-0.13-0.13c-0.82-0.74-2.08-0.68-2.82,0.13c-3.06,3.36-5.92,5.1-8.58,5.13 c-2.6,0.03-5.22-1.61-7.86-5.01l0,0c-0.12-0.15-0.26-0.29-0.43-0.41c-0.9-0.63-2.15-0.42-2.78,0.48c-1.95,2.76-4.22,4.4-6.66,4.84 c-1.67,0.3-3.47,0.02-5.39-0.77c-3.96-1.63-2.53-2.56-2.79-7.5c-0.2-3.69,3.03-6.73,6.73-6.73h16.35v-6.55h3.9v6.55h6.93V10.92h3.9 v14.26h6.93V18.63L63.85,18.63z M0,114.88h110.08v8H0V114.88L0,114.88z M90.87,41.92v0.22h-0.35C90.63,42.07,90.75,42,90.87,41.92 L90.87,41.92z M89.31,42.81v20.52H20.77V43.27c2.48,0.99,4.91,1.26,7.23,0.84c2.82-0.51,5.4-2.02,7.64-4.48 c2.98,3.15,6.12,4.67,9.42,4.64c3.35-0.04,6.69-1.7,10.03-4.91c3.6,3.46,7.09,4.99,10.47,4.81c3.19-0.17,6.13-1.86,8.85-4.89 c2.85,3.49,6.03,5.1,9.51,5.01C85.68,44.24,87.48,43.74,89.31,42.81L89.31,42.81z M15.2,66.95h79.76c5.06,0,9.19,4.14,9.19,9.19 v6.98c-3.49,2.89-6.71,4.44-9.65,4.52c-3.66,0.09-7.16-2.26-10.47-7.37l0,0c-0.18-0.27-0.4-0.52-0.68-0.72 c-1.22-0.89-2.92-0.62-3.8,0.6c-3.34,4.58-6.77,7.13-10.3,7.32c-3.57,0.19-7.56-1.99-12.02-6.88c-0.06-0.06-0.12-0.12-0.18-0.18 c-1.12-1.02-2.84-0.93-3.86,0.18c-4.18,4.59-8.1,6.97-11.74,7.01c-3.55,0.04-7.14-2.2-10.75-6.85l0,0 c-0.16-0.21-0.36-0.4-0.59-0.56c-1.23-0.87-2.94-0.57-3.8,0.66c-2.66,3.78-5.77,6.02-9.11,6.62c-2.29,0.41-4.75,0.02-7.38-1.06 C4.39,84.19,6.36,82.92,6,76.15C5.73,71.1,10.14,66.95,15.2,66.95L15.2,66.95z M104.15,89.85v0.3h-0.48 C103.83,90.06,103.99,89.96,104.15,89.85L104.15,89.85z M102.02,91.07v21.49H8.26V91.69c3.39,1.35,6.72,1.72,9.89,1.15 c3.86-0.7,7.39-2.77,10.45-6.13c4.07,4.31,8.37,6.39,12.89,6.34c4.58-0.05,9.16-2.32,13.72-6.71c4.93,4.73,9.7,6.83,14.32,6.58 c4.37-0.23,8.39-2.54,12.1-6.68c3.9,4.77,8.25,6.98,13,6.86C97.05,93.03,99.51,92.34,102.02,91.07L102.02,91.07z M44.13,7.71 C52.37,19.65,35.94,21.79,44.13,7.71L44.13,7.71z M54.96,0C63.2,11.94,46.76,14.08,54.96,0L54.96,0z M65.79,7.71 C74.02,19.65,57.59,21.79,65.79,7.71L65.79,7.71z"})),website:n.a.createElement("svg",{className:"svg-icon",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"25px",height:"25px",viewBox:"0 0 122.88 115.33","enable-background":"new 0 0 122.88 115.33",xmlSpace:"preserve"},n.a.createElement("g",null,n.a.createElement("path",{d:"M76.98,97.89c-3.62,4.01-7.79,7.99-12.51,11.94c1.28-0.17,2.56-0.38,3.81-0.62c3.42-0.69,6.71-1.7,9.89-3.08 c0.82-0.35,1.62-0.72,2.41-1.1c0.59,0.76,1.25,1.42,1.96,1.98c0.77,0.61,1.59,1.09,2.45,1.45c-1.58,0.85-3.2,1.62-4.86,2.34 c-3.53,1.52-7.16,2.63-10.9,3.39c-3.74,0.76-7.61,1.14-11.59,1.14c-3.98,0-7.82-0.38-11.59-1.14c-3.7-0.73-7.26-1.83-10.76-3.32 c-0.03,0-0.1-0.03-0.14-0.07c-3.46-1.49-6.75-3.29-9.82-5.33c-3.08-2.04-5.92-4.39-8.51-6.99c-2.63-2.59-4.95-5.43-6.99-8.51 c-2.08-3.08-3.84-6.37-5.33-9.82c-1.52-3.53-2.63-7.16-3.39-10.9C0.38,65.52,0,61.64,0,57.66c0-3.98,0.38-7.82,1.14-11.59 c0.73-3.7,1.83-7.26,3.32-10.76c0-0.03,0.03-0.1,0.07-0.14c1.49-3.49,3.29-6.75,5.33-9.82c2.04-3.08,4.39-5.92,6.99-8.51 c2.59-2.63,5.43-4.95,8.51-6.99c3.08-2.08,6.36-3.84,9.82-5.33c3.53-1.52,7.16-2.63,10.9-3.39C49.81,0.38,53.69,0,57.66,0 c3.98,0,7.82,0.38,11.59,1.14c3.7,0.73,7.26,1.83,10.76,3.32c0.03,0,0.1,0.03,0.14,0.07c3.46,1.49,6.75,3.29,9.82,5.33 c3.08,2.04,5.92,4.39,8.51,6.99c2.63,2.59,4.95,5.43,6.99,8.51c2.08,3.08,3.84,6.37,5.33,9.82c1.52,3.53,2.63,7.16,3.39,10.9 c0.43,2.12,0.74,4.28,0.93,6.48l-5.23-1.39c-0.16-1.38-0.37-2.74-0.64-4.09c-0.69-3.42-1.7-6.71-3.08-9.89 c-0.86-2.04-1.83-3.98-2.91-5.85l0,0H86.38c3,5.13,5.16,10.23,6.47,15.32l-5.68-1.51c-1.48-4.56-3.71-9.16-6.71-13.81H60.19v9.39 c-0.36,0.21-0.72,0.46-1.07,0.74l0,0c-0.28,0.22-0.55,0.46-0.8,0.71c-0.34,0.35-0.66,0.72-0.93,1.12 c-0.44,0.64-0.79,1.35-1.06,2.11c-0.27,0.77-0.43,1.54-0.49,2.29c-0.05,0.64-0.03,1.3,0.07,1.95c0.08,0.54,0.2,1.07,0.38,1.59 l0.05,0.14c0.04,0.11,0.08,0.22,0.12,0.32c0.06,0.17,0.11,0.27,0.13,0.32l0.02-0.01l3.63,8.17h-0.06v23.8h10.62l2.24,5.05H60.19 v17.78c5.65-4.64,10.5-9.32,14.54-14.01L76.98,97.89L76.98,97.89z M115.14,97.97c-0.34,0.34-0.74,0.6-1.16,0.79 c-0.44,0.2-0.91,0.32-1.38,0.36c-0.51,0.04-1.03-0.01-1.53-0.17c-0.48-0.15-0.94-0.4-1.35-0.74l-11.09-9.41l-3.81,9.35 c-0.32,0.78-0.7,1.5-1.13,2.15c-0.44,0.66-0.93,1.23-1.44,1.68c-0.41,0.36-0.86,0.67-1.33,0.9c-0.47,0.23-0.95,0.38-1.45,0.45 c-0.58,0.08-1.16,0.04-1.72-0.12c-0.54-0.16-1.06-0.42-1.56-0.81c-0.4-0.31-0.77-0.71-1.12-1.19c-0.32-0.44-0.61-0.96-0.88-1.56 c-7.22-16.27-15.83-33.78-22.27-50.16c-0.08-0.22-0.14-0.44-0.17-0.67c-0.03-0.23-0.04-0.46-0.02-0.69 c0.02-0.27,0.08-0.53,0.17-0.79c0.09-0.25,0.21-0.5,0.36-0.72c0.08-0.11,0.16-0.22,0.26-0.31c0.08-0.08,0.17-0.16,0.27-0.23 c0.18-0.14,0.37-0.26,0.57-0.36l0.05-0.02c0.19-0.09,0.39-0.16,0.58-0.2l0.09-0.02c0.18-0.04,0.36-0.06,0.54-0.07 c0.21-0.01,0.41,0.01,0.61,0.04c0.07,0.01,0.14,0.02,0.21,0.03c17.64,4.38,35.38,9.38,52.98,14.05c0.63,0.17,1.19,0.38,1.68,0.62 c0.53,0.27,0.98,0.57,1.35,0.91c0.46,0.42,0.81,0.9,1.05,1.41c0.25,0.53,0.38,1.1,0.39,1.69v0.01c0.01,0.5-0.06,1-0.21,1.5 c-0.15,0.5-0.38,0.98-0.68,1.45c-0.37,0.58-0.85,1.16-1.43,1.69c-0.56,0.52-1.22,1.01-1.95,1.46c-2.89,1.7-5.77,3.5-8.64,5.24 l11.05,9.47c0.4,0.35,0.72,0.76,0.94,1.21l0.03,0.08c0.21,0.45,0.34,0.92,0.38,1.41c0.04,0.49-0.01,1-0.16,1.5 c-0.14,0.47-0.37,0.93-0.69,1.34C119.84,92.6,117.01,96.24,115.14,97.97L115.14,97.97z M112.24,94.34l5.35-6.28l-13-11.14 l-0.07-0.07c-0.06-0.06-0.13-0.13-0.18-0.19c-0.08-0.09-0.15-0.19-0.21-0.3c-0.33-0.54-0.4-1.16-0.26-1.73 c0.14-0.57,0.5-1.09,1.04-1.41c3.76-2.07,7.64-4.66,11.35-6.89c0.43-0.26,0.81-0.55,1.13-0.84c0.3-0.28,0.55-0.56,0.72-0.83 c0.07-0.11,0.12-0.2,0.15-0.29c-0.08-0.06-0.17-0.11-0.3-0.17c-0.19-0.09-0.44-0.17-0.73-0.25L67.51,50.77L88.39,97.8 c0.12,0.26,0.24,0.49,0.37,0.68l0.03,0.05c0.07,0.09,0.13,0.17,0.18,0.22c0.08-0.04,0.16-0.11,0.26-0.2 c0.24-0.21,0.48-0.5,0.7-0.84c0.24-0.36,0.46-0.79,0.65-1.27l5-12.28l0.05-0.1c0.04-0.08,0.08-0.16,0.12-0.23l0.03-0.05 c0.05-0.08,0.11-0.16,0.18-0.24c0.41-0.48,0.98-0.76,1.56-0.8c0.58-0.05,1.18,0.13,1.67,0.54L112.24,94.34L112.24,94.34z M50.89,109.83c-8.16-6.85-14.7-13.77-19.54-20.79H15.39c1.52,2.08,3.22,4.01,5.05,5.85c2.39,2.39,4.95,4.5,7.75,6.36 c2.77,1.87,5.78,3.49,9.03,4.88c0.03,0.03,0.07,0.03,0.1,0.07c3.15,1.31,6.4,2.35,9.79,3.01c1.25,0.24,2.53,0.45,3.8,0.62H50.89 L50.89,109.83z M12.07,83.99h16.05c-4.46-7.82-6.88-15.77-7.16-23.8H5.12c0.14,2.77,0.45,5.43,0.97,8.06 c0.69,3.42,1.69,6.71,3.08,9.89C10.03,80.18,11,82.12,12.07,83.99L12.07,83.99z M5.12,55.14h15.95c0.59-7.89,3.22-15.81,7.89-23.8 H12.07c-1.07,1.87-2.04,3.8-2.91,5.85c-0.03,0.03-0.03,0.07-0.07,0.1c-1.31,3.15-2.35,6.4-3.01,9.79 C5.57,49.71,5.22,52.37,5.12,55.14L5.12,55.14z M15.36,26.29h16.85c4.81-6.92,11.14-13.87,19.03-20.86 c-1.42,0.17-2.8,0.38-4.15,0.66c-3.42,0.69-6.71,1.7-9.89,3.08c-3.22,1.38-6.23,3.01-9.03,4.88c-2.8,1.87-5.36,3.98-7.75,6.36 c-1.83,1.83-3.53,3.77-5.05,5.85L15.36,26.29L15.36,26.29z M64.1,5.43c7.92,6.99,14.25,13.94,19.03,20.86h16.85 c-1.52-2.08-3.22-4.01-5.05-5.85c-2.39-2.39-4.95-4.5-7.75-6.37c-2.77-1.87-5.78-3.49-9.03-4.88c-0.03-0.03-0.07-0.03-0.1-0.07 c-3.15-1.31-6.4-2.35-9.79-3.01c-1.38-0.28-2.77-0.48-4.15-0.66V5.43L64.1,5.43z M60.19,8.72v17.57h16.74 C72.54,20.48,66.97,14.63,60.19,8.72L60.19,8.72z M55.14,106.82V89.04H37.53C42.06,94.99,47.94,100.94,55.14,106.82L55.14,106.82z M55.14,83.99v-23.8H26.01c0.31,7.99,3.01,15.91,7.99,23.8H55.14L55.14,83.99z M55.14,55.14v-23.8H34.87 c-5.19,8.06-8.09,15.98-8.75,23.8H55.14L55.14,55.14z M55.14,26.29V8.72c-6.78,5.92-12.35,11.76-16.74,17.57H55.14L55.14,26.29z"}))),github:n.a.createElement("svg",{className:"svg-icon",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"25px",height:"25px","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision","image-rendering":"optimizeQuality","fill-rule":"evenodd","clip-rule":"evenodd",viewBox:"0 0 640 640"},n.a.createElement("path",{d:"M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"}))},Z={id:0},K=function(e){var t=e.type,a=e.label,c=e.content;return n.a.createElement("article",{className:"r-article "+t},n.a.createElement("h3",{className:"article-label"},a),n.a.createElement("div",{className:"paragraphs"},c))},W=function(e){var t=e.left,a=e.right;return n.a.createElement("div",{className:"bibox"},n.a.createElement("div",{className:"label info"},t),n.a.createElement("div",{className:"info"},a))},Q=function(e){var t=e.src,a=e.alt,c=e.w,l=void 0===c?"40":c,r=e.h,o=void 0===r?"40":r;return n.a.createElement("img",{className:"logo",src:t,alt:a,width:l,height:o})},Y=function(e){var t=e.label,a=e.icon;return n.a.createElement("div",{className:"labelicon"},n.a.createElement("span",{className:"icon"},a)," ",n.a.createElement("span",{className:"icondesc"},t))},$=function(e){var t=e.label,a=e.src,c=e.alt,l=e.desc;return n.a.createElement(W,{left:n.a.createElement(Y,{label:t,icon:n.a.createElement(Q,{src:a,alt:c,w:"20",h:"20"})}),right:l})},ee=function(e){var t=e.icon,a=e.txt;return n.a.createElement("div",{className:"svg_txt"},t,n.a.createElement("span",{className:"svg-txt"},a))},te=function(e){return n.a.createElement("div",{className:e},n.a.createElement("h4",{id:"interests"},"Interests / Activities:"),n.a.createElement($,{label:"Kendo",src:T,alt:"katana logo",desc:"Suburi"}),n.a.createElement($,{label:"Video games",src:G,alt:"controller logo",desc:"Cooperation, Competition"}),n.a.createElement($,{label:"Programming",src:U,alt:"laptop logo",desc:"Learning concepts"}),n.a.createElement($,{label:"Problem Solving",src:q,alt:"hackerrank logo",desc:"Program to solve problems"}),n.a.createElement($,{label:"Artificial consciousness",src:F,alt:"machine learning logo",desc:""}),n.a.createElement($,{label:"Music",src:J,alt:"music logo",desc:"OST, post-rock, rock"}),n.a.createElement($,{label:"Manga / Anime",src:X,alt:"book logo",desc:""}))},ae=(a(30),function(e){var t=e.year,a=e.title,c=void 0===a?"test":a,l=e.desc;return n.a.createElement("article",{className:"timepoint"},n.a.createElement("h3",{className:"t-year"},t),n.a.createElement("div",{className:"t-line"},"|"),n.a.createElement("div",{className:"t-desc"},n.a.createElement("h4",{className:"tdesc-title"},c),n.a.createElement("p",{className:"tdesc-desc"},l)))}),ce=function(e){return n.a.createElement("div",{className:"timeline"},n.a.createElement(ae,{year:"2015",title:"Lyc\xe9e Montesquieu (High School)",desc:"Highscool degree ES (economic and social)"}),n.a.createElement(ae,{year:"2018",title:"Paris-V Descartes (University)",desc:"Economy and Management bachelor's degree"}),n.a.createElement(ae,{year:"2019",title:"Epitech Paris",desc:n.a.createElement("article",null,n.a.createElement("p",null,"(2019-2020) PGE 2nd year",n.a.createElement("br",null),"(2020-now) Pre-Msc Pro"))}))},ne={fullname:"Maxime Ung",pseudo:"Anacrius",avatar:"https://avatars1.githubusercontent.com/u/71248735?s=460&u=4df514b7a3d470625b87d0382d81938dc2587a53&v=4",occupation:"Student at Epitech Paris",shortdesc:"Developper actually looking for a work-study contract for January 2021",email:"maxime.ung@epitech.eu",github:"https://www.github.com/Anacrius/",website:"anacrius.github.io",birthdate:"31 / 10 / 1997",location:"France"},le=["Hello, I am actually looking for a work-study contract in January 2021 in the field of AI, Big Data or Web Development. I want to learn new things and explore new horizons.","I have a strong interest into artificial consciousness, datas and information gestion because I believe that the handling and the correct exploitation of datas lead to progress."],re={"Epitech Paris":["(sept 2020 - now) Pre-Msc pro","(2019 - 2010) PGE 2nd year"],"Paris-V Descartes (University)":["(2015-2018) Economic bachelor's degree"],"Lyc\xe9e Montesquieu (High school)":["Highschool degree ES (economic and social)"]},oe=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,l=new Array(c),r=0;r<c;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={education:[],description:le.map((function(e){return n.a.createElement("p",{key:Z.id++},e)}))},e.languages=n.a.createElement("div",null,n.a.createElement("h4",null,"Languages"),n.a.createElement($,{label:"French",src:A,alt:"french flag logo",desc:"Native"}),n.a.createElement($,{label:"English (UK/US)",src:I,alt:"english flag logo",desc:"B2-C1"})),e.interests=n.a.createElement(te,{divname:"interestlists"}),e.about=n.a.createElement("div",{id:"about"},n.a.createElement(W,{left:"Birth date: ",right:ne.birthdate}),n.a.createElement(W,{left:"Location: ",right:ne.location}),n.a.createElement(W,{left:"Mail: ",right:n.a.createElement("a",{href:"mailto:"+ne.email},ne.email)}),n.a.createElement(W,{left:"GitHub:",right:n.a.createElement("a",{href:ne.github},"www.github.com/"+ne.pseudo)}),e.languages,e.interests),e.plogos=n.a.createElement("p",{className:"logos"},n.a.createElement(Q,{src:x,alt:"haskell logo"}),n.a.createElement(Q,{src:y,alt:"cpp logo"}),n.a.createElement(Q,{src:L,alt:"c logo"}),n.a.createElement(Q,{src:z,alt:"js logo"}),n.a.createElement(Q,{src:N,alt:"python logo"})),e.front_logos=n.a.createElement("p",{className:"logos"},n.a.createElement(Q,{src:M,alt:"html logo"}),n.a.createElement(Q,{src:C,alt:"css logo"}),n.a.createElement(Q,{src:k,alt:"materialize logo"}),n.a.createElement(Q,{src:H,alt:"jquery logo"}),n.a.createElement(Q,{src:D,alt:"react logo"})),e.slogos=n.a.createElement("p",{className:"logos"},n.a.createElement(Q,{src:P,alt:"github logo"}),n.a.createElement(Q,{src:_,alt:"teams logo"}),n.a.createElement(Q,{src:O,alt:"visual logo"}),n.a.createElement(Q,{src:S,alt:"excel logo"}),n.a.createElement(Q,{src:V,alt:"ppt logo"}),n.a.createElement(Q,{src:B,alt:"gsheets logo"}),n.a.createElement(Q,{src:j,alt:"filezilla logo"})),e.skills=n.a.createElement("p",{className:"skills"},n.a.createElement("h4",{className:"s-title"},"Computation / Video Games"),e.plogos,n.a.createElement("h4",{className:"s-title"},"Front-end web"),e.front_logos,n.a.createElement("h4",{className:"s-title"},"Softwares / Tools"),e.slogos),e.contact=n.a.createElement("article",{className:"right-side"},n.a.createElement("span",{id:"contact"},"Contact:"),n.a.createElement("a",{href:"mailto:"+ne.email},n.a.createElement("p",{id:"email"},ne.email)),n.a.createElement("a",{href:ne.github},n.a.createElement("p",{id:"website"},"My public projects"))),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=[],t=[];for(var a in re)t=re[a].map((function(e){return n.a.createElement("p",{key:Z.id++,className:"line"},e)})),e.push(n.a.createElement("article",{key:Z.id++},n.a.createElement("h4",{className:"e-title"},a),t)),t=[];this.setState({education:e})}},{key:"render",value:function(){var e=ne;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"resume"},n.a.createElement("main",{className:"resume-body"},n.a.createElement("header",{className:"resume-header"},n.a.createElement("article",{className:"left-rheader"},n.a.createElement("h1",{className:"fullname"},n.a.createElement("img",{className:"profile-pic",src:e.avatar,alt:"github profilepic",width:"70",height:"70"}),n.a.createElement("span",null,ne.fullname)),n.a.createElement("h4",{className:"occupation"},ne.occupation),n.a.createElement("h4",null,"Developper actually looking for a work-study contract for January 2021")),n.a.createElement("article",{className:"right-rheader"},n.a.createElement(ee,{icon:R.mail,txt:n.a.createElement("a",{href:"mailto:"+ne.email},ne.email)}),n.a.createElement(ee,{icon:R.place,txt:ne.location}),n.a.createElement(ee,{icon:R.cake,txt:ne.birthdate}),n.a.createElement(ee,{icon:R.website,txt:n.a.createElement("a",{href:ne.website},ne.website)}),n.a.createElement(ee,{icon:R.github,txt:n.a.createElement("a",{href:ne.github},"www.github.com/"+ne.pseudo)}))),n.a.createElement(K,{type:"Description",label:"Personal Profile",content:this.state.description}),n.a.createElement(K,{type:"Education",label:"Education",content:n.a.createElement(ce,null)}),n.a.createElement(K,{type:"Skills",label:"Skills",content:this.skills}),n.a.createElement(K,{type:"Documentation",label:"Documentation",content:n.a.createElement("p",null,n.a.createElement("a",{href:"https://www.epitech.eu/msc-pro/entreprise-32192-rpwm/"}," More details about the work-study contract (french) "))}))))}}]),a}(c.Component),ie=(a(31),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this,e)).state={full:!1,title:c.props.title,shortDesc:c.props.shortDesc,longDesc:c.props.longDesc},c}return Object(i.a)(a,[{key:"handleClick",value:function(){var e=!this.state.full;this.setState({full:e})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"card"},n.a.createElement("h3",null,this.state.title),n.a.createElement("p",null,this.state.shortDesc),n.a.createElement("p",null,!0===this.state.full?this.state.longDesc:""),n.a.createElement("div",{id:"cardfooter"},n.a.createElement("button",{onClick:function(){return e.handleClick()},className:"btn"},!1===this.state.full?"Learn more":"Close desc")))}}]),a}(c.Component)),se=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"gallery"},n.a.createElement(ie,{title:"Zsh shell implementation",shortDesc:"A program in C to reproduce a Unix shell ",longDesc:"Long desc",pictures:""}),n.a.createElement(ie,{title:"** Title **",shortDesc:"short description",longDesc:"",pictures:""}),n.a.createElement(ie,{title:"** Title **",shortDesc:"short description",longDesc:"",pictures:""}),n.a.createElement(ie,{title:"** Title **",shortDesc:"short description",longDesc:"",pictures:""}))}}]),a}(c.Component),me=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h3",null,"Skills part (build in progress)"))}}]),a}(c.Component),he=function(e){return n.a.createElement("header",{id:"top-header"},n.a.createElement("h1",{id:"head"},n.a.createElement("span",{id:"job"},"UNG"),"Maxime"),n.a.createElement(f,null))},ge=function(e){return n.a.createElement("footer",null,n.a.createElement("div",{className:"efooter info"},n.a.createElement("h4",null,"React page made by Anacrius (Maxime Ung)")))};function ue(){return n.a.createElement(r.a,null,n.a.createElement("div",{id:"app"},n.a.createElement(he,null),n.a.createElement("main",{id:"main"},n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/",component:oe}),n.a.createElement(o.a,{path:"/gallery",component:se}),n.a.createElement(o.a,{path:"/skills",component:me}))),n.a.createElement(ge,null)))}a(32);var pe=document.getElementById("root");Object(l.render)(n.a.createElement(r.a,null,n.a.createElement(ue,null)),pe)}},[[20,1,2]]]);
//# sourceMappingURL=main.2508c869.chunk.js.map