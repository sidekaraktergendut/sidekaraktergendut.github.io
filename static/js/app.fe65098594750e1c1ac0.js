webpackJsonp([1],[,,,,,,function(t,e,a){"use strict";e.a={data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"bubble_chart",title:"Inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Progressive Web Novel"}},name:"App",mounted:function(){this.$Progress.finish()},created:function(){var t=this;this.$Progress.start(),this.$router.beforeEach(function(e,a,i){if(void 0!==e.meta.progress){var s=e.meta.progress;t.$Progress.parseMeta(s)}t.$Progress.start(),i()}),this.$router.afterEach(function(e,a){t.$Progress.finish()})}}},function(t,e,a){"use strict";e.a={data:function(){return{mission:[{title:"Empowering Original Indie Web Novel Authors",text:"bla bla bla"},{title:"Embrace Diverse Creativity",text:"bla bla bla author"},{title:"Exploring the Unknown",text:"bla bla bla bla bla wew"},{title:"Reinventing the Scene",text:"bla bla bla bla bla wew"},{title:"Knowledge Tank",text:"bla bla bl bla bla bla bla"}]}}}},function(t,e,a){"use strict";var i=a(35);e.a={data:function(){return{content:null,isActive:!1,chapter:!1,items:[{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"PROLOGUE",icon:"dashboard"},{title:"About",icon:"question_answer"}],right:null}},mounted:function(){var t=this;i.get("static/chapters/chapter.json").then(function(e){return t.content=e}).then(this.isActive=!0).then(this.$Progress.finish())},created:function(){this.$Progress.start()}}},,,,,,function(t,e,a){"use strict";e.a={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var t=this;a(59),this.$nextTick(function(){t.initParticleJS(t.color,t.particleOpacity,t.particlesNumber,t.shapeType,t.particleSize,t.linesColor,t.linesWidth,t.lineLinked,t.lineOpacity,t.linesDistance,t.moveSpeed,t.hoverEffect,t.hoverMode,t.clickEffect,t.clickMode)})},methods:{initParticleJS:function(t,e,a,i,s,r,n,o,l,c,v,d,p,u,h){particlesJS("particles-js",{particles:{number:{value:a,density:{enable:!0,value_area:800}},color:{value:t},shape:{type:i,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:e,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:s,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:o,distance:c,color:r,opacity:l,width:n},move:{enable:!0,speed:v,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:d,mode:p},onclick:{enable:u,mode:h},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(2),s=a(18),r=a(22),n=a(55),o=a.n(n),l=a(56),c=(a.n(l),a(57)),v=a(61),d=a.n(v);i.default.use(o.a),i.default.use(c.a);var p={color:"#bffaf3",failedColor:"#874b4b",thickness:"2px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"top",inverse:!1};i.default.use(d.a,p),i.default.config.productionTip=!1,new i.default({el:"#app",router:r.a,components:{App:s.a},template:"<App/>",data:{vsplash:!1}})},,,function(t,e,a){"use strict";function i(t){a(19)}var s=a(6),r=a(21),n=a(1),o=i,l=n(s.a,r.a,!1,o,"data-v-6a928408",null);e.a=l.exports},function(t,e){},,function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("v-toolbar",{attrs:{color:"deep-purple",app:"","clipped-left":t.clipped}},[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"shadowed",staticStyle:{transform:"translateY(10px)"},attrs:{src:"static/img/flat-icons/purple-hat.svg",alt:"John",height:"72px"}})]),t._v(" "),a("router-link",{attrs:{to:"/"}},[a("v-toolbar-title",{staticClass:"ml-2"},[t._v("Progressive Web Novel "),a("span",{staticClass:"body-2 ml-1",staticStyle:{opacity:"0.75","letter-spacing":"1.2px"}},[t._v("ALPHA")])])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"mr-2",attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[a("v-icon",[t._v("menu")])],1)],1),t._v(" "),a("vue-progress-bar"),t._v(" "),a("v-content",[a("router-view")],1),t._v(" "),a("v-navigation-drawer",{attrs:{temporary:"",right:t.right,fixed:"",app:"",width:"600"},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[a("v-list",{attrs:{dense:""}},[a("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"white--text",attrs:{hover:"",flat:"",color:"blue-grey darken-2",router:"",to:"/the-lab"}},[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-card-media",{attrs:{src:"static/img/flat-icons/sword-line.svg",height:"125px",contain:""}})],1),t._v(" "),a("v-flex",{attrs:{xs8:""}},[a("div",[a("div",{staticClass:"headline"},[t._v("e-litRPG")]),t._v(" "),a("div",[t._v("It's a RPG, a game! Yet it's a literature!"),a("br"),a("br"),t._v("The next generation of "),a("i",[t._v("Choose-Your-Own-Adventure")]),t._v(" stories... it's super fun!")])])])],1)],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"white--text",attrs:{flat:"",hover:"",color:"pink darken-1",to:"/dynamic-stories"}},[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs7:""}},[a("div",[a("div",{staticClass:"headline"},[t._v("Dynamic Stories")]),t._v(" "),a("div",[t._v("Whether it's non-linear novel with multiple endings, or code-based generated story elements, these novels will ensure your reading experience fresh and magical.")])])]),t._v(" "),a("v-flex",{attrs:{xs5:""}},[a("v-card-media",{attrs:{src:"static/img/flat-icons/unicorn-line.svg",height:"125px",contain:""}})],1)],1)],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"white--text",attrs:{flat:"",hover:"",color:"green accent-4",router:"",to:"/the-lab"}},[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-card-media",{attrs:{src:"static/img/flat-icons/green-potion-line.svg",height:"125px",contain:""}})],1),t._v(" "),a("v-flex",{attrs:{xs8:""}},[a("div",[a("div",{staticClass:"headline"},[t._v("The Lab")]),t._v(" "),a("div",[t._v("Join us in the journey of uncovering the real potentials of web novels, experimenting literature with the ever evolving nature of world wide web.")])])])],1)],1)],1)],1),t._v(" "),a("v-subheader",[t._v("Want to contribute?")]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"white--text",attrs:{flat:"",hover:"",color:"orange darken-1",router:"",to:"/the-lab"}},[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs7:""}},[a("div",[a("div",{staticClass:"headline"},[t._v("Support us on Patreon")]),t._v(" "),a("div",[t._v("Supports from you give us very warm welcome and motivations to create more awesome things!")])])]),t._v(" "),a("v-flex",{attrs:{xs5:""}},[a("v-card-media",{attrs:{src:"static/img/flat-icons/cookies-line.svg",height:"125px",contain:""}})],1)],1)],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"white--text",attrs:{flat:"",color:"grey darken-1"}},[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs5:""}},[a("v-card-media",{attrs:{src:"static/img/flat-icons/desktop-pencil-line.svg",height:"125px",contain:""}})],1),t._v(" "),a("v-flex",{attrs:{xs7:""}},[a("div",[a("div",{staticClass:"headline"},[t._v("Join Us! (closed)")]),t._v(" "),a("div",[t._v("While we're not looking for new team members during ALPHA phase, maybe in the future it will be different. Who knows?")])])])],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("v-footer",{attrs:{dark:"",height:"auto"}},[a("v-card",{staticClass:"deep-purple white--text text-xs-center",attrs:{flat:"",tile:""}},[a("v-btn",{staticClass:"donate",attrs:{color:"info",href:"https://www.paypal.me/sidekaraktergendut",target:"_blank"}},[a("i",{staticClass:"fab fa-paypal"}),t._v(" DONATE WITH PAYPAL")]),t._v(" "),a("v-card-text",{staticClass:"white--text pt-0"},[t._v("\n        Writing code in a cheap $140 chromebook ain't fun. Donations for project funding are welcomed for me to buy a decent machine for web development, plus an HTTPS website\n        hosting in the future."),a("br"),a("br"),t._v(" "),a("div",{staticClass:"credit"},[t._v("Icons made by "),a("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")]),t._v(" is licensed by "),a("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[t._v("CC 3.0 BY")])])]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",{staticClass:"white--text"},[t._v("\n        ©2018 — "),a("strong",[t._v("SideKarakterGendut")])])],1)],1)],1)},s=[],r={render:i,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";var i=a(2),s=a(23),r=a(24),n=a(27),o=a(29),l=a(30),c=a(33);i.default.use(s.a);var v=[{path:"/",component:r.a},{path:"/explore",component:n.a},{path:"/support-us",component:o.a},{path:"/the-lab",component:l.a},{path:"/dynamic-stories",component:c.a}],d=new s.a({routes:v,mode:"history",scrollBehavior:function(t,e,a){return{x:0,y:0}},meta:{progress:{func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]}}});e.a=d},,function(t,e,a){"use strict";function i(t){a(25)}var s=a(7),r=a(26),n=a(1),o=i,l=n(s.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e){},function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"route-anim"}},[a("div",[a("v-jumbotron",{staticClass:"jumbotronhome elevation-7"},[a("v-container",{staticStyle:{"max-width":"1300px"},attrs:{"fill-height":"",fixed:""}},[a("v-layout",{attrs:{"align-center":""}},[a("v-flex",[a("h3",{staticClass:"home-title display-3 mb-4 mt-5"},[a("span",{staticStyle:{opacity:"0.55","letter-spacing":"4px"}},[t._v("WELCOME TO")]),t._v(" PROG NOVEL")]),t._v(" "),a("p",{staticClass:"subheading ft-quicksand mx-5",staticStyle:{width:"46%"}},[t._v("Witness "),a("span",{staticClass:"transparent"},[t._v("the pure")]),t._v(" awesomeness."),a("span",{staticClass:"transparent"},[t._v(" Based on")]),t._v(" electronic literature "),a("span",{staticClass:"transparent"},[t._v("forms and the ever evolving nature of")]),t._v(" world wide web technologies\n                "),a("span",{staticClass:"transparent"},[t._v("...")]),t._v(" "),a("span",{staticClass:"home-title"},[t._v("PROGRESSIVE WEB NOVEL")]),t._v(" "),a("span",{staticClass:"transparent"},[t._v("brings the potentials of")]),t._v(" web novel "),a("span",{staticClass:"transparent"},[t._v("to the next level.")])]),t._v(" "),a("v-divider",{staticClass:"my-3 mt-3",staticStyle:{width:"66%",opacity:"0"}}),t._v(" "),a("div",{staticStyle:{"margin-left":"auto","margin-right":"auto",width:"300px"}},[a("span",{staticClass:"ft-quicksand",staticStyle:{"letter-spacing":"4px"}},[t._v("ready?")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{staticStyle:{"border-top":"2px #fff solid","border-radius":"0","border-bottom":"0"},attrs:{flat:"",router:"",to:"/the-lab"}},[t._v("EXPLORE PROG NOVELS"),a("i",{staticClass:"material-icons ml-1"},[t._v("chevron_right")])])],1)],1)],1)],1)],1),t._v(" "),a("v-container",{staticStyle:{"max-width":"924px"},attrs:{fixed:""}},[a("v-layout",{attrs:{"my-5":""}},[a("v-flex",{attrs:{xs3:""}},[a("v-card-media",{attrs:{src:"static/img/flat-icons/desktop-pencil-line.svg",height:"175px",contain:""}})],1),t._v(" "),a("v-flex",{attrs:{xs9:""}},[a("h2",{staticClass:"mb-3 text-mx-center",staticStyle:{"text-shadow":"2px 2px 2px purple","letter-spacing":"3.2px"}},[t._v("WHAT THE HELL IS THIS???")]),t._v(" "),a("p",{staticClass:"text-box mx-3 my-2 px-5 py-4 deep-purple darken-1 elevation-7"},[t._v("Progressive Web Novel, well, is web novel. But we don't share the same piloshopy with the mainstream Asian web novel (China, Japan, and Korean WN). Instead, prog novels \n              focus developing our stories based on electronic literature.\n          ")])])],1),t._v(" "),a("v-layout",{attrs:{"my-3":""}},[a("v-flex",{attrs:{xs9:""}},[a("h2",{staticClass:"mb-3 text-mx-center",staticStyle:{"text-align":"right","text-shadow":"2px 2px 2px purple","letter-spacing":"3.2px"}},[t._v("REINVENTING THE CRAFT")]),t._v(" "),a("p",{staticClass:"text-box mx-3 my-2 px-4 py-4 deep-purple darken-1 elevation-7"},[t._v('With different forms we hoped to create different style of works. The whole purpose of the progressive web novel \n              is to reinventing the craft, to dig the real potential of web novels, and find out the best of what this new digital form of literature can offers. Our philosophy regarding web novel is, we don\'t \n              forget the "web" in web novel. Instead, we '),a("i",[t._v("exploit")]),t._v(" it."),a("br"),a("br"),t._v("\n              Check out our Lab segment for the newest experiment!\n          ")])]),t._v(" "),a("v-flex",{attrs:{xs3:""}},[a("v-card-media",{staticClass:"mt-4",attrs:{src:"static/img/flat-icons/green-potion-line.svg",height:"175px",contain:""}})],1)],1)],1),t._v(" "),a("div",{staticClass:"mission elevation-7"},[a("h2",[t._v("OUR MISSION")]),t._v(" "),a("v-expansion-panel",{staticClass:"elevation-5",staticStyle:{margin:"20px auto","max-width":"900px"},attrs:{light:""}},t._l(t.mission,function(e){return a("v-expansion-panel-content",{key:e},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.title))]),t._v(" "),a("v-card",[a("v-card-text",[t._v(t._s(e.text)+"\n              ")])],1)],1)}))],1),t._v(" "),a("v-parallax",{staticStyle:{filter:"saturate(67%)"},attrs:{src:"static/img/images/cats.webp",height:"375",dark:""}},[a("v-layout",{staticClass:"team",staticStyle:{width:"100%"}},[a("v-flex",{attrs:{xs8:""}},[a("h2",[t._v("#OUR TEAM")]),t._v(" "),a("h3",[t._v("SideKarakterGendut")]),t._v(" "),a("h4",[t._v("Founder, Technomancer, Penomancer")])]),t._v(" "),a("v-flex",{staticStyle:{padding:"15px"},attrs:{xs4:""}},[a("div",{staticClass:"elevation-7",attrs:{id:"mc_embed_signup"}},[a("form",{staticClass:"validate",attrs:{action:"https://gilegati.us17.list-manage.com/subscribe/post?u=03ced0ad41d70dc781b7022a9&id=e2345e16d2",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[a("div",{attrs:{id:"mc_embed_signup_scroll"}},[a("h4",{staticClass:"email-header"},[t._v("Email Subscription")]),t._v(" "),a("hr",{staticClass:"email-line"}),t._v(" "),a("label",{staticClass:"email-text",attrs:{for:"mce-EMAIL"}},[t._v("Subscribe to our mailing list for news and progress")]),t._v(" "),a("input",{staticClass:"email",attrs:{type:"email",value:"",name:"EMAIL",id:"mce-EMAIL",placeholder:"email address",required:""}}),t._v(" "),a("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[a("input",{attrs:{type:"text",name:"b_03ced0ad41d70dc781b7022a9_e2345e16d2",tabindex:"-1",value:""}})]),t._v(" "),a("div",{staticClass:"clear"},[a("input",{staticClass:"button",attrs:{type:"submit",value:"SUBSCRIBE",name:"subscribe",id:"mc-embedded-subscribe"}})])])])])])],1)],1),t._v(" "),a("div",{staticClass:"team"},[a("v-layout",{staticStyle:{margin:"30px 0","margin-top":"100px"}},[a("v-flex",{attrs:{xs4:""}},[a("v-card-media",{staticClass:"mb-4",attrs:{src:"static/img/flat-icons/plug.svg",height:"175px",contain:""}}),t._v(" "),a("h2",{staticClass:"mb-3 text-mx-center h2-feature",staticStyle:{"text-shadow":"2px 2px 2px purple","letter-spacing":"3.2px","text-align":"center"}},[t._v("OFFLINE READING")]),t._v(" "),a("p",{staticClass:"text-box mx-4 my-2 px-4 py-4 deep-purple darken-1 elevation-7"},[t._v("Thanks to the service worker technology we can deliver to you an offline reading experience,\n            complete with option for add to homescreen, which makes our novel feels like a native app.\n          ")])],1),t._v(" "),a("v-flex",{attrs:{xs4:""}},[a("v-card-media",{staticClass:"mb-4",attrs:{src:"static/img/flat-icons/open-source.svg",height:"175px",contain:""}}),t._v(" "),a("h2",{staticClass:"mb-3 text-mx-center h2-feature",staticStyle:{"text-align":"center","text-shadow":"2px 2px 2px purple","letter-spacing":"3.2px"}},[t._v("OPEN SOURCE")]),t._v(" "),a("p",{staticClass:"text-box mx-4 my-2 px-4 py-4 deep-purple darken-1 elevation-7"},[t._v("We're sharing because we know, alone, not even in one hundred years we could conquer the vast potential of what the web novel can offers. \n            "),a("br"),t._v(" "),a("br"),a("strong",[t._v("SO STAY TUNED!")])])],1),t._v(" "),a("v-flex",{attrs:{xs4:""}},[a("v-card-media",{staticClass:"mb-4",attrs:{src:"static/img/flat-icons/open-source.svg",height:"175px",contain:""}}),t._v(" "),a("h2",{staticClass:"mb-3 text-mx-center h2-feature",staticStyle:{"text-align":"center","text-shadow":"2px 2px 2px purple","letter-spacing":"3.2px"}},[t._v("OPEN SOURCE")]),t._v(" "),a("p",{staticClass:"text-box mx-4 my-2 px-4 py-4 deep-purple darken-1 elevation-7"},[t._v("We're sharing because we know, alone, not even in one hundred years we could conquer the vast potential of what the web novel can offers. \n            "),a("br"),t._v(" "),a("br"),a("strong",[t._v("SO STAY TUNED!")])])],1)],1)],1),t._v(" "),a("div",{staticClass:"road-map-box"},[a("div",{staticClass:"road-map-hr"}),t._v(" "),a("v-container",{staticClass:"road-map-container",staticStyle:{"max-width":"900px",padding:"45px 150px"}},[a("h2",{staticClass:"road-map"},[t._v("# ROAD MAP")]),t._v(" "),a("h3",[t._v("First Demo (ETA 2019)")]),t._v(" "),a("p",{staticClass:"p-road-map"},[t._v("First demo using "),a("a",{attrs:{href:"https://vuejs.org/"}},[t._v("VueJS")]),t._v(" and free assets as a prototype for e-litRPG. In the mean time, we wait for "),a("a",{attrs:{href:"https://vuepress.vuejs.org/"}},[t._v("VuePress")]),t._v(", VueJS based static site \n            generator to mature enough \n            to start tinkering with the e-litRPG template.\n          ")]),t._v(" "),a("h3",[t._v("Closed Alpha (ETA 2019~2020)")]),t._v(" "),a("p",{staticClass:"p-road-map"},[t._v("Closed testing for contributors only.")]),t._v(" "),a("h3",[t._v("Open Beta (ETA ???)")]),t._v(" "),a("p",{staticClass:"p-road-map"},[t._v("Open for public testing and feedbacks.")]),t._v(" "),a("h3",[t._v("First Shipping (ETA ???)")]),t._v(" "),a("p",{staticClass:"p-road-map"},[t._v("Releasing VuePress template/theme for making a robust e-litRPG web novel, complete with easy CLI and markdown writing \n            right from your text editor.")]),t._v(" "),a("h3",[t._v("Documentation & Tutorials (ETA ???)")]),t._v(" "),a("p",{staticClass:"p-road-map"},[t._v("Launch of Prog Novel creator sub-domain for e-litRPG crash course.")]),t._v(" "),a("h3",[t._v("Move on to another awesome project...")]),t._v(" "),a("p",{staticClass:"p-road-map"},[t._v("Which is still far far far away from now.")])])],1)],1)])},s=[],r={render:i,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";var i=a(28),s=a(1),r=s(null,i.a,!1,null,null,null);e.a=r.exports},function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{staticClass:"mt-5"},[a("v-layout",[a("v-flex",{staticClass:"px-2",attrs:{xs8:""}},[a("div",[a("v-tabs",{attrs:{color:"cyan",dark:"","slider-color":"yellow"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._l(3,function(e){return a("v-tab",{key:e,attrs:{ripple:""}},[t._v("\r\n                        Item "+t._s(e)+"\r\n                    ")])}),t._v(" "),t._l(3,function(e){return a("v-tab-item",{key:e},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[t._v(t._s(t.text))])],1)],1)})],2),t._v(" "),a("div",{staticClass:"text-xs-center mt-3"},[a("v-btn",{nativeOn:{click:function(e){return t.next(e)}}},[t._v("next tab")])],1)],1)]),t._v(" "),a("v-flex",{staticClass:"px-2",attrs:{xs4:""}},[a("iframe",{staticClass:"elevation-5 mt-2",attrs:{src:"https://discordapp.com/widget?id=459452336050405376&theme=dark",width:"350",height:"500",allowtransparency:"true",frameborder:"0"}})])],1)],1)],1)},s=[],r={render:i,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";var i=a(1),s=i(null,null,!1,null,null,null);e.a=s.exports},function(t,e,a){"use strict";function i(t){a(31)}var s=a(32),r=a(1),n=i,o=r(null,s.a,!1,n,null,null);e.a=o.exports},function(t,e){},function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"route-anim"}},[a("div",[a("vue-particles",{staticStyle:{"z-index":"-1",height:"calc(100vh - 200px)"},attrs:{color:"#33de88",particleOpacity:.5,particlesNumber:30,shapeType:"circle",particleSize:4,linesColor:"#11de11",linesWidth:1,lineLinked:!0,lineOpacity:.2,linesDistance:150,moveSpeed:3,hoverEffect:!1,hoverMode:"grab",clickEffect:!1,clickMode:"push"}}),t._v(" "),a("div",{staticStyle:{"z-index":"1",top:"100px",left:"calc(50% - 500px)",position:"absolute","max-width":"1000px"}},[a("v-layout",{attrs:{"my-5":""}},[a("v-flex",{attrs:{xs3:""}},[a("v-card-media",{staticClass:"grayy mt-4",attrs:{src:"static/img/flat-icons/working.svg",height:"175px",contain:""}})],1),t._v(" "),a("v-flex",{attrs:{xs9:""}},[a("h2",{staticClass:"mb-3 text-mx-center",staticStyle:{"text-align":"center","text-shadow":"2px 2px 2px orange","letter-spacing":"3.2px"}},[t._v("SORRY... Duh")]),t._v(" "),a("p",{staticClass:"mx-3 my-2 px-5 py-4 orange darken-3 elevation-7"},[t._v("We are sorry but currently the project under development. We don't know when we're able to deliver the content, because the framework we're using\n                    isn't mature enough to be used for an open source project. And also, currently, we don't have enough resources to realize our vision. We'll come back later!\n                  ")])])],1)],1)],1)])},s=[],r={render:i,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";function i(t){a(34)}var s=a(8),r=a(54),n=a(1),o=i,l=n(s.a,r.a,!1,o,"data-v-0c897149",null);e.a=l.exports},function(t,e){},,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{attrs:{fixed:"",app:"",temporary:""},model:{value:t.chapter,callback:function(e){t.chapter=e},expression:"chapter"}},[a("v-toolbar",{attrs:{flat:""}},[a("v-list",{attrs:{color:"deep-purple lighten-1"}},[a("v-list-tile",[a("v-list-tile-title",{staticClass:"title"},[t._v("\n                Navigate Here\n            ")])],1)],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-list",{staticClass:"pt-0",attrs:{dense:""}},t._l(t.items,function(e){return a("v-list-tile",{key:e.title,on:{click:function(e){t.onward=!t.onward}}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}))],1),t._v(" "),a("div",{attrs:{id:"dyn-container"}},[a("a",{attrs:{href:"#"},on:{click:function(e){t.chapter=!t.chapter}}},[t._v("Test")]),t._v(" "),a("h1",{staticClass:"header",class:{headerFade:t.isActive,header:!t.isActive}},[t._v(t._s(t.content.data.novel))]),t._v(" "),a("div",{staticClass:"body",domProps:{innerHTML:t._s(t.content.data.content)}})])],1)},s=[],r={render:i,staticRenderFns:s};e.a=r},,function(t,e){},,function(t,e,a){"use strict";var i=a(14),s=a(60),r=a(1),n=r(i.a,s.a,!1,null,null,null);e.a=n.exports},,function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"particles-js",color:t.color,particleOpacity:t.particleOpacity,linesColor:t.linesColor,particlesNumber:t.particlesNumber,shapeType:t.shapeType,particleSize:t.particleSize,linesWidth:t.linesWidth,lineLinked:t.lineLinked,lineOpacity:t.lineOpacity,linesDistance:t.linesDistance,moveSpeed:t.moveSpeed,hoverEffect:t.hoverEffect,hoverMode:t.hoverMode,clickEffect:t.clickEffect,clickMode:t.clickMode}})},s=[],r={render:i,staticRenderFns:s};e.a=r}],[15]);
//# sourceMappingURL=app.fe65098594750e1c1ac0.js.map