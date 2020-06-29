(this["webpackJsonpmoodtracker-front"]=this["webpackJsonpmoodtracker-front"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/Angry.c094ca91.svg"},101:function(e,t,a){e.exports=a.p+"static/media/Fear.d7c09086.svg"},102:function(e,t,a){e.exports=a.p+"static/media/Happy.b1e5e777.svg"},103:function(e,t,a){e.exports=a.p+"static/media/Neutral.6fa11d01.svg"},104:function(e,t,a){e.exports=a.p+"static/media/Sad.b6957d1c.svg"},133:function(e,t,a){e.exports=a(169)},138:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"Angry",(function(){return ke.a})),a.d(n,"Fear",(function(){return Ce.a})),a.d(n,"Happy",(function(){return Fe.a})),a.d(n,"Neutral",(function(){return Ie.a})),a.d(n,"Sad",(function(){return Me.a}));var r=a(0),c=a.n(r),i=a(11),o=a.n(i),l=(a(138),a(30)),s=a(46),u=a(16),m=a(22),d=a.n(m),f=a(40),p=a(19),g=Object(p.b)({name:"ui",initialState:{isLoading:!1},reducers:{loadingUi:function(e){e.isLoading=!0},stopLoadingUi:function(e){e.isLoading=!1}}}),h=g.actions,E=h.loadingUi,b=h.stopLoadingUi,y=g.reducer,v={entries:[],currentEntry:{},selectedMonth:new Date},N=Object(p.b)({name:"entries",initialState:v,reducers:{addNewEntry:function(e,t){e.entries.push(t.payload),e.currentEntry=t.payload},fetchedAllEntries:function(e,t){e.entries=t.payload},emptyEntries:function(e){return v},selectCurrentEntry:function(e,t){e.currentEntry=t.payload},deleteCurrentEntryFromStore:function(e){e.entries=e.entries.filter((function(t){return t.entryId!==e.currentEntry.entryId}))},selectMonth:function(e,t){e.selectedMonth=t.payload}}}),O=N.actions,j=O.addNewEntry,w=O.fetchedAllEntries,k=O.emptyEntries,x=O.selectCurrentEntry,C=(O.updateEntry,O.deleteCurrentEntryFromStore),S=O.selectMonth,F=N.reducer,L=a(21),I=a.n(L),P=a(74),M=a(107),A=a(81),D=a(108),T=a.n(D),W=a(13),U={isLogged:!1,token:null},z=Object(p.b)({name:"auth",initialState:U,reducers:{login:function(e,t){e.isLogged=!0,e.token=t.payload},logout:function(e){return U}}}),B=z.actions,_=B.login,H=B.logout,J=z.reducer,V=Object(p.b)({name:"feelings",initialState:{primaryFeelings:[]},reducers:{fetchedPrimaryFeelings:function(e,t){e.primaryFeelings=t.payload}}}),K=V.actions.fetchedPrimaryFeelings,Y=V.reducer,$=Object(W.c)({auth:J,ui:y,entries:F,feelings:Y}),q=a(109),G=a.n(q),Q=Object(p.b)({name:"user",initialState:{firstName:"",lastName:""},reducers:{fetchedUserInfo:function(e,t){t.payload}}}),R=(Q.actions.fetchedUserInfo,Q.reducer,"https://europe-west3-mood-tracker-c5cbe.cloudfunctions.net/api"),X=function(){return function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E()),e.prev=1,e.next=4,I.a.get("".concat(R,"/feelings/primary")).then((function(e){return e.data}));case 4:a=e.sent,t(K(a)),t(b()),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(1),t(b()),e.abrupt("return",Promise.reject(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},Z=function(){return function(e){e(k()),e(H()),delete I.a.defaults.headers.Authorization}},ee={key:"root",storage:T.a},te=Object(A.a)(ee,$),ae=[].concat(Object(P.a)(Object(p.c)({serializableCheck:!1})),[M.logger]),ne=Object(p.a)({reducer:te,middleware:ae}),re=Object(A.b)(ne,null,(function(){var e=ne.getState().auth.token;e&&(1e3*G()(e).exp<Date.now()?ne.dispatch(Z()):(I.a.defaults.headers.Authorization=e,ne.dispatch(ie()),ne.dispatch(X())))})),ce=ne,ie=function(){return function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E()),e.prev=1,e.next=4,I.a.get("".concat(R,"/entries")).then((function(e){return e.data}));case 4:a=e.sent,t(w(a)),t(b()),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(1),t(b()),e.abrupt("return",Promise.reject(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},oe=a(14),le=a(17),se=a.n(le),ue=a(195),me=a(200),de=a(170),fe=a(209),pe=a(201),ge=a(111),he=a.n(ge),Ee=a(199),be=a(110),ye=a.n(be),ve=a(68),Ne=a.n(ve),Oe=a(72),je=a.n(Oe),we=a(100),ke=a.n(we),xe=a(101),Ce=a.n(xe),Se=a(102),Fe=a.n(Se),Le=a(103),Ie=a.n(Le),Pe=a(104),Me=a.n(Pe),Ae=Object(oe.b)((function(e){return{isLoading:e.ui.isLoading,primaryFeelings:e.feelings.primaryFeelings,currentEntry:e.entries.currentEntry,entries:e.entries.entries}}),{postNewEntry:function(e,t){return function(){var a=Object(f.a)(d.a.mark((function a(n){var r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(E()),a.prev=1,a.next=4,I.a.post("".concat(R,"/entry"),e).then((function(e){return e.data}));case 4:r=ce.getState().feelings.primaryFeelings.find((function(t){return t.feelingId===e.feelingId})),e.feeling=r,t&&n(C()),n(j(e)),n(b()),a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(1),n(b()),a.abrupt("return",Promise.reject(a.t0));case 15:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}()},selectCurrentEntry:x})((function(e){var t=e.isLoading,a=e.postNewEntry,i=e.primaryFeelings,o=e.entries,l=e.selectCurrentEntry,s=e.currentEntry,m=Object(r.useState)(se()()),d=Object(u.a)(m,2),f=d[0],p=d[1],g=Object(r.useState)({feelingId:"",entryDate:""}),h=Object(u.a)(g,2),E=h[0],b=h[1],y=Object(r.useState)(!0),v=Object(u.a)(y,2),N=v[0],O=v[1],j=Object(r.useState)(!1),w=Object(u.a)(j,2),k=w[0],x=w[1],C=Object(r.useState)(!0),S=Object(u.a)(C,2),F=S[0],L=S[1],I={angry:"#FF595E",neutral:"#8AC926",happy:"#FFCA3A",sad:"#1982C4",fear:"#6A4C93"},P=function(e){document.getElementsByTagName("html")[0].style.backgroundColor=e},M=Object(r.useCallback)((function(){var e=f.toISOString().split("T")[0],t=o.find((function(t){return t.entryDate.split("T")[0]===e}));O(!t),l(t),x(!1),t&&P(I[t.feeling.feelingName.toLowerCase()])}),[o,l,f]);Object(r.useEffect)((function(){return M(),function(){P("#fff")}}),[f,M]);var A=function(e){p(e),L(e.isSame(se()(),"day"))},D=function(e){var t=e.currentTarget;E.feelingId=t.value,E.entryDate=f.toISOString(),a(E,k),b({feelingId:"",entryDate:""})};return c.a.createElement(ue.a,{maxWidth:"sm",className:"mui-container"},c.a.createElement("div",{className:"homepage--header"},c.a.createElement(de.a,{variant:"body1",align:"center"},F?"How are you feeling today?":"How were you feeling?"),c.a.createElement("div",{className:"monthPicker"},c.a.createElement(Ee.a,{onClick:function(){return A(se()(f).subtract(1,"day"))}},c.a.createElement(Ne.a,null)),c.a.createElement(fe.a,{showTodayButton:!0,autoOk:!0,margin:"normal",id:"date-picker-dialog",format:"MM/DD/yyyy",disableFuture:!0,value:f,onChange:A,KeyboardButtonProps:{"aria-label":"change mood date"}}),c.a.createElement(Ee.a,{disabled:F,onClick:function(){return A(se()(f).add(1,"days"))}},c.a.createElement(je.a,null)))),c.a.createElement("div",{className:"moods-button-container"},t?c.a.createElement(pe.a,null):c.a.createElement("div",null,N||k?i?i.map((function(e){return c.a.createElement("div",{className:"mood-container"},c.a.createElement("img",{src:n[e.feelingName],alt:e.feelingName,className:"mood-container__icon moods--".concat(e.feelingName)}),c.a.createElement(me.a,{onClick:D,key:e.feelingId,value:e.feelingId,variant:"contained",color:"primary"},e.feelingName))})):c.a.createElement(pe.a,null):c.a.createElement("div",{className:"display-mood mood--".concat(s.feeling.feelingName)},c.a.createElement("img",{src:n[s.feeling.feelingName],alt:s.feeling.feelingName,className:"display-mood__icon moods--darkgrey"}),c.a.createElement(de.a,null,s.feeling.feelingName)))),c.a.createElement("div",{className:"homepage--footer"},!N&&c.a.createElement(Ee.a,{onClick:function(){x(!k),P("#fff"),P(k?I[s.feeling.feelingName.toLowerCase()]:"#fff")}},k?c.a.createElement(ye.a,null):c.a.createElement(he.a,null))))})),De=a(53),Te=a(32),We=a(208),Ue=a(204),ze=a(73),Be=a.n(ze),_e=a(203),He=a(60),Je=a.n(He),Ve=Object(oe.b)((function(e){return{isLoading:e.ui.isLoading}}),{loginUser:function(e,t){return function(){var a=Object(f.a)(d.a.mark((function a(n){var r,c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(E()),a.prev=1,a.next=4,I.a.post("".concat(R,"/login"),e).then((function(e){return e.data}));case 4:r=a.sent,c="Bearer ".concat(r.token),I.a.defaults.headers.Authorization=c,n(_(c)),n(ie()),n(X()),t.push("/"),a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(1),n(b()),a.abrupt("return",Promise.reject(a.t0));case 17:case"end":return a.stop()}}),a,null,[[1,13]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.history,a=e.loginUser,n=e.isLoading,i=Object(r.useState)({email:"",password:""}),o=Object(u.a)(i,2),s=o[0],m=o[1],p=Object(r.useState)({}),g=Object(u.a)(p,2),h=g[0],E=g[1],b=function(e){var t=e.currentTarget,a=t.name,n=t.value;m(Object(Te.a)(Object(Te.a)({},s),{},Object(De.a)({},a,n)))},y=function(){var e=Object(f.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,a(s,t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),E(e.t0.response.data);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(Ue.a,{container:!0,maxWidth:"sm"},c.a.createElement("div",{className:"formContainer"},c.a.createElement("img",{src:Fe.a}),c.a.createElement(de.a,{variant:"h4",component:"h1"},"Welcome back!"),c.a.createElement("form",{className:"form",onSubmit:y,noValidate:!0},c.a.createElement(We.a,{id:"email",name:"email",label:"Email",type:"email",onChange:b,value:s.email,fullWidth:!0,className:"textField",helperText:h.email,error:!!h.email,InputProps:{startAdornment:c.a.createElement(_e.a,{position:"start"},c.a.createElement(Be.a,null))}}),c.a.createElement(We.a,{id:"password",name:"password",label:"Password",type:"password",onChange:b,value:s.password,fullWidth:!0,className:"textField",helperText:h.password,error:!!h.password,InputProps:{startAdornment:c.a.createElement(_e.a,{position:"start"},c.a.createElement(Je.a,null))}}),h.general&&c.a.createElement(de.a,{variant:"body2",className:"customError"},h.general),c.a.createElement(me.a,{type:"submit",variant:"contained",color:"primary",className:"button",disabled:n},"Login",n&&c.a.createElement(pe.a,{size:30,className:"progress"}))),c.a.createElement(me.a,{className:"button",component:l.b,to:"/signup",variant:"text"},"Don't have an account ? Sign up here")))})),Ke=a(116),Ye=a.n(Ke),$e=a(113),qe=a.n($e),Ge=a(202),Qe=a(206),Re=a(205),Xe=a(115),Ze=a.n(Xe),et=a(114),tt=a.n(et),at=Object(oe.b)((function(e){return{isLogged:e.auth.isLogged,hasCurrentEntry:e.entries.currentEntry}}),{logoutUser:Z})((function(e){var t=e.isLogged,a=e.logoutUser,n=e.hasCurrentEntry,r=Object(s.g)({path:"/",exact:!0});return t&&c.a.createElement(Re.a,{position:"fixed",className:"navbar",color:"default"},c.a.createElement(Ge.a,{className:"toolbar"},c.a.createElement(Ee.a,{edge:"start",component:l.b,to:"/statistics"},c.a.createElement(qe.a,null)),c.a.createElement(Qe.a,{"aria-label":"add",color:"primary",style:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"},component:l.b,to:"/"},r&&n?c.a.createElement(tt.a,{style:{color:"white"}}):c.a.createElement(Ze.a,{style:{color:"white"}})),c.a.createElement(Ee.a,{edge:"center",onClick:function(){return a()}},c.a.createElement(Ye.a,null))))})),nt=a(117),rt=a.n(nt),ct=Object(oe.b)((function(e){return{isLoading:e.ui.isLoading}}),null)((function(e){var t=e.history,a=e.isLoading,n=e.dispatch,i=Object(r.useState)({}),o=Object(u.a)(i,2),s=o[0],m=o[1],d=Object(r.useState)({email:"",password:"",confirmPassword:"",firstName:""}),f=Object(u.a)(d,2),p=f[0],g=f[1],h=function(e){var t=e.currentTarget,a=t.name,n=t.value;g(Object(Te.a)(Object(Te.a)({},p),{},Object(De.a)({},a,n)))};return c.a.createElement(Ue.a,{container:!0,maxWidth:"sm"},c.a.createElement("div",{className:"formContainer"},c.a.createElement("img",{src:Fe.a}),c.a.createElement(de.a,{variant:"h4",component:"h1"},"Welcome! Sign up here"),c.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),n(E()),I.a.post("/signup",p).then((function(e){n(b()),t.push("/login")})).catch((function(e){g(Object(Te.a)(Object(Te.a)({},p),{},{password:"",confirmPassword:""})),m(e.response.data),n(b())}))},noValidate:!0},c.a.createElement(We.a,{id:"email",name:"email",label:"Email",type:"email",onChange:h,value:p.email,fullWidth:!0,className:"textField",helperText:s.email,error:!!s.email,InputProps:{startAdornment:c.a.createElement(_e.a,{position:"start"},c.a.createElement(Be.a,null))}}),c.a.createElement(We.a,{id:"firstName",name:"firstName",label:"First name",type:"text",onChange:h,value:p.firstName,fullWidth:!0,className:"textField",helperText:s.firstName,error:!!s.firstName,InputProps:{startAdornment:c.a.createElement(_e.a,{position:"start"},c.a.createElement(rt.a,null))}}),c.a.createElement(We.a,{id:"password",name:"password",label:"Password",type:"password",onChange:h,value:p.password,fullWidth:!0,className:"textField",helperText:s.password,error:!!s.password,InputProps:{startAdornment:c.a.createElement(_e.a,{position:"start"},c.a.createElement(Je.a,null))}}),c.a.createElement(We.a,{id:"confirmPassword",name:"confirmPassword",label:"Confirm Password",type:"password",onChange:h,value:p.confirmPassword,fullWidth:!0,className:"textField",helperText:s.confirmPassword,error:!!s.confirmPassword,InputProps:{startAdornment:c.a.createElement(_e.a,{position:"start"},c.a.createElement(Je.a,null))}}),s.general&&c.a.createElement(de.a,{variant:"body2",className:"customError"},s.general),c.a.createElement(me.a,{type:"submit",variant:"contained",color:"primary",className:"button",disabled:a},"Signup",a&&c.a.createElement(pe.a,{size:30,className:"progress"}))),c.a.createElement(me.a,{className:"button",component:l.b,to:"/login",variant:"text"},"Already have an account ? Log in here")))})),it=Object(oe.b)((function(e){return{isLogged:e.auth.isLogged}}))((function(e){var t=e.isLogged,a=e.path,n=e.component;return t?c.a.createElement(s.b,{path:a,component:n}):c.a.createElement(s.a,{to:"/login"})})),ot=Object(oe.b)((function(e){return{isLogged:e.auth.isLogged}}))((function(e){var t=e.isLogged,a=e.path,n=e.component;return t?c.a.createElement(s.a,{to:"/"}):c.a.createElement(s.b,{path:a,component:n})})),lt=a(118),st=a(31),ut=function(e){var t=new Date(e);return"".concat(t.getFullYear(),"-").concat(t.getMonth())},mt=Object(st.a)([function(e){return e.entries.entries},function(e){return ut(e.entries.selectedMonth)}],(function(e,t){return e.filter((function(e){return ut(e.entryDate)===t}))})),dt=(a(168),function(e){var t=e.selectedMonth,a=e.entries,i=Object(r.useState)(new Date(t)),o=Object(u.a)(i,2),l=o[0],s=o[1];Object(r.useEffect)((function(){s(t)}),[t]);for(var m=function(e){var t=new Date(l);return t.setDate(e),t=t.toISOString().split("T")[0],a.find((function(e){return e.entryDate.split("T")[0]===t}))},d=se.a.weekdaysShort().map((function(e){return c.a.createElement("th",{key:e,className:"week-day"},e)})),f=[],p=0;p<se()(l).startOf("month").format("d");p++)f.push(c.a.createElement("td",{key:"empty-".concat(p),className:"calendar-day empty"},""));for(var g=[],h=1;h<=se()(l).daysInMonth();h++){var E=m(h);g.push(c.a.createElement("td",{key:h,className:"calendar-day"},E?c.a.createElement("img",{src:n[E.feeling.feelingName],alt:E.feeling.feelingName,className:"calendar-mood moods--".concat(E.feeling.feelingName)}):h))}var b=[].concat(f,Object(P.a)(g)),y=[],v=[];return b.forEach((function(e,t){t%7!==0?v.push(e):(y.push(v),(v=[]).push(e)),t===b.length-1&&y.push(v)})),g=y.map((function(e,t){return c.a.createElement("tr",{key:t},e)})),c.a.createElement("div",{className:"card"},c.a.createElement("table",{className:"calendar"},c.a.createElement("thead",null,c.a.createElement("tr",null,d)),c.a.createElement("tbody",null,g)))}),ft=function(e){var t=e.primaryFeelings,a=e.entries,i=Object(r.useState)([]),o=Object(u.a)(i,2),l=o[0],s=o[1],m=Object(r.useCallback)((function(e){var a=[];t.forEach((function(t){var n=e.filter((function(e){return e.feeling.feelingId===t.feelingId}));a.push(Object(Te.a)(Object(Te.a)({},t),{},{entriesCount:n.length}))})),s(a)}),[t]);return Object(r.useEffect)((function(){m(a)}),[m,a]),c.a.createElement("div",{className:"card feelings-list"},l.map((function(e){return c.a.createElement("div",{className:"feelings-list__element",key:e.feelingId},c.a.createElement("img",{src:n[e.feelingName],alt:e.feelingName,className:"list-mood moods--".concat(e.feelingName)}),c.a.createElement("span",null,e.entriesCount),c.a.createElement("span",null,Math.round(e.entriesCount/a.length*100),"%"))})))},pt=Object(oe.b)((function(e){return{selectedMonth:e.entries.selectedMonth,entries:mt(e),primaryFeelings:e.feelings.primaryFeelings}}),{selectMonthForStatistics:function(e){return function(t){return t(S(e))}}})((function(e){var t=e.selectMonthForStatistics,a=e.selectedMonth,n=e.entries,r=e.primaryFeelings,i=function(e){return t(e)};return c.a.createElement(ue.a,{maxWidth:"sm",className:"statspage"},c.a.createElement("div",{className:"monthPicker"},c.a.createElement(Ee.a,{onClick:function(){return i(se()(a).subtract(1,"month"))}},c.a.createElement(Ne.a,null)),c.a.createElement(fe.a,{autoOk:!0,views:["month"],value:a,onChange:i,disableFuture:!0,format:"MMMM"}),c.a.createElement(fe.a,{autoOk:!0,variant:"inline",views:["year"],value:a,onChange:i,disableFuture:!0}),c.a.createElement(Ee.a,{disabled:se()(a).isSame(se()(),"month"),onClick:function(){return i(se()(a).add(1,"month"))}},c.a.createElement(je.a,null))),c.a.createElement("div",{className:"statspage--values"},c.a.createElement(dt,{selectedMonth:new Date(a),entries:n}),c.a.createElement(ft,{primaryFeelings:r,entries:n})))})),gt=a(119),ht=a(15),Et=a(120),bt=a(207),yt=Object(Et.a)({palette:{primary:{main:"#0096c7"}}}),vt=function(){return c.a.createElement(oe.a,{store:ce},c.a.createElement(bt.a,{theme:yt},c.a.createElement(lt.a,{loading:null,persistor:re},c.a.createElement(ht.a,{utils:gt.a},c.a.createElement("div",{className:"App"},c.a.createElement(l.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(s.d,null,c.a.createElement(it,{exact:!0,path:"/",component:Ae}),c.a.createElement(ot,{exact:!0,path:"/login",component:Ve}),c.a.createElement(ot,{exact:!0,path:"/signup",component:ct}),c.a.createElement(it,{exact:!0,path:"/statistics",component:pt}))),c.a.createElement(at,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(vt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[133,1,2]]]);
//# sourceMappingURL=main.e3ed38c3.chunk.js.map