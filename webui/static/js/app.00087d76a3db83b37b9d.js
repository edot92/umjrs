webpackJsonp([1],{111:function(t,a){},1118:function(t,a,e){e(117);var s=e(1)(e(80),e(1133),null,null);t.exports=s.exports},1119:function(t,a,e){e(115);var s=e(1)(e(82),e(1131),null,null);t.exports=s.exports},112:function(t,a){},1120:function(t,a,e){e(118);var s=e(1)(e(83),e(1134),null,null);t.exports=s.exports},1121:function(t,a,e){e(112);var s=e(1)(e(84),e(1128),null,null);t.exports=s.exports},1122:function(t,a,e){e(116);var s=e(1)(e(85),e(1132),null,null);t.exports=s.exports},1123:function(t,a,e){e(111);var s=e(1)(e(86),e(1127),null,null);t.exports=s.exports},1124:function(t,a,e){e(113);var s=e(1)(e(87),e(1129),null,null);t.exports=s.exports},1125:function(t,a,e){e(119);var s=e(1)(e(88),e(1135),null,null);t.exports=s.exports},1126:function(t,a,e){e(114);var s=e(1)(e(89),e(1130),null,null);t.exports=s.exports},1127:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content",attrs:{id:"realtime"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-sm-5",attrs:{for:"pwd"}},[t._v("Temperature:")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.Temperature,expression:"Temperature"}],staticClass:"form-control",attrs:{type:"text",placeholder:"???"},domProps:{value:t.Temperature},on:{input:function(a){a.target.composing||(t.Temperature=a.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-sm-5",attrs:{for:"pwd"}},[t._v("Humidity:")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.Humidity,expression:"Humidity"}],staticClass:"form-control",attrs:{type:"text",placeholder:"???"},domProps:{value:t.Humidity},on:{input:function(a){a.target.composing||(t.Humidity=a.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-sm-5",attrs:{for:"pwd"}},[t._v(" Tegangan:")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.Loadvoltage,expression:"Loadvoltage"}],staticClass:"form-control",attrs:{type:"text",placeholder:"???"},domProps:{value:t.Loadvoltage},on:{input:function(a){a.target.composing||(t.Loadvoltage=a.target.value)}}})])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-sm-5",attrs:{for:"pwd"}},[t._v("Arus:")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.Current,expression:"Current"}],staticClass:"form-control",attrs:{type:"text",placeholder:"???"},domProps:{value:t.Current},on:{input:function(a){a.target.composing||(t.Current=a.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-sm-5",attrs:{for:"pwd"}},[t._v("Daya:")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.Daya,expression:"Daya"}],staticClass:"form-control",attrs:{type:"text",placeholder:"???"},domProps:{value:t.Daya},on:{input:function(a){a.target.composing||(t.Daya=a.target.value)}}})])])])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-sm-5",attrs:{for:"email"}},[t._v("Pilihan Grafik:")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.dropdownRealtime,expression:"dropdownRealtime"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.dropdownRealtime=a.target.multiple?e:e[0]}}},t._l(t.dropdownRealtimeOption,function(a){return e("option",{domProps:{value:a.value}},[t._v("\n    "+t._s(a.text)+"\n  ")])}))])])]),t._v(" "),e("div",{staticClass:"col-md-3"},[e("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button"},on:{click:function(a){a.preventDefault(),t.showChart()}}},[e("i",{staticClass:"fa fa-sign-in"},[t._v("Tampilkan")])])])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row"},[[e("vue-highcharts",{ref:"lineCharts",attrs:{options:t.options}}),t._v(" "),e("button",{on:{click:t.load}},[t._v("load")])]],2)])},staticRenderFns:[]}},1128:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"sidebar-menu"},[e("li",{staticClass:"header"},[t._v("MENU")]),t._v(" "),e("li",{staticClass:"active pageLink",on:{click:t.toggleMenu}},[e("router-link",{attrs:{to:"/pendaftaranpasien"}},[e("i",{staticClass:"fa fa-pencil-square-o"}),t._v(" "),e("span",{staticClass:"page"},[t._v("Pendaftaran Pasien")])])],1),t._v(" "),e("li",{staticClass:"active pageLink",on:{click:t.toggleMenu}},[e("router-link",{attrs:{to:"/riwayatpasien"}},[e("i",{staticClass:"fa fa-pencil-square-o"}),t._v(" "),e("span",{staticClass:"page"},[t._v("Riwayat Pasien")])])],1),t._v(" "),e("li",{staticClass:"active pageLink",on:{click:t.toggleMenu}},[e("router-link",{attrs:{to:"/realtimesensor"}},[e("i",{staticClass:"fa fa-pencil-square-o"}),t._v(" "),e("span",{staticClass:"page"},[t._v("Realtime Sensor")])])],1)])},staticRenderFns:[]}},1129:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content",attrs:{id:"pendaftaranpasien"}},[e("form",{staticClass:"form-horizontal",attrs:{action:"",method:"#",role:"form"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-sm-2",attrs:{for:"pwd"}},[t._v("nama_lengkap ")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.biodata_pasien.nama_lengkap,expression:"biodata_pasien.nama_lengkap"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.biodata_pasien.nama_lengkap},on:{input:function(a){a.target.composing||(t.biodata_pasien.nama_lengkap=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-sm-2",attrs:{for:"pwd"}},[t._v("jenis_kelamin ")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.biodata_pasien.jenis_kelamin,expression:"biodata_pasien.jenis_kelamin"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.biodata_pasien.jenis_kelamin},on:{input:function(a){a.target.composing||(t.biodata_pasien.jenis_kelamin=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-sm-2",attrs:{for:"pwd"}},[t._v("tanggal_lahir ")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.biodata_pasien.tanggal_lahir,expression:"biodata_pasien.tanggal_lahir"}],staticClass:"form-control",attrs:{type:"text",id:"demo",required:""},domProps:{value:t.biodata_pasien.tanggal_lahir},on:{input:function(a){a.target.composing||(t.biodata_pasien.tanggal_lahir=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-sm-2",attrs:{for:"pwd"}},[t._v("no_bpjs ")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.biodata_pasien.no_bpjs,expression:"biodata_pasien.no_bpjs"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.biodata_pasien.no_bpjs},on:{input:function(a){a.target.composing||(t.biodata_pasien.no_bpjs=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"col-sm-10 col-sm-offset-2"},[e("button",{staticClass:"btn btn-primary btn-block",on:{click:function(a){a.preventDefault(),t.buatpendaftarbaru()}}},[t._v("Tampilkan Data")])])])])])},staticRenderFns:[]}},113:function(t,a){},1130:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content",attrs:{id:"riwayatpasien"}},[e("form",{staticClass:"form-horizontal",attrs:{action:"",method:"#"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-sm-2",attrs:{for:"pwd"}},[t._v("no_bpjs ")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.param_riwayat.no_bpjs,expression:"param_riwayat.no_bpjs"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.param_riwayat.no_bpjs},on:{input:function(a){a.target.composing||(t.param_riwayat.no_bpjs=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"col-sm-10 col-sm-offset-2"},[e("button",{staticClass:"btn btn-primary btn-block",on:{click:function(a){a.preventDefault(),t.showHistoryByDate()}}},[t._v("Tampilkan Data")])])])])])},staticRenderFns:[]}},1131:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:["wrapper",t.classes]},[t._m(0),t._v(" "),e("sidebar",{attrs:{"display-name":t.demo.displayName,"picture-url":t.demo.avatar}}),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("section",{staticClass:"content-header"},[e("h1",[t._v("\n          "+t._s(t.$route.name.toUpperCase())+"\n          "),e("small",[t._v(t._s(t.$route.meta.description))])]),t._v(" "),e("ol",{staticClass:"breadcrumb"},[t._m(1),t._v(" "),e("li",{staticClass:"active"},[t._v(t._s(t.$route.name.toUpperCase()))])])]),t._v(" "),e("router-view")],1),t._v(" "),e("footer",{staticClass:"main-footer"},[e("strong",[t._v("Copyright © "+t._s(t.year)+"\n        "),e("a",{attrs:{href:"#"}},[t._v("Iwan")]),t._v(".")]),t._v(" .\n    ")])],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"main-header"},[e("span",{staticClass:"logo-mini"},[e("a",{attrs:{href:"/"}},[e("img",{staticClass:"img-responsive center-block logo",attrs:{src:"/static/img/ftumj.png",alt:"Logo"}})])]),t._v(" "),e("nav",{staticClass:"navbar navbar-static-top",attrs:{role:"navigation"}},[e("a",{staticClass:"sidebar-toggle",attrs:{href:"javascript:;","data-toggle":"offcanvas",role:"button"}},[e("span",{staticClass:"sr-only"},[t._v("Toggle navigation")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"fa fa-home"}),t._v("Home")])])}]}},1132:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content",attrs:{id:"history"}},[e("form",{staticClass:"form-horizontal",attrs:{action:"",method:"#",role:"form"}},[t._m(0),t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"col-sm-10 col-sm-offset-2"},[e("button",{staticClass:"btn btn-primary btn-block",on:{click:function(a){a.preventDefault(),t.showHistoryByDate()}}},[t._v("Tampilkan Data")])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"table-responsive"},[e("div",{attrs:{id:"people"}},[e("v-client-table",{attrs:{data:t.tableData,columns:t.columns,options:t.options}})],1)])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-sm-2",attrs:{for:"pwd"}},[t._v("Range Waktu:")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{staticClass:"form-control",attrs:{type:"text",id:"demo",placeholder:"Pilih Waktu"}})])])}]}},1133:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container container-table"},[e("div",{staticClass:"row vertical-10p"},[e("div",{staticClass:"container"},[e("img",{staticClass:"center-block logo",attrs:{src:"/static/img/logo.png"}}),t._v(" "),e("div",{staticClass:"text-center col-sm-6 col-sm-offset-3"},[e("h1",[t._v("You are lost.")]),t._v(" "),e("h4",[t._v("This page doesn't exist.")]),t._v(" "),e("router-link",{attrs:{to:"/"}},[t._v("Take me home.")])],1)])])])},staticRenderFns:[]}},1134:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("aside",{staticClass:"main-sidebar"},[e("section",{staticClass:"sidebar"},[e("sidebar-menu")],1)])},staticRenderFns:[]}},1135:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content",attrs:{id:"Realtimesensor"}},[t._m(0),t._v(" "),e("br",{staticStyle:{"border-style":"2px solid gray"}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-sm-5",attrs:{for:"pwd"}},[t._v("Temperature:")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.realtime_sensor.temperature,expression:"realtime_sensor.temperature"}],staticClass:"form-control",attrs:{disabled:"",type:"text",placeholder:"???"},domProps:{value:t.realtime_sensor.temperature},on:{input:function(a){a.target.composing||(t.realtime_sensor.temperature=a.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-sm-5",attrs:{for:"pwd"}},[t._v("BPM :")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.realtime_sensor.bpm,expression:"realtime_sensor.bpm"}],staticClass:"form-control",attrs:{disabled:"",type:"text",placeholder:"???"},domProps:{value:t.realtime_sensor.bpm},on:{input:function(a){a.target.composing||(t.realtime_sensor.bpm=a.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-sm-5",attrs:{for:"pwd"}},[t._v("Last Update :")]),t._v(" "),e("div",{staticClass:"col-sm-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.realtime_sensor.last_update,expression:"realtime_sensor.last_update"}],staticClass:"form-control",attrs:{disabled:"",type:"text",placeholder:"???"},domProps:{value:t.realtime_sensor.last_update},on:{input:function(a){a.target.composing||(t.realtime_sensor.last_update=a.target.value)}}})])])])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-sm-5",attrs:{for:"pwd"}},[t._v("Nama Pasien:")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("select",{staticClass:"form-control",attrs:{name:""}},[e("option",{attrs:{value:""}},[t._v("1")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("2")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("3")])])])])]),t._v(" "),e("div",{staticClass:"col-md-4"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("\n            START RECORD\n          ")]),t._v(" "),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v("\n            STOP RECORD\n          ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{attrs:{id:"gauge1"}})]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{attrs:{id:"gauge2"}})])])}]}},1136:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},114:function(t,a){},115:function(t,a){},116:function(t,a){},117:function(t,a){},118:function(t,a){},119:function(t,a){},43:function(t,a,e){"use strict";function s(t){return i.href=t,i.hostname}function n(t){return t.length}function o(t){return new Date(t).toDateString()}function r(t,a){return 1===t?t+a:t+a+"s"}a.b=s,a.a=n,a.c=o,a.d=r;var i=document.createElement("a")},44:function(t,a,e){"use strict";var s=e(1119),n=e.n(s),o=e(1118),r=e.n(o),i=e(1122),l=e.n(i),c=e(1123),d=e.n(c),u=e(1124),m=e.n(u),p=e(1126),v=e.n(p),f=e(1125),_=e.n(f),g=[{path:"/",component:n.a,children:[{path:"pendaftaranpasien",component:m.a,name:"Pendaftaranpasien",meta:{description:""}},{path:"riwayatpasien",component:v.a,name:"Riwayatpasien",meta:{description:""}},{path:"realtimesensor",component:_.a,name:"Realtimesensor",meta:{description:""}},{path:"history",component:l.a,name:"History",meta:{description:"Halaman History"}},{path:"realtime",component:d.a,name:"Realtime",meta:{description:"Halaman Realtime"}}]},{path:"*",component:r.a}];a.a=g},45:function(t,a,e){"use strict";var s=e(3),n=e(40),o=e(79),r=e(77),i=e(78);s.default.use(n.a),a.a=new n.a.Store({state:o.a,actions:r.a,mutations:i.a})},47:function(t,a,e){var s=e(1)(e(81),e(1136),null,null);t.exports=s.exports},75:function(t,a,e){"use strict";a.a={serverURI:"",fixedLayout:!1,hideLogoOnMobile:!1}},76:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(3),n=e(48),o=e(42),r=e.n(o),i=e(46),l=e.n(i),c=e(50),d=(e.n(c),e(44)),u=e(45),m=e(43),p=e(47),v=e.n(p),f=e(49);e.n(f);r.a.defaults.baseURL="http://localhost:9000/v1",s.default.use(l.a,r.a),s.default.use(f.ClientTable),s.default.filter("count",m.a),s.default.filter("domain",m.b),s.default.filter("prettyDate",m.c),s.default.filter("pluralize",m.d),s.default.use(n.a);var _=new n.a({routes:d.a,mode:"history",scrollBehavior:function(t,a,e){return e||{x:0,y:0}}});if(_.beforeEach(function(t,a,e){t.auth&&"null"===t.router.app.$store.state.token?(window.console.log("Not authenticated"),e({path:"/login",query:{redirect:t.fullPath}})):"/"===t.path?e({path:"pendaftaranpasien",query:{redirect:t.fullPath}}):e()}),e.i(c.sync)(u.a,_),new s.default({el:"#root",router:_,store:u.a,render:function(t){return t(v.a)}}),window.localStorage){var g=window.localStorage.getItem("user")||"null",h=JSON.parse(g);h&&u.a.state.user!==h&&(u.a.commit("SET_USER",h),u.a.commit("SET_TOKEN",window.localStorage.getItem("token")))}},77:function(t,a,e){"use strict";a.a={}},78:function(t,a,e){"use strict";a.a={TOGGLE_LOADING:function(t){t.callingAPI=!t.callingAPI},TOGGLE_SEARCHING:function(t){t.searching=""===t.searching?"loading":""},SET_USER:function(t,a){t.user=a},SET_TOKEN:function(t,a){t.token=a}}},79:function(t,a,e){"use strict";a.a={callingAPI:!1,searching:"",serverURI:"http://10.110.1.136:8080",user:null,token:null,userInfo:{messages:[{1:"test",2:"test"}],notifications:[],tasks:[]}}},80:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"NotFound"}},81:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"App",data:function(){return{section:"Head"}},methods:{logout:function(){this.$store.commit("SET_USER",null),this.$store.commit("SET_TOKEN",null),window.localStorage&&(window.localStorage.setItem("user",null),window.localStorage.setItem("token",null)),this.$router.push("/login")}}}},82:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(91),n=e.n(s),o=e(120),r=e.n(o),i=e(40),l=e(75),c=e(1120),d=e.n(c),u=e(1091);e.n(u);a.default={name:"Dash",components:{Sidebar:d.a},data:function(){return{year:(new Date).getFullYear(),classes:{fixed_layout:l.a.fixedLayout,hide_logo:l.a.hideLogoOnMobile},error:""}},computed:n()({},e.i(i.b)(["userInfo"]),{demo:function(){return{displayName:r.a.name.findName(),avatar:r.a.image.avatar(),email:r.a.internet.email(),randomCard:r.a.helpers.createCard()}}}),methods:{changeloading:function(){this.$store.commit("TOGGLE_SEARCHING")}}}},83:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(1121),n=e.n(s);a.default={name:"Sidebar",props:["displayName","pictureUrl"],components:{SidebarMenu:n.a}}},84:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"SidebarName",methods:{toggleMenu:function(t){var a=document.querySelector("li.pageLink.active");a&&a.classList.remove("active"),t.toElement.parentElement.className="pageLink active"}}}},85:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={startdate:"",enddate:""};a.default={mounted:function(){var t=this;t.axios({method:"get",url:"/device/historylast"}).then(function(a){for(var e=0;e<a.data.data.length;e++)a.data.data[e].id=e+1,a.data.data[e].created_at=moment(moment(a.data.data[e].created_at).toString()).format("DD-MM-YYYY HH:mm:ss");t.tableData=a.data.data}).catch(function(t){console.log(t)}),$("#demo").daterangepicker({locale:{format:"DD-MM-YYYY HH:mm:ss"},dateLimit:{minutes:43200},timePicker:!0,timePicker24Hour:!0,timePickerSeconds:!0,startDate:"11-06-2017",endDate:"12-06-2017"},function(t,a,e){s.startdate=t.format("YYYY-MM-DD HH:mm:ss.SSS"),s.enddate=a.format("YYYY-MM-DD HH:mm:ss.SSS")})},data:function(){return{columns:["id","temperature","humidity","current","shuntvoltage","busvoltage","loadvoltage","created_at"],tableData:[],options:{}}},methods:{showHistoryByDate:function(){var t=this;t.axios({method:"post",url:"/device/historybydaterange",data:{startdate:s.startdate,enddate:s.enddate}}).then(function(a){for(var e=0;e<a.data.data.length;e++)a.data.data[e].id=e+1,a.data.data[e].created_at=moment(moment(a.data.data[e].created_at).toString()).format("DD-MM-YYYY HH:mm:ss");t.tableData=a.data.data}).catch(function(t){console.log(t)})}}},document.addEventListener("DOMContentLoaded",function(){})},86:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(1224),n=e.n(s);a.default={components:{VueHighcharts:n.a},mounted:function(){var t=this;setInterval(function(){t.axios({method:"get",url:"/device/realtimebox"}).then(function(a){t.Temperature=a.data.data.temperature,t.Humidity=a.data.data.humidity,a.data.data.current<0&&(a.data.data.current=-1*a.data.data.current),t.Current=a.data.data.current,t.Shuntvoltage=a.data.data.shuntvoltage,t.Busvoltage=a.data.data.busvoltage,t.Loadvoltage=a.data.data.loadvoltage,t.Daya=parseFloat(t.Current)*parseFloat(t.Loadvoltage)}).catch(function(t){console.error(t)})},2e3)},data:function(){return{Daya:0,Temperature:4.42,Humidity:4.42,Current:1,Shuntvoltage:4.42,Busvoltage:4.42,Loadvoltage:4.42,dropdownRealtime:"Tegangan",dropdownRealtimeOption:[{text:"Tegangan",value:"Tegangan"},{text:"Arus",value:"Arus"},{text:"Kelembapan",value:"Kelembapan"}],options:{chart:{type:"spline"},title:{text:"Tittle ??"},xAxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},yAxis:{title:{text:"Temperature"},labels:{formatter:function(){return this.value+"°"}}},tooltip:{crosshairs:!0,shared:!0},credits:{enabled:!1},plotOptions:{spline:{marker:{radius:4,lineColor:"#666666",lineWidth:1}}},series:[]}}},methods:{load:function(){},showChart:function(){var t={jenis_chart:this.dropdownRealtime},a=this;this.axios({method:"post",url:"/device/chart",data:t}).then(function(t){for(var e=[],s=[],n=0;n<t.data.lenght;n++)e[n]=t.data[n].time,s[n]=t.data[n].value;var o=a.$refs.lineCharts;o.delegateMethod("showLoading","Loading...");var r={name:a.dropdownRealtime,marker:{symbol:"square"},data:s};o.addSeries(r),o.hideLoading()}).catch(function(t){console.log(t)})}}}},87:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{biodata_pasien:{nama_lengkap:"",jenis_kelamin:"",tanggal_lahir:"",no_bpjs:""}}},mounted:function(){$("#demo").daterangepicker({locale:{format:"DD-MM-YYYY"},singleDatePicker:!0},function(t,a,e){console.log(t.format("YYYY-MM-DD"))})},methods:{buatpendaftarbaru:function(){""!==this.biodata_pasien.nama_lengkap&&""!==this.biodata_pasien.jenis_kelamin&&""!==this.biodata_pasien.tanggal_lahir&&""!==this.biodata_pasien.no_bpjs||swal("info","harap isi biodata secara lengkap","error");var t=this;t.axios({method:"post",url:"/pasien/pendaftaranbaru",data:t.biodata_pasien}).then(function(t){swal("info","Pendaftaran baru berhasil","success")}).catch(function(t){swal("info","server error","error"),console.log(t)})}}}},88:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{gauge1:"",realtime_sensor:{namapasien:"",temperature:"",bpm:"",last_update:""}}},mounted:function(){this.realtimelast(),setInterval(this.realtimelast,1e3),document.addEventListener("DOMContentLoaded",function(){this.gauge1=$("#gauge1").jqxGauge({ranges:[{startValue:0,endValue:55,style:{fill:"#4bb648",stroke:"#4bb648"},endWidth:5,startWidth:1},{startValue:55,endValue:110,style:{fill:"#fbd109",stroke:"#fbd109"},endWidth:10,startWidth:5},{startValue:110,endValue:165,style:{fill:"#ff8000",stroke:"#ff8000"},endWidth:13,startWidth:10},{startValue:165,endValue:220,style:{fill:"#e02629",stroke:"#e02629"},endWidth:16,startWidth:13}],ticksMinor:{interval:5,size:"5%"},ticksMajor:{interval:10,size:"9%"},value:0,colorScheme:"scheme05",animationDuration:1200,caption:{value:"Temperature",position:"bottom",offset:[0,10],visible:!0}}),this.gauge1=$("#gauge2").jqxGauge({ranges:[{startValue:0,endValue:55,style:{fill:"#4bb648",stroke:"#4bb648"},endWidth:5,startWidth:1},{startValue:55,endValue:110,style:{fill:"#fbd109",stroke:"#fbd109"},endWidth:10,startWidth:5},{startValue:110,endValue:165,style:{fill:"#ff8000",stroke:"#ff8000"},endWidth:13,startWidth:10},{startValue:165,endValue:500,style:{fill:"#e02629",stroke:"#e02629"},endWidth:16,startWidth:13}],ticksMinor:{interval:5,size:"5%"},ticksMajor:{interval:10,size:"9%"},value:0,colorScheme:"scheme02",animationDuration:1200,caption:{value:"BPM",position:"bottom",offset:[0,10],visible:!0},max:400})})},methods:{realtimelast:function(){var t=this;t.axios({method:"get",url:"/device/realtimelast"}).then(function(a){$("#gauge1").jqxGauge({value:parseInt(a.data.data.temperature,10)}),$("#gauge2").jqxGauge({value:parseInt(a.data.data.bpm,10)}),t.realtime_sensor.temperature=a.data.data.temperature,t.realtime_sensor.bpm=a.data.data.bpm,t.realtime_sensor.last_update=a.data.data.created_at}).catch(function(t){swal("info","server error","error"),console.log(t)})}}}},89:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{param_riwayat:{no_bpjs:""}}}}}},[76]);
//# sourceMappingURL=app.00087d76a3db83b37b9d.js.map