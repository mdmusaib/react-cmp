(this["webpackJsonpreact-generic-components"]=this["webpackJsonpreact-generic-components"]||[]).push([[0],{100:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),_=a(7),l=a.n(_);a(88),a(66),a(89);var o=a(41),c=a(11),i=a(19),s=a(146),u=a(154),d=a(153),m=a(151),p=a(152),E=a(149),f=a(77),g={Country:[{name:"India",country_code:"IN"},{name:"Australia",country_code:"AU"},{name:"Indonesia",country_code:"ID"},{name:"New Zealand",country_code:"NZ"},{name:"Nigeria",country_code:"NG"},{name:"United States",country_code:"US"},{name:"Lebanon",country_code:"LB"}],City:[{name:"Vellore",country_code:"IN",state_code:"TN"},{name:"Bangalore",country_code:"IN",state_code:"KA"},{name:"Chennai",country_code:"IN",state_code:"TN"},{name:"Tiruchirappalli",country_code:"IN",state_code:"TN"},{name:"Austin city",country_code:"AU",state_code:"AUS"}],States:[{name:"Tamil Nadu",country_code:"IN",state_code:"TN"},{name:"Telangana",country_code:"IN",state_code:"TG"},{name:"Uttar Pradesh",country_code:"IN",state_code:"UP"},{name:"Karnataka",country_code:"IN",state_code:"KA"},{name:"Austria",country_code:"AU",state_code:"AUS"}]},b=Object(s.a)((function(e){return{button:{display:"block",marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:120}}}));function h(){var e=b(),t=r.a.useState([]),a=Object(i.a)(t,2),_=a[0],l=a[1],o=r.a.useState([]),c=Object(i.a)(o,2),s=c[0],h=c[1],D=r.a.useState([]),y=Object(i.a)(D,2),C=y[0],O=y[1],M=r.a.useState(g.Country),P=Object(i.a)(M,2),v=P[0],A=(P[1],r.a.useState([])),U=Object(i.a)(A,2),I=U[0],S=U[1],T=r.a.useState([]),B=Object(i.a)(T,2),W=B[0],L=B[1],R=r.a.useState([]),K=Object(i.a)(R,2);K[0],K[1];Object(n.useEffect)((function(){N(_)}),[_]);var N=function(e){h([]);var t=[];v.filter((function(a){e.filter((function(e){console.log(e,a),a.name===e&&t.push(a)}))}));console.log(t);var a=[];g.States.filter((function(e){t.filter((function(t){e.country_code===t.country_code&&a.push(e)}))}));a.length>0&&L([]),O([]),a.length>0&&S(a)};Object(n.useEffect)((function(){x(s)}),[s]);var x=function(e){var t=[],a=(I.filter((function(a){e.filter((function(e){a.name===e&&t.push(a)}))})),[]);g.City.filter((function(e){t.filter((function(t){e.state_code===t.state_code&&a.push(e)}))}));a.length>0&&L(a)};return r.a.createElement(E.a,{maxWidth:"md"},r.a.createElement(f.a,{container:!0,spacing:12},r.a.createElement(f.a,{item:!0,xs:6,sm:3,md:4},r.a.createElement(m.a,{className:e.formControl},r.a.createElement(u.a,{id:"demo-controlled-open-select-label"},"Country"),r.a.createElement(p.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",value:_,multiple:!0,onChange:function(e){e.target.value?l(e.target.value):(l([]),h([]),O([]),S([]),L([]))}},r.a.createElement(d.a,{value:[]},r.a.createElement("em",null,"None")),v.map((function(e,t){return r.a.createElement(d.a,{key:e.name,value:e.name},e.name)}))))),r.a.createElement(f.a,{item:!0,xs:6,sm:3,md:4},r.a.createElement(m.a,{className:e.formControl},r.a.createElement(u.a,{id:"demo-controlled-open-select-label"},"States"),r.a.createElement(p.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",value:s,multiple:!0,onChange:function(e){e.target.value?h(e.target.value):(h([]),O([]),L([]))}},r.a.createElement(d.a,{value:[]},r.a.createElement("em",null,"None")),I.map((function(e,t){return r.a.createElement(d.a,{key:e.name,value:e.name},e.name)}))))),r.a.createElement(f.a,{item:!0,xs:6,sm:3,md:4},r.a.createElement(m.a,{className:e.formControl},r.a.createElement(u.a,{id:"demo-controlled-open-select-label"},"City"),r.a.createElement(p.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",multiple:!0,value:C,onChange:function(e){O(e.target.value)}},r.a.createElement(d.a,{value:[]},r.a.createElement("em",null,"None")),W.map((function(e,t){return r.a.createElement(d.a,{key:e.name,value:e.name},e.name)})))))))}var D=a(51),y=a(52),C=a(53),O=a(57),M=a(55),P=[{agency:"Alpha",patientID:1,branch:"bangalore",detail1:"B+",detail2:"blood",detail3:"fever",detail4:"cold"},{agency:"Testing Alpha",patientID:2,branch:"bangalore",detail1:"testing",detail2:"lab",detail3:"report",detail4:"testlab"},{agency:"Testing Alpha",patientID:2,branch:"vellore",detail1:"testing",detail2:"lab",detail3:"report",detail4:"testlab"},{agency:"Testing Alpha",patientID:2,branch:"ranipet",detail1:"testing",detail2:"lab",detail3:"report",detail4:"testlab"},{agency:"beta Test",patientID:3,branch:"chennai",detail1:2008,detail2:2008,detail3:2008,detail4:2008},{agency:"Gamma Test",patientID:4,branch:"chennai",detail1:2008,detail2:2008,detail3:2008,detail4:2008},{agency:"Lab Report",patientID:5,branch:"Delhi",detail1:2008,detail2:2008,detail3:2008,detail4:2008}],v=a(71),A=a.n(v),U=(a(97),function(e){Object(O.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).setGroupBy=function(){n.setState({groupByCol:["branch","agency"]})},n.setGroupByAgency=function(){n.setState({groupByCol:["agency","branch"]})},n.state={sorted:[],page:0,pageSize:10,expanded:{},resized:[],filtered:[],groupByCol:[]},n.resetState=n.resetState.bind(Object(C.a)(n)),n}return Object(y.a)(a,[{key:"resetState",value:function(){this.setState({sorted:[],page:0,pageSize:10,expanded:{},resized:[],filtered:[],groupByCol:[]})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{onClick:this.resetState},"Reset State"),r.a.createElement("button",{onClick:this.setGroupBy},"GroupBy Branch"),r.a.createElement("button",{onClick:this.setGroupByAgency},"GroupBy Agency")),r.a.createElement(A.a,{data:P,columns:[{Header:"Agency",accessor:"agency",filterable:!0,Aggregated:function(e){return r.a.createElement("span",null,e.value)}},{Header:"Patient ID",id:"patientID",accessor:function(e){return e.patientID},width:170,PivotValue:function(e){return r.a.createElement("span",null,e.value)}},{Header:"branch",accessor:"branch",filterable:!0,Aggregated:function(e){return r.a.createElement("span",null,e.value)}},{Header:"Details",accessor:"detail1",Aggregated:function(e){return r.a.createElement("span",null,e.value)}},{Header:"Details",accessor:"detail2",Aggregated:function(e){return r.a.createElement("span",null,e.value)}},{Header:"Details",accessor:"detail3",Aggregated:function(e){return r.a.createElement("span",null,e.value)}}],pivotBy:this.state.groupByCol,defaultPageSize:10,className:"-striped -highlight",sorted:this.state.sorted,page:this.state.page,pageSize:this.state.pageSize,expanded:this.state.expanded,resized:this.state.resized,filtered:this.state.filtered,onSortedChange:function(t){return e.setState({sorted:t})},onPageChange:function(t){return e.setState({page:t})},onPageSizeChange:function(t,a){return e.setState({page:a,pageSize:t})},onExpandedChange:function(t){return e.setState({expanded:t})},onResizedChange:function(t){return e.setState({resized:t})},onFilteredChange:function(t){return e.setState({filtered:t})},defaultFilterMethod:function(e,t,a){var n=e.pivotId||e.id;return void 0===t[n]||-1!==String(t[n]).toLowerCase().indexOf(e.value.toLowerCase())}}),r.a.createElement("br",null))}}]),a}(n.Component)),I=a(76),S=a(75),T=a(73),B=Object(S.a)(),W=[{id:1,value:'{"field":"age","condition":"<=","value":"30"}',label:"Age<30",color:"#00B8D9",isFixed:!0},{id:2,value:'{"field":"gender","condition":"===","value":"male"}',label:"Male",color:"#0052CC"},{id:3,value:'{"field":"salary","condition":"<=","value":"20000"}',label:"Salary<20000",color:"#FF5630",isFixed:!0},{id:4,value:'{"field":"designation","condition":"===","value":"react"}',label:"React",color:"#FF5630",isFixed:!0},{id:5,value:'{"field":"experience","condition":"===","value":"2"}',label:"Experience=2yrs",color:"#FF5630",isFixed:!0}];function L(){var e=r.a.useState([]),t=Object(i.a)(e,2),a=t[0],_=t[1],l=r.a.useState([]),o=Object(i.a)(l,2),c=o[0],s=o[1],u=r.a.useState(!1),d=Object(i.a)(u,2),m=d[0],p=d[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("filteredVal")),t=[];null!==e&&(e.map((function(e){W.filter((function(a){a.id===e.id&&t.push(a)}))})),s(t))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{maxWidth:"sm"},r.a.createElement(f.a,{item:!0,xs:6,sm:3,md:12},r.a.createElement(I.a,{closeMenuOnSelect:!1,components:B,value:c,isClearable:!1,isMulti:!0,options:W,onChange:function(e){null===e&&(p(!0),s([])),s(e),_(e),!0===m&&p(!1),localStorage.setItem("filteredVal",JSON.stringify(e))}}))),r.a.createElement(f.a,{item:!0,xs:12,sm:12,md:12},r.a.createElement(T.a,{filter:a,reset:m})))}a(100);function R(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"inline-flex"}},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/select"},"Select")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/table"},"Table")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/profile"},"Profiles")))),r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/select"},r.a.createElement(h,null)),r.a.createElement(c.a,{path:"/table"},r.a.createElement(U,null)),r.a.createElement(c.a,{path:"/profile"},r.a.createElement(L,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},73:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Mohammed_Musaib_Documents_New_folder_custom_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(51),C_Users_Mohammed_Musaib_Documents_New_folder_custom_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(52),C_Users_Mohammed_Musaib_Documents_New_folder_custom_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(57),C_Users_Mohammed_Musaib_Documents_New_folder_custom_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(55),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(107),_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(108),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(44),_material_ui_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(77),UserCard=function(_Component){Object(C_Users_Mohammed_Musaib_Documents_New_folder_custom_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(UserCard,_Component);var _super=Object(C_Users_Mohammed_Musaib_Documents_New_folder_custom_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(UserCard);function UserCard(props){var _this;return Object(C_Users_Mohammed_Musaib_Documents_New_folder_custom_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,UserCard),_this=_super.call(this,props),_this.filterData=function(data){var filterArr=[],tempUserArray=_this.state.userData,filteredArr=[];data.map((function(e){filterArr.push(JSON.parse(e.value))})),filterArr&&filterArr.forEach((function(filter){tempUserArray.filter((function(user){eval('"'+user[filter.field]+'"'+filter.condition+'"'+filter.value+'"')&&filteredArr.push(user)})),tempUserArray=[],tempUserArray=filteredArr,filteredArr=[]})),_this.setState({userData:tempUserArray},(function(){console.log("filtered",_this.state.userData,tempUserArray)}))},_this.state={userData:[{name:"user1",age:"30",gender:"male",salary:"10000",designation:"react",experience:2},{name:"user2",age:"20",gender:"male",salary:"60000",designation:"engineer",experience:6},{name:"user3",age:"14",gender:"male",salary:"90000",designation:"admin"},{name:"user4",age:"35",gender:"male",salary:"100000",designation:"it",experience:2}]},_this}return Object(C_Users_Mohammed_Musaib_Documents_New_folder_custom_react_components_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(UserCard,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("filteredVal"));null!==e&&this.filterData(e)}},{key:"componentDidUpdate",value:function(e,t){this.props.filter&&this.props.filter.length>0&&this.props.filter!==e.filter&&(console.log("filterData",this.props.filter),this.filterData(this.props.filter)),this.props.reset&&e.reset!==this.props.reset&&this.setState({userData:[{name:"user1",age:"30",gender:"male",salary:"10000",designation:"react",experience:2},{name:"user2",age:"20",gender:"male",salary:"60000",designation:"engineer",experience:6},{name:"user3",age:"14",gender:"male",salary:"90000",designation:"admin"},{name:"user4",age:"35",gender:"male",salary:"100000",designation:"it",experience:2}]})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{container:!0,spacing:3},this.state.userData.map((function(e){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:12,sm:12,md:2,spacing:3,style:{margin:"40px"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__.a,{style:{maxWidth:"275px"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__.a,{variant:"h5",component:"h3"},e.name),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__.a,{color:"textSecondary"},"Designation ",e.designation),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__.a,{variant:"body2",component:"p"},"Gender ",e.gender),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__.a,{variant:"body2",component:"p"},"Salary ",e.salary),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__.a,{variant:"body2",component:"p"},"Age ",e.age))))}))))}}]),UserCard}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=UserCard},83:function(e,t,a){e.exports=a(104)},88:function(e,t,a){},89:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.3d5d81c0.chunk.js.map