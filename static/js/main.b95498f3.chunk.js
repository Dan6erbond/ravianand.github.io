(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{260:function(e,t,a){e.exports=a(426)},265:function(e,t,a){},270:function(e,t,a){},273:function(e,t,a){},274:function(e,t,a){},275:function(e,t,a){},276:function(e,t,a){},277:function(e,t,a){},278:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){},281:function(e,t,a){},290:function(e,t,a){},291:function(e,t,a){},292:function(e,t,a){},424:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(74),i=a.n(r),o=a(453),c=a(18);a(265);function s(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{bg:"white"},l.a.createElement(c.a,{to:"/"},l.a.createElement(o.a.Brand,null,l.a.createElement("img",{alt:"logo",src:"/res/img/logo/logo - green.png",width:"30",height:"30",className:"d-inline-block align-top"})," ","RaviAnand")),l.a.createElement(o.a.Toggle,null),l.a.createElement(o.a.Collapse,{className:"justify-content-end"})),l.a.createElement("br",null))}a(270);var m=a(65),u=a(10);function d(){return l.a.createElement("footer",null,l.a.createElement("div",null,"\xa9 RaviAnand Mohabir, 2020"),l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/Dan6erbond",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(u.a,{icon:m.b}))," ",l.a.createElement("a",{href:"https://www.reddit.com/user/Dan6erbond",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(u.a,{icon:m.c}))," ",l.a.createElement("a",{href:"https://stackoverflow.com/users/9176391/dan6erbond",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(u.a,{icon:m.d}))," ",l.a.createElement("a",{href:"https://www.youtube.com/channel/UCV2HtVYzjMELIhy6L4CAdug",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(u.a,{icon:m.e}))," ",l.a.createElement("a",{href:"https://discord.gg/wMEyKZk",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(u.a,{icon:m.a}))))}var h=a(16),p=a(7),f=(a(273),function(e){return n.createElement(p.a.path,Object.assign({fill:"transparent",strokeWidth:"3",stroke:"rgb(64, 153, 130)",strokeLinecap:"round"},e))});function g(e){var t=Object(p.d)().scrollYProgress,a=Object(p.c)(t,[0,.9],[0,1]),l=Object(p.b)(a,{stiffness:400,damping:90});return n.createElement("button",{onClick:e.toggle,className:"menu-toggle"},n.createElement("div",null,n.createElement("svg",{className:"progress-indicator",width:"50",height:"50",viewBox:"0 0 50 50"},n.createElement(p.a.path,{fill:"none",strokeWidth:"5",stroke:"rgb(64, 153, 130)",strokeDasharray:"0 1",d:"M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0",style:{pathLength:l,rotate:90,translateX:5,translateY:5,scaleX:-1}})),n.createElement("svg",{className:"menu-icon",width:"23",height:"23",viewBox:"0 0 23 23"},n.createElement(f,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),n.createElement(f,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),n.createElement(f,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}}))))}a(274);function E(){var e=l.a.useState(!1),t=Object(h.a)(e,2),a=t[0],n=t[1],r=function(){n(!a)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a.div,{initial:!1,animate:a?"open":"closed"},l.a.createElement(g,{toggle:r}),l.a.createElement(p.a.div,{transition:{duration:.15},className:"menu",variants:{open:{opacity:1,visibility:"visible"},closed:{opacity:0,transitionEnd:{visibility:"hidden"}}},onClick:r},l.a.createElement(c.a,{to:"/"},l.a.createElement(o.a.Brand,{className:"logo"},l.a.createElement("img",{alt:"logo",src:"/res/img/logo/logo - green.png",width:"30",height:"30",className:"d-inline-block align-top"})," ","RaviAnand")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.a,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(c.a,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(c.a,{to:"/projects"},"Projects")),l.a.createElement("li",null,l.a.createElement(c.a,{to:"/resume"},"Resume"))))))}function b(e){return n.createElement(n.Fragment,null,n.createElement(s,null),n.createElement(E,null),n.createElement("main",{style:{minHeight:"100vh"}},e.children),n.createElement("br",null),n.createElement(d,null))}var v=a(22),w=a(31),y=a.n(w);a(275);function k(e){var t=e.imageSrc,a=e.children,n=e.bannerHeight,r=l.a.useState(!1),i=Object(h.a)(r,2),o=i[0],c=i[1];return l.a.createElement("div",{className:"full-page center"},l.a.createElement("div",{className:"content"},l.a.createElement(y.a,{partialVisibility:!0,onChange:function(e){e&&!o&&c(!0)}},l.a.createElement(p.a.div,{initial:!1,animate:o?"visible":"hidden",className:"banner"},l.a.createElement("div",{className:"banner-content"},l.a.createElement(p.a.div,{variants:{hidden:{translateY:"-20%",opacity:0},visible:{translateY:0,opacity:1}},transition:{duration:.6},className:"banner-image",style:{background:'url("'.concat(t,'")'),height:n||"50vh"}}),l.a.createElement(p.a.div,{className:"content-container"},l.a.createElement(p.a.div,{variants:{hidden:{translateY:"20%",opacity:0},visible:{translateY:0,opacity:1}}},a)))))))}var A=a(13);a(276);function N(e){var t=e.targetRef,a=e.label;return l.a.createElement("div",{className:"scroll-down"},l.a.createElement(p.a.button,{onClick:function(){return e=t,window.scrollTo(0,e.current.offsetTop);var e},whileHover:{scale:1.1},whileTap:{scale:.9}},l.a.createElement(u.a,{icon:A.a})),l.a.createElement("span",null,a))}var S=a(442),T=a(443),M=a(444);a(277);function j(e){var t=e.skillName,a=e.skillStrength,l=n.useState(0),r=Object(h.a)(l,2),i=r[0],o=r[1];return n.createElement(y.a,{onChange:function(e){e&&0===i&&o(10*a)}},n.createElement("div",{className:"skill"},n.createElement("p",null,t),n.createElement("div",{className:"bar"},n.createElement("div",{style:{width:"".concat(i,"%")}}),n.createElement("span",null,a,"/10"))))}a(278);function I(e){var t=e.aboutRef,a=e.projectsRef,n=l.a.useState(!1),r=Object(h.a)(n,2),i=r[0],o=r[1];return l.a.createElement(y.a,{partialVisibility:!0,onChange:function(e){e&&!i&&o(!0)}},l.a.createElement(p.a.div,{initial:!1,animate:i?"visible":"hidden",ref:t},l.a.createElement(S.a,{fluid:"md"},l.a.createElement(T.a,null,l.a.createElement(M.a,{sm:12,md:4,lg:6},l.a.createElement(p.a.div,{variants:{hidden:{translateX:"-20%",opacity:0},visible:{translateX:0,opacity:1}},transition:{duration:.6},className:"center-container"},l.a.createElement("div",{className:"content about"},l.a.createElement("div",{className:"profile-img"}),l.a.createElement("p",{style:{margin:0}},"I enjoy creating front-end and back-end applications for mobile and desktop devices alike. My goal is to create seamless experiences for the users of my applications and speedy performance.",l.a.createElement("br",null),l.a.createElement("br",null),"Recently I have been working with C# ASP.NET Web APIs and React front-end applications."),l.a.createElement("br",null),l.a.createElement(c.a,{className:"btn btn-outline-primary flat-button",to:"/about"},"Read More")))),l.a.createElement(M.a,{sm:12,md:8,lg:6},l.a.createElement(p.a.div,{variants:{hidden:{translateX:"20%",opacity:0},visible:{translateX:0,opacity:1}},transition:{duration:.6}},[{skillName:"Java",skillStrength:9},{skillName:"Kotlin",skillStrength:6},{skillName:"Python",skillStrength:9},{skillName:"C#",skillStrength:8},{skillName:"HTML/CSS",skillStrength:9},{skillName:"PHP",skillStrength:6},{skillName:"Js/Ts",skillStrength:8},{skillName:"SQL",skillStrength:6},{skillName:"C++",skillStrength:3}].map((function(e,t){return l.a.createElement(j,{key:t,skillName:e.skillName,skillStrength:e.skillStrength})})))))),l.a.createElement("br",null),l.a.createElement(N,{targetRef:a,label:"Projects"})))}a(279);var C=a(456);a(280);function P(e){var t,a=e.image,n=e.children,r=!!e.animate||!!e.direction;switch(e.direction||"down"){case"up":t={translateY:"20%",opacity:0};break;case"down":t={translateY:"-20%",opacity:0};break;case"left":t={translateX:"20%",opacity:0};break;case"right":t={translateX:"-20%",opacity:0}}var i=l.a.useState(!1),o=Object(h.a)(i,2),c=o[0],s=o[1];return l.a.createElement(y.a,{partialVisibility:!0,onChange:function(e){e&&!c&&s(!0)}},l.a.createElement(p.a.div,{animate:!c&&r?"hidden":"visible",variants:{hidden:t,visible:{translateY:0,translateX:0,opacity:1}},transition:{duration:.6},style:{height:"100%"}},l.a.createElement(C.a,{style:{height:"100%"}},l.a.createElement(C.a.Body,null,l.a.createElement(S.a,null,l.a.createElement(T.a,null,l.a.createElement(M.a,{sm:12,md:4,className:"project-image"},a),l.a.createElement(M.a,{sm:12,md:8},n)))))))}function x(e){var t=e.projectsRef;return l.a.createElement("div",{ref:t},l.a.createElement(S.a,{fluid:"md"},l.a.createElement(T.a,null,l.a.createElement(M.a,null,l.a.createElement(P,{animate:!0,image:l.a.createElement("img",{className:"idpa-image",alt:"IDPA | Informatikmitteleinsatz in Unternehmen",height:"auto",src:"/res/img/projects/idpa/idpa.jpg"})},l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Interdisciplinary Project Work"),l.a.createElement("p",null,"Project about the usage of IT tools and software in corporate and private workflows."),l.a.createElement(c.a,{className:"btn btn-outline-primary flat-button",to:"/projects/idpa"},"Read More"))))),l.a.createElement("br",null),l.a.createElement(T.a,null,l.a.createElement(M.a,{xs:12,md:6},l.a.createElement(P,{direction:"right",image:l.a.createElement("img",{style:{width:"90%",minWidth:"100px",maxWidth:"300px"},alt:"Fuzzle",height:"auto",src:"/res/img/projects/fuzzle/logo_text.png"})},l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Fuzzle"),l.a.createElement("p",null,"A search algorithm initially written in Python, now ported to languages such as JavaScript and C#."),l.a.createElement(c.a,{className:"btn btn-outline-primary flat-button",to:"/projects/fuzzle"},"Read More")))),l.a.createElement(M.a,{xs:12,md:6},l.a.createElement(P,{direction:"left",image:l.a.createElement("img",{style:{width:"90%",minWidth:"100px",maxWidth:"300px"},alt:"ASP.NET",height:"auto",src:"/res/img/icons/asp.net.png"})},l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Who Wants To Be A Millionaire"),l.a.createElement("p",null,"Implementation of the Who Wants To Be A Millionaire game in C# with a React front-end."),l.a.createElement(c.a,{className:"btn btn-outline-primary flat-button",to:"/projects/wwtbam"},"Read More"))))),l.a.createElement("br",null),l.a.createElement(T.a,null,l.a.createElement(M.a,{style:{textAlign:"center"}},l.a.createElement(c.a,{className:"btn btn-outline-primary flat-button",to:"/projects"},"View More")))))}a(281);function R(){var e=l.a.useRef(null),t=l.a.useRef(null);return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{imageSrc:"/res/img/home/code.jpg"},l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"banner-title"},"RaviAnand Mohabir"),l.a.createElement("p",{className:"banner-text"},"I'm an engineering student in Switzerland, experienced with Java, C# and Python."),l.a.createElement("a",{className:"btn btn-outline-primary flat-button",href:"mailto:moravrav@gmail.com?subject=Hi!"},"Message Me"),l.a.createElement(N,{targetRef:e,label:"About Me"}))),l.a.createElement(I,{aboutRef:e,projectsRef:t}),l.a.createElement("br",null),l.a.createElement(x,{projectsRef:t}))}var W=a(143);a(290);function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var F=l.a.createElement("rect",{width:900,height:600,fill:"#ED2939"}),z=l.a.createElement("rect",{width:600,height:600,fill:"#fff"}),D=l.a.createElement("rect",{width:300,height:600,fill:"#002395"}),L=function(e){var t=e.svgRef,a=e.title,n=O(e,["svgRef","title"]);return l.a.createElement("svg",H({viewBox:"0 0 900 600",ref:t},n),a?l.a.createElement("title",null,a):null,F,z,D)},_=l.a.forwardRef((function(e,t){return l.a.createElement(L,H({svgRef:t},e))})),U=(a.p,[{active:!1,name:"BlueMouse GmbH",subtitle:"Internship",description:"Will spend a year as an intern at the BlueMouse GmbH developing websites.",date:"2020 - 2021",icon:l.a.createElement(u.a,{style:{width:"24px"},icon:A.b})},{active:!0,name:"IMS Aarau",subtitle:"Computing College",description:"Studying at the Computing College in Aarau with a focus on software development.",date:"2017 - present",icon:l.a.createElement(u.a,{style:{width:"24px"},icon:A.k})},{active:!1,name:"Studied in Montpellier, France",subtitle:"Language Stay",description:"Spent three weeks at the ILA French language school in Montpellier to brush up on my French skills.",date:"September 2020",icon:l.a.createElement(_,null)},{active:!1,name:"Bezirksschule Zofingen",subtitle:"Junior High School",description:"Studied at the junior highschool in Zofingen and started taking computer science courses.",date:"2013 - 2017",icon:l.a.createElement(u.a,{style:{width:"24px"},icon:A.k})},{active:!1,name:"Quartierschule M\xfchlethal",subtitle:"Primary School",date:"2009 - 2013",description:"Skipped the 5th grade in primary school.",icon:l.a.createElement(u.a,{style:{width:"24px"},icon:A.k})}]);function J(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(W.VerticalTimeline,null,U.map((function(e,t){return l.a.createElement(W.VerticalTimelineElement,{key:t,className:e.active?"vertical-timeline-element-active":void 0,date:e.date,icon:e.icon},l.a.createElement("h3",{className:"vertical-timeline-element-title"},e.name),e.subtitle?l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.subtitle):null,e.description?l.a.createElement("p",null,e.description):null)}))))}a(291);function V(){return l.a.createElement(S.a,{fluid:"md"},l.a.createElement("h3",{style:{textAlign:"center"}},"About"),l.a.createElement(S.a,{fluid:"sm",style:{margin:"0 auto",maxWidth:"600px"}},l.a.createElement("p",null,"Hi! I'm an engineering student based in Switzerland, currently studying at the Computing College in Aarau.",l.a.createElement("br",null),l.a.createElement("br",null),"I've worked on numerous professional and private projects in the fields of webdesign, back-end and data analysis.",l.a.createElement("br",null),l.a.createElement("br",null),"Furthermore, I have a solid background in common programming languages such as C#, Java, and Python, as well as a profound understanding of layout & design.")),l.a.createElement("br",null),l.a.createElement("h4",{style:{textAlign:"center"}},"Education"),l.a.createElement(J,null),l.a.createElement("br",null),l.a.createElement("h4",{style:{textAlign:"center"}},"Hobbies"),l.a.createElement("br",null),l.a.createElement(S.a,null,l.a.createElement(T.a,null,l.a.createElement(M.a,{sm:6,md:3},l.a.createElement("div",{className:"hobby"},l.a.createElement(p.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9}},l.a.createElement(u.a,{icon:A.f})),l.a.createElement("p",null,"Guitar"))),l.a.createElement(M.a,{sm:6,md:3},l.a.createElement("div",{className:"hobby"},l.a.createElement(p.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9}},l.a.createElement(u.a,{icon:A.j})),l.a.createElement("p",null,"Jogging"))),l.a.createElement(M.a,{sm:6,md:3},l.a.createElement("div",{className:"hobby"},l.a.createElement(p.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9}},l.a.createElement(u.a,{icon:A.c})),l.a.createElement("p",null,"Photography"))),l.a.createElement(M.a,{sm:6,md:3},l.a.createElement("div",{className:"hobby"},l.a.createElement(p.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9}},l.a.createElement(u.a,{icon:A.i})),l.a.createElement("p",null,"Karate"))))))}a(292);var B=a(216),G=[{Aspect:"Functionalities","Active in IT":15,"Not Given":0,"Junior / Highschool":13,Working:29,"College / University":25},{Aspect:"Availability on Different Devices","Active in IT":10,"Not Given":2,"Junior / Highschool":10,Working:16,"College / University":17},{Aspect:"Offline Availability","Active in IT":8,"Not Given":1,"Junior / Highschool":12,Working:17,"College / University":15},{Aspect:"Price","Active in IT":6,"Not Given":0,Working:15,"Junior / Highschool":5,"College / University":15},{Aspect:"Cloud Storage","Active in IT":4,"Not Given":0,Working:4,"Junior / Highschool":8,"College / University":9},{Aspect:"Privacy","Active in IT":0,"Not Given":0,Working:1,"Junior / Highschool":0,"College / University":3},{Aspect:"Link to Third Party Services","Active in IT":7,"Not Given":2,Working:14,"Junior / Highschool":6,"College / University":15},{Aspect:"Open Source","Active in IT":3,"Not Given":1,Working:14,"Junior / Highschool":4,"College / University":14},{Aspect:"Online availability","Active in IT":3,"Not Given":1,Working:8,"Junior / Highschool":1,"College / University":11},{Aspect:"Stability","Active in IT":1,"Not Given":0,Working:0,"Junior / Highschool":0,"College / University":0}];function X(){return n.createElement(B.a,{data:G,keys:["Active in IT","Junior / Highschool","Working","College / University","Not Given"],indexBy:"Aspect",margin:{top:50,right:130,bottom:50,left:60},padding:.3,colors:{scheme:"set2"},borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Aspect",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Responses",legendPosition:"middle",legendOffset:-40},labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]}],animate:!0,motionStiffness:90,motionDamping:15})}function Y(){var e=l.a.useState(!1),t=Object(h.a)(e,2),a=t[0],n=t[1],r=l.a.useRef(null),i=[{site:"Alte Kanti Aarau",title:"Alle wichtigen Informationen zur IMS",url:"https://altekanti.ch/informatikmittelschule/allgemeine-informationen",date:"April 30, 2020"},{site:"AutoHotKey",title:"AutoHotKey",url:"https://www.autohotkey.com/",date:"April 26, 2020"},{site:"Computer Hope",title:"Script",url:"https://www.computerhope.com/jargon/s/script.htm",date:"April 26, 2020"},{site:"Computer Hope",title:"Macro",url:"https://www.computerhope.com/jargon/m/macro.htm",date:"April 26, 2020"},{site:"Draw.io",title:"Online Support",url:"https://support.draw.io/display/DO/draw.io+Online+Support",date:"February 16, 2020"},{site:"Evernote, Emily Esposito",title:"6 Ways to Automate Simple Work Tasks",url:"https://evernote.com/blog/6-ways-to-automate-simple-work-tasks/",date:"April 29, 2020"},{site:"Gabler Wirtschaftslexikon",title:"Programmablaufplan",url:"https://wirtschaftslexikon.gabler.de/definition/programmablaufplan-42988",date:"February 16, 2020"},{site:"IFTTT",title:"What is IFTTT?",url:"https://help.ifttt.com/hc/en-us/articles/115010325748-What-is-IFTTT-",date:"April 28, 2020"},{site:"Lifewire",title:"How to Organize & Categorize Messages in Gmail with Labels",url:"https://www.lifewire.com/how-to-organize-and-categorize-messages-with-labels-in-gmail-1171996",date:"April 28, 2020"},{site:"Macro Recorder",title:"Macro Recorder",url:"https://www.macrorecorder.com/",date:"April 26, 2020"},{site:"Microsoft",title:"Visio",url:"https://products.office.com/de-ch/visio/flowchart-software",date:"February 16, 2020"},{site:"Microsoft",title:"Power Apps",url:"https://powerapps.microsoft.com/en-us/",date:"April 26, 2020"},{site:"Microsoft",title:"Power Automate",url:"https://flow.microsoft.com/en-us/",date:"April 26, 2020"},{site:"Microsoft",title:"Seriendruck mithilfe einer Excel-Tabelle",url:"https://support.office.com/de-de/article/seriendruck-mithilfe-einer-excel-tabelle-858c7d7f-5cc0-4ba1-9a7b-0a948fa3d7d3",date:"April 26, 2020"},{site:"Microsoft",title:"Create or run a macro",url:"https://support.office.com/en-us/article/create-or-run-a-macro-c6b99036-905c-49a6-818a-dfb98b7c3c9c",date:"April 28, 2020"},{site:"Moodle",title:"About Moodle",url:"https://docs.moodle.org/38/en/About_Moodle",date:"April 29, 2020"},{site:"Opensource.com",title:"What is open source?",url:"https://opensource.com/resources/what-open-source",date:"February 16, 2020"},{site:"RFFlow 5",title:"Drawing a Structured Flowchart",url:"https://www.rff.com/structured_flowchart.php",date:"April 30, 2020"},{site:"Smartbear",title:"What is Automated Testing?",url:"https://smartbear.com/learn/automated-testing/what-is-automated-testing/",date:"April 30, 2020"},{site:"UMLet",title:"UMLet 14.3",url:"https://www.umlet.com/",date:"February 16, 2020"},{site:"Visual Paradigm",title:"Flowchart Example: Vacuum Robot",url:"https://online.visual-paradigm.com/diagrams/templates/flowchart/vacuum-robot/",date:"February 16, 2020"},{site:"Visual Paradigm",title:"Visual Paradigm Online Diagrams",url:"https://online.visual-paradigm.com/diagrams/",date:"February 16, 2020"},{site:"Webopedia",title:"API \u2013 application program interface",url:"https://www.webopedia.com/TERM/A/API.html",date:"April 29, 2020"},{site:"Windows Central",title:"How to create an automated task using Task Scheduler on Windows 10",url:"https://www.windowscentral.com/how-create-automated-task-using-task-scheduler-windows-10",date:"April 26, 2020"},{site:"Zapier",title:"What is Zapier?",url:"https://zapier.com/learn/getting-started-guide/what-is-zapier/",date:"April 26, 2020"}];return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{imageSrc:"/res/img/projects/idpa/employees-computer.jpg",bannerHeight:"60vh"},l.a.createElement("h2",{className:"banner-title"},"Usage of IT Tools and Software in Corporate Workflows"),l.a.createElement("p",{className:"banner-text"},"Interdisciplinary Project Work on the usage of IT tools and software in corporate and private environments, as well as methods of schooling for the analysed programs."),l.a.createElement("a",{className:"btn btn-outline-primary flat-button",href:"/res/docs/IDPA/Informatikmitteleinsatz_in_Unternehmen_v5.pdf",download:!0},l.a.createElement(u.a,{icon:A.d})," Download"),l.a.createElement(N,{targetRef:r,label:"Read More"})),l.a.createElement(y.a,{partialVisibility:!0,onChange:function(e){e&&!a&&n(!0)}},l.a.createElement(p.a.div,{className:"text",ref:r,initial:!1,animate:a?"visible":"hidden"},l.a.createElement(S.a,{fluid:"md"},l.a.createElement(T.a,null,l.a.createElement(M.a,{sm:12,md:4},l.a.createElement(p.a.div,{variants:{hidden:{translateX:"-20%",opacity:0},visible:{translateX:0,opacity:1}},transition:{duration:.6}},l.a.createElement("img",{className:"idpa-image",alt:"IDPA | Informatikmitteleinsatz in Unternehmen",height:"auto",src:"/res/img/projects/idpa/idpa.jpg"}))),l.a.createElement(M.a,{sm:12,md:8},l.a.createElement(p.a.div,{variants:{hidden:{translateX:"20%",opacity:0},visible:{translateX:0,opacity:1}},transition:{duration:.6}},l.a.createElement("h3",null,"Goal"),l.a.createElement("p",null,'The IDPA done at the Computing Colleges in Switzerland is a requirement as part of the curriculum for the "Berufsmatur" (vocational baccalaureate) and the EFZ (Federal certificate of Competence).',l.a.createElement("br",null),l.a.createElement("br",null),"It consists of a four-month research-oriented period where information on the chosen topic is gathered from credible sources and with the combination of personal contributions a conclusion for this part can be formed.",l.a.createElement("br",null),l.a.createElement("br",null),"Once the internship has been launched, the second period, more oriented on practical research done in the work environment, is used to reinforce previously gathered data and to evaluate the predictions made in the first part."))))),l.a.createElement(S.a,{fluid:"md"},l.a.createElement(p.a.div,{variants:{hidden:{translateY:"20%",opacity:0},visible:{translateY:0,opacity:1}},transition:{duration:.6}},l.a.createElement("h3",null,"Topic"),l.a.createElement("p",null,"The topic discussed in this project is the usage of IT tools and various software in company environments. As research, specific to company environments, can only reliably be done at the intern company, though, the first period focused on the usage for school and private workflows.",l.a.createElement("br",null),l.a.createElement("br",null),"There were three key questions to be answered by the end of the examination:"),l.a.createElement("ul",null,l.a.createElement("li",null,"How can workflows be visualized with IT tools in company, private and school environments?"),l.a.createElement("li",null,"How can workflows be automated with IT tools in company, private and school environments?"),l.a.createElement("li",null,"How can users of IT tools and software be educated on their functionalities and capabilities?")),l.a.createElement("h3",null,"Research"),l.a.createElement("p",null,"To create a baseline of software and tools to examine, a set of visualisation and automation programs were found and compared. Additionally, some quantitative research was done with the results of a survey that received over 120 responses from multiple demographics in IT- and non-IT related fields.",l.a.createElement("br",null),l.a.createElement("br",null),"The chosen tools for the visualisation were: ",l.a.createElement("a",{href:"https://www.visual-paradigm.com/",target:"_blank",rel:"noopener noreferrer"},"Visual Paradigm"),", ",l.a.createElement("a",{href:"https://www.diagrams.net/",target:"_blank",rel:"noopener noreferrer"},"Draw.io"),", ",l.a.createElement("a",{href:"https://www.microsoft.com/en/microsoft-365/visio/flowchart-software",target:"_blank",rel:"noopener noreferrer"},"Microsoft Visio")," and ",l.a.createElement("a",{href:"https://www.umlet.com/",target:"_blank",rel:"noopener noreferrer"},"UMLet"),".",l.a.createElement("br",null),l.a.createElement("br",null),"In the portion containing field research done by using the given tools and visualising, as well as automating, a set of workflows, a multitude of software were used based on the use-case including self-made Python scripts, and ",l.a.createElement("a",{href:"https://emea.flow.microsoft.com/en-us/",target:"_blank",rel:"noopener noreferrer"},"Microsoft Power Automate"),"."),l.a.createElement("h3",null,"Summary"),l.a.createElement("p",null,"Besides evaluating the survey responses, which showed in particular what kind of tasks are common and can be automated as well as what kind of software users prefer, workflows were visualized and automated with the right set of tools to analyze their effectiveness and overall practically in comparison to traditional methods.",l.a.createElement("br",null),l.a.createElement("br",null),"This graph from the survey responses shows which aspects of a software users find most important:"),l.a.createElement("div",{style:{width:"100%",height:"45vh"}},l.a.createElement(X,null)),l.a.createElement("h3",null,"Conclusion"),l.a.createElement("p",null,"Among the tools examined to create visualizations of workflows, Microsoft Visio and UMLet seem the most suitable. Visual Paradigm and Draw.io are alternatives that offer a compelling set of features, but don't scale with the overall capabilities of Visio or UMLet's simplicity. Additionally, Visual Paradigm is financially less feasible for smaller businesses, already utilizing the Microsoft Office Suite, or those looking for an open source option. UMLet also comes ahead in terms of its widespread use, as it's been dominant in the field of software engineering and database design for quite some time now.",l.a.createElement("br",null),l.a.createElement("br",null),"The conclusion for automation is much more complicated. While tools such as Zapier and Microsoft Power Automate are highly capable and work very reliable in the environment they were designed for, they don't scale well with the individual needs of a user and thus get edged out by self-made scripts and programs consistently. Additionally, any self-made script can be made open source and improved upon in rapid succession, whereas updates to larger platforms only come in bulk."),l.a.createElement("h3",null,"References"),l.a.createElement("hr",null),l.a.createElement("h4",null,"Sources"),function(){var e=Math.ceil(i.length/2),t=i.slice(0,e),a=i.slice(e);return l.a.createElement(S.a,{className:"sources"},l.a.createElement(T.a,null,l.a.createElement(M.a,{sm:12,md:6},l.a.createElement("ul",null,t.map((function(e,t){return l.a.createElement("li",{key:t},e.site,": ",l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},"\xab",e.title,"\xbb ",l.a.createElement(u.a,{icon:A.e}))," Retrieved ",e.date)})))),l.a.createElement(M.a,{sm:12,md:6},l.a.createElement("ul",null,a.map((function(e,t){return l.a.createElement("li",{key:t},e.site,": ",l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},"\xab",e.title,"\xbb ",l.a.createElement(u.a,{icon:A.e}))," Retrieved ",e.date)}))))))}(),l.a.createElement("br",null),l.a.createElement("h4",null,"Downloads"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.a,{icon:A.d})," ",l.a.createElement("a",{href:"/res/docs/IDPA/moodle.py",download:!0},"Moodle Downloader")),l.a.createElement("li",null,l.a.createElement(u.a,{icon:A.d})," ",l.a.createElement("a",{href:"/res/docs/IDPA/notification_on_file_delete.json",download:!0},"Microsoft Flow: Send E-Mail Notification on File Deletion in OneDrive")),l.a.createElement("li",null,l.a.createElement(u.a,{icon:A.d})," ",l.a.createElement("a",{href:"/res/docs/IDPA/save_email_attachments.json",download:!0},"Microsoft Flow: Save E-Mail Attachments in OneDrive"))))))))}var Z=function(){return l.a.createElement(b,null,l.a.createElement(v.c,null,l.a.createElement(v.a,{path:"/",exact:!0},l.a.createElement(R,null)),l.a.createElement(v.a,{path:"/about"},l.a.createElement(V,null)),l.a.createElement(v.a,{path:"/projects/idpa"},l.a.createElement(Y,null)),l.a.createElement(v.a,{path:"/projects"},l.a.createElement(S.a,{fluid:"md"},l.a.createElement("h4",null,l.a.createElement(u.a,{icon:A.g})," Work in progress!"),l.a.createElement("br",null),l.a.createElement(c.a,{to:"/",className:"btn btn-outline-primary flat-button"},l.a.createElement(u.a,{icon:A.h})," Return to Home"))),l.a.createElement(v.a,null,l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h3",null,"404:"),l.a.createElement("h4",null,"Not Found"),l.a.createElement("br",null),l.a.createElement(c.a,{to:"/",className:"btn btn-outline-primary flat-button"},l.a.createElement(u.a,{icon:A.h})," Return to Home")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(25),q=(a(424),a(425),Object(K.b)());i.a.render(l.a.createElement(v.b,{history:q},l.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[260,1,2]]]);
//# sourceMappingURL=main.b95498f3.chunk.js.map