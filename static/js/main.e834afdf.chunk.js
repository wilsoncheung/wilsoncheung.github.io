(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/Wilson-Resume.0e82eb27.pdf"},28:function(e,t,a){e.exports=a.p+"static/media/profile-pic.623b407f.png"},29:function(e,t,a){e.exports=a.p+"static/media/weather-app.505c4801.png"},32:function(e,t,a){e.exports=a(49)},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=a(1),s=a(2),i=a(4),m=a(3),u=a(5),d=function(e){return r.a.createElement("div",{className:"container-fluid"},"    ",e.children)},p={backgroundColor:"gray",textAlign:"center",padding:"1em"},E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer",style:p},r.a.createElement("div",{className:"text-white"},"\xa9 Copyright ",(new Date).getFullYear(),r.a.createElement("br",null),"Wilson Cheung"))}}]),t}(n.Component),h=a(9),v=a(12),f=a(10),b=a(25),g=a.n(b);function N(){var e=Object(h.a)(["\n    color: #0376dd;\n    border-color: #0376dd;\n    padding: 0.15rem .5rem;\n    line-height: 1.25;\n    &:hover {\n        color:inherit;\n        background-color: white;\n    }\n    &:active {\n        color: inherit;\n        background-color: white;\n    }\n"]);return N=function(){return e},e}function y(){var e=Object(h.a)(["\n    color: #4e4e4e !important;\n    &:hover {\n        border-bottom: 2px solid black;\n        cursor: pointer;\n        color: #0376dd !important;\n    }\n"]);return y=function(){return e},e}var w=Object(f.a)(v.Link)(y()),x=f.a.button(N()),k=function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-white navbar-expand-lg fixed-top"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement("i",{className:"far fa-user"}),r.a.createElement(w,{activeClass:"active",to:"About",spy:!0,smooth:!0,duration:500}," About Me")),r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement("i",{className:"far fa-folder"}),r.a.createElement(w,{activeClass:"active",to:"Project",spy:!0,smooth:!0,duration:500}," Projects")),r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement("i",{className:"far fa-address-book"}),r.a.createElement(w,{activeClass:"active",to:"footer",spy:!0,smooth:!0,duration:500}," Contact")),r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement(x,{type:"button",className:"btn btn-outline-primary btn-sm"},r.a.createElement("i",{className:"far fa-file-alt"}),r.a.createElement("a",{href:g.a,target:"_blank",rel:"noopener noreferrer"}," Resume")))))))},j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={text:"",isDeleting:!1,loopNum:0,typingSpeed:180},a.handleTyping=function(){var e=a.props.dataText,t=a.state,n=t.isDeleting,r=t.loopNum,l=t.text,c=t.typingSpeed,o=e[r%e.length];a.setState({text:n?o.substring(0,l.length-1):o.substring(0,l.length+1),typingSpeed:n?30:180}),n||l!==o?n&&""===l&&a.setState({isDeleting:!1,loopNum:r+1}):setTimeout(function(){return a.setState({isDeleting:!0})},300),setTimeout(a.handleTyping,c)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.handleTyping()}},{key:"render",value:function(){return r.a.createElement("h1",null,this.props.heading,r.a.createElement("span",{style:{color:"#0376dd"}},this.state.text),r.a.createElement("span",{id:"cursor"}))}}]),t}(n.Component),C=a(28),O=a.n(C);function A(){var e=Object(h.a)(["\n    color: #4e4e4e !important;\n    &:hover {\n        border-bottom: none;\n        color: black !important;\n        cursor: pointer;\n    }\n"]);return A=function(){return e},e}var S=Object(f.a)(v.Link)(A()),T=function(e){return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(S,{activeClass:"active",to:e.to,spy:!0,smooth:!0,duration:500},r.a.createElement("h1",null,r.a.createElement("i",{className:"animated infinite bounce slow "+("HOME"===e.to.toUpperCase()?"fas fa-angle-double-up":"fas fa-chevron-down")}))))},I={height:"400px",width:"400px",objectFit:"cover",marginRight:"2em"};function M(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{id:"Home"},r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row justify-content-center align-items-center h-90"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("img",{src:O.a,alt:"profile-pic",className:"img-thumbnail rounded-circle",style:I})),r.a.createElement("div",{className:"col-7"},r.a.createElement(j,{heading:"Who Am I? ",dataText:["Coder","Team Player","Productive","Imaginative","Passionate","Adaptive","Wilson Cheung."]}))),r.a.createElement(T,{to:"About"}))))}var P={color:"white",backgroundColor:"grey"},F=function(){return r.a.createElement("section",{id:"About"},r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row  h-90 justify-content-center align-items-center"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body",style:P},r.a.createElement("h2",{className:"card-title"},r.a.createElement("i",{className:"far fa-address-card"})," ",r.a.createElement("u",null,"About Me")),r.a.createElement("p",null,"Hi, I'm Wilson, a software developer from New York City with 4 years of experience in building full-stack web applications from soup to nuts. I love to explore and tinker with new tech to see how it works with the exisiting tools I use."),r.a.createElement("p",null,"I believe the best way to learn is just do it and learn from your trail and errors. Failure is just another lesson to be learned from."),r.a.createElement("p",null,"Currently I am looking for a software developer position to exercise what I have learned professionally and personally.")))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body",style:P},r.a.createElement("h2",{className:"card-title text-center mb-3"},r.a.createElement("i",{className:"fas fa-toolbox"})," ",r.a.createElement("u",null,"Toolbox")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h5",null,r.a.createElement("u",null,"Languages"),":"),r.a.createElement("p",null,"C#, JavaScript, SQL, HTML, CSS")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h5",null,r.a.createElement("u",null,"Frameworks/ Libraries"),":"),r.a.createElement("p",null,"ASP.NET, AngularJs, ReactJS, Bootstrap")),r.a.createElement("div",{className:"col"},r.a.createElement("h5",null,r.a.createElement("u",null,"IDE"),":"),r.a.createElement("p",null,"Microsoft Visual Studio, ",r.a.createElement("br",null)," Visual Studio Code")),r.a.createElement("div",{className:"col"},r.a.createElement("h5",null,r.a.createElement("u",null,"Version Control"),":"),r.a.createElement("p",null,"Git/GitHub, Bitbucket"))))))),r.a.createElement(T,{to:"footer"})))},D={resize:"none"},W=function(){return r.a.createElement("section",{id:"Contact"},r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row h-90"},r.a.createElement("div",{className:"col align-self-center"},r.a.createElement("h2",{className:"text-center"},r.a.createElement("strong",null,r.a.createElement("u",null,"Contact"))),r.a.createElement("form",{className:"form-horizontal",action:"mailto:wc683@nyu.edu?subject=Mail from Portfolio Site",method:"post",encType:"text/plain"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{className:"form-control",type:"text",name:"Name",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{className:"form-control",type:"email",name:"Email",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{className:"form-control",rows:"5",name:"Message",style:D,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")))))),r.a.createElement(T,{to:"Home"})))},H=a(29),J=a.n(H),L={maxWidth:"550px"},z={width:"100%",height:"16vw",objectFit:"cover"},B={overflow:"hidden"},R={fontSize:"14px"},G=function(){return r.a.createElement("section",{id:"Project"},r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row h-90"},r.a.createElement("div",{className:"col align-self-center"},r.a.createElement("h2",{className:"text-center font-weight-bold"},r.a.createElement("u",null,"Projects")),r.a.createElement("br",null),r.a.createElement("a",{href:"https://wilsoncheung.github.io/weather-app/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"card text-white bg-dark mb-3 shadow rounded",style:L},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-6",style:B},r.a.createElement("img",{src:J.a,className:"card-img img-zoom h-100",style:z,alt:"weather-app"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Weather App"),r.a.createElement("p",{className:"card-text ",style:R},"A local weather app that shows you the current weather and the next 5 day forecast. You can also search the weather with any part of the address (zip, city, county, etc..). Built using VueJs framework, Google Geocoding API and Dark Sky API."),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},"Born Sept 2019"))))))))),r.a.createElement(T,{to:"Resume"})))},V=(a(48),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(d,null,r.a.createElement(M,null),r.a.createElement(F,null),r.a.createElement(G,null),r.a.createElement(W,null)),r.a.createElement(E,null))}}]),t}(n.Component));c.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e834afdf.chunk.js.map