(this.webpackJsonpassignment_hospital=this.webpackJsonpassignment_hospital||[]).push([[0],{14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var s=c(1),n=c.n(s),r=c(9),a=c.n(r),i=(c(14),c(3)),o=c(4),l=c(2),d=(c.p,c(6),c(0)),j=function(t){var e=Object(s.useState)(0),c=Object(l.a)(e,2),n=c[0],r=c[1];return Object(s.useEffect)((function(){!function(){var e=0;t.patientsDataSorted.map((function(t){t.isAdmitted||e++})),r(e)}()}),[t.patientsDataSorted]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Question 1"}),Object(d.jsx)("br",{}),Object(d.jsx)("h2",{children:"List all patients in order of their patient IDs"}),Object(d.jsx)("br",{}),Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"PatientID"}),Object(d.jsx)("th",{children:"LastName"}),Object(d.jsx)("th",{children:"FirstName"}),Object(d.jsx)("th",{children:"Admitted Status"})]}),t.patientsDataSorted.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.patientID}),Object(d.jsx)("td",{children:t.lastName}),Object(d.jsx)("td",{children:t.firstName}),Object(d.jsx)("td",{children:t.isAdmitted?"Admitted":"Not Admitted"})]})}))]}),Object(d.jsx)("br",{}),Object(d.jsx)("h2",{children:"List the patients who are not admitted yet"}),Object(d.jsx)("br",{}),n>0?Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"PatientID"}),Object(d.jsx)("th",{children:"LastName"}),Object(d.jsx)("th",{children:"FirstName"}),Object(d.jsx)("th",{children:"Action"})]}),t.patientsDataSorted.map((function(e){return e.isAdmitted?null:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.patientID}),Object(d.jsx)("td",{children:e.lastName}),Object(d.jsx)("td",{children:e.firstName}),Object(d.jsx)("td",{style:{cursor:"default",color:"blue"},onClick:function(){return t.admittePatient(e.patientID)},children:"Admitte"})]},e.patientID)}))]}):Object(d.jsx)("h4",{style:{color:"green"},children:"NO DATA LEFT!!!"}),Object(d.jsx)("h2",{children:"List of the patients who require kidneys"}),Object(d.jsx)("br",{}),Object(d.jsxs)("h4",{children:["Total Kidney Needed: ",t.kidneyNeeded]}),Object(d.jsx)("br",{}),Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"PatientID"}),Object(d.jsx)("th",{children:"LastName"}),Object(d.jsx)("th",{children:"FirstName"})]}),t.patientsDataSorted.map((function(t){return void 0!=t.diseases.find((function(t){return"1-kidney"==t}))?Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.patientID}),Object(d.jsx)("td",{children:t.lastName}),Object(d.jsx)("td",{children:t.firstName})]}):null}))]}),Object(d.jsx)("br",{}),Object(d.jsx)("h2",{children:"List of the patients who have COVID"}),Object(d.jsx)("br",{}),Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"LastName"}),Object(d.jsx)("th",{children:"FirstName"}),Object(d.jsx)("th",{children:"Total Deseases"})]}),t.patientsDataSorted.map((function(t){return void 0!=t.diseases.find((function(t){return"COVID"==t}))?Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.lastName}),Object(d.jsx)("td",{children:t.firstName}),Object(d.jsxs)("td",{children:[t.diseases.length," ",t.diseases.length>1?"diseases":"disease"]})]}):null}))]}),Object(d.jsx)("p",{style:{color:"blue"},children:"[P.S. Diseases number less then 2 will show Disease]"})]})},b=function(t){var e=t.doctors,c=t.setDoctors,n=(t.teams,t.setTeams,Object(o.a)(e));n.sort((function(t,e){return t.doctorID-e.doctorID}));var r=Object(s.useState)(""),a=Object(l.a)(r,2),j=a[0],b=a[1],h=Object(s.useState)(""),O=Object(l.a)(h,2),u=O[0],m=O[1],x=Object(s.useState)(""),f=Object(l.a)(x,2),D=f[0],p=f[1],I=Object(s.useState)([]),N=Object(l.a)(I,2),g=N[0],v=N[1],y=function(){if("Consultant"==localStorage.getItem("doctorType"))if(""==u||""==D)b("Text box is Empty!! Please fill up");else{var t=function(){var t=6217+83*Math.random();return Math.floor(t)}(),s=u.slice(0,2)+D.slice(0,3)+"@hospital.com",n=[{doctorID:t,firstName:u,lastName:D,teamID:"none",doctorType:"RMO",email:s,active:!1}].concat(Object(o.a)(e));b("New doctor Added!"),m(""),p("");var r=[];e.map((function(t){t.doctorID==localStorage.getItem("doctorID")?r=t:console.log(t.doctorRequests)})),r.doctorRequests.push(t);var a=n.filter((function(t){return t.doctorID!=localStorage.getItem("doctorID")}));c([r].concat(Object(o.a)(a)))}else b("Failed!!...Only Consultant Type Doctor can add new Doctor!")},S=function(t,e){var s=[];e.map((function(t){t.doctorID==localStorage.getItem("doctorID")?s=t:console.log(t.doctorRequests)}));var n=s.doctorRequests.filter((function(e){return e!=t})),r=e.map((function(t){return t.doctorID===localStorage.getItem("doctorID")?Object(i.a)(Object(i.a)({},t),{},{doctorRequests:n}):t}));c(r),v(n),console.log(n)};return Object(s.useEffect)((function(){localStorage.setItem("doctorID",6215),localStorage.setItem("doctorType","Consultant"),localStorage.setItem("teamID","008"),e.map((function(t){t.doctorID==localStorage.getItem("doctorID")?v(t.doctorRequests):console.log(["doctorRequestsList"])}))}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Question 2"}),Object(d.jsx)("br",{}),Object(d.jsx)("h5",{children:"[-- I store DoctorID(6215),Type(Consultant) and TeamNumber in the loacal storage]"}),Object(d.jsx)("h5",{children:"[-- Because Assuming that he is logged in. After login those data store in LoacalStorage]"}),Object(d.jsx)("br",{}),Object(d.jsx)("h2",{children:"List all Doctor sroted by ID"}),Object(d.jsx)("br",{}),Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"DoctorID"}),Object(d.jsx)("th",{children:"FirstName"}),Object(d.jsx)("th",{children:"LastName"}),Object(d.jsx)("th",{children:"TeamID"}),Object(d.jsx)("th",{children:"DoctorType"}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsx)("th",{children:"Account Active Status"})]}),n.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.doctorID}),Object(d.jsx)("td",{children:t.firstName}),Object(d.jsx)("td",{children:t.lastName}),Object(d.jsx)("td",{children:t.teamID}),Object(d.jsx)("td",{children:t.doctorType}),Object(d.jsx)("td",{children:t.email}),Object(d.jsx)("td",{children:t.active?"Active":"Not Active"})]})}))]}),Object(d.jsx)("h2",{children:"Add New Doctor"}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("table",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("input",{placeholder:"FirstName",value:u,onChange:function(t){return m(t.target.value)}})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{placeholder:"LastName",value:D,onChange:function(t){return p(t.target.value)}})}),Object(d.jsx)("td",{onClick:function(){return y()},style:{cursor:"default",color:"blue"},children:"ADD"})]})}),Object(d.jsx)("h5",{style:{color:"blue"},children:j})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("h2",{children:["Doctor Request of ",localStorage.getItem("doctorID")]}),Object(d.jsx)("br",{}),Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Doctor Requests ID"}),Object(d.jsx)("th",{children:"Active Status"})]}),g.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t}),Object(d.jsx)("td",{onClick:function(){return function(t){var s=localStorage.getItem("teamID"),n=e.map((function(e){return e.doctorID===t?Object(i.a)(Object(i.a)({},e),{},{teamID:s,active:!0}):e}));c(n),console.log("addDocToTeam"),S(t,n)}(t)},style:{cursor:"default",color:"blue"},children:"ADD to TEAM"})]})}))]}),Object(d.jsxs)("h2",{children:["Teams Members of ",localStorage.getItem("teamID")]}),Object(d.jsx)("br",{}),Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"DoctorID"}),Object(d.jsx)("th",{children:"FirstName"}),Object(d.jsx)("th",{children:"LastName"}),Object(d.jsx)("th",{children:"DoctorType"}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsx)("th",{children:"Active"})]}),n.map((function(t){return t.teamID==localStorage.getItem("teamID")&&t.doctorID!=localStorage.getItem("doctorID")?Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.doctorID}),Object(d.jsx)("td",{children:t.firstName}),Object(d.jsx)("td",{children:t.lastName}),Object(d.jsx)("td",{children:t.doctorType}),Object(d.jsx)("td",{children:t.email}),Object(d.jsxs)("td",{children:[Object(d.jsx)("span",{onClick:function(){return s=t.doctorID,c(e.map((function(t){return t.doctorID==s?Object(i.a)(Object(i.a)({},t),{},{teamID:"none",active:!1}):t}))),void console.log("promotionDoc");var s},style:{cursor:"default",color:"red"},children:"REMOVE "}),"|",Object(d.jsx)("span",{onClick:function(){return s=t.doctorID,c(e.map((function(t){return t.doctorID==s?Object(i.a)(Object(i.a)({},t),{},{doctorType:"Assistant Consultant"}):t}))),void console.log("promotionDoc");var s},style:{cursor:"default",color:"green"},children:" PROMOTION"})]})]}):null}))]}),Object(d.jsx)("p",{style:{color:"blue"},children:"[P.S. Promotion will chnage Doctor type only to Assistant Consultant]"})]})},h=function(t){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Question 3"}),Object(d.jsx)("br",{}),Object(d.jsx)("h2",{children:"List the patients from another hospital"}),Object(d.jsx)("br",{}),t.patients.length>0?Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"LastName"}),Object(d.jsx)("th",{children:"FirstName"}),Object(d.jsx)("th",{children:"Action"})]}),t.patients.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.lastName}),Object(d.jsx)("td",{children:e.firstName}),Object(d.jsx)("td",{style:{cursor:"default",color:"blue"},onClick:function(){return function(e){t.setShowMsg(!0),t.addNewPatientFromOtherHospital(e);var c=t.patients.filter((function(t){return t!=e}));t.setPatients(c)}(e)},children:"ADD"})]})}))]}):Object(d.jsx)("h4",{style:{color:"green"},children:"NO DATA LEFT!!!"}),t.showMsg?Object(d.jsxs)("div",{style:{color:"red"},children:[Object(d.jsx)("h4",{children:"P.S: Data ADDED! Plaese go to Question-1 tab to check the update."}),Object(d.jsx)("h4",{children:"Donn't reload the page. Othewise it will reset everything!"})]}):null]})},O=function(){var t=Object(s.useState)([{firstName:"Shakira",lastName:"Hossain",patientID:"007",diseases:["COVID","1-kidney","3/4-dissolved-brain"],isAdmitted:!0},{firstName:"Uzumaki",lastName:"Naruto",patientID:"008",diseases:["Obesity"],isAdmitted:!0},{firstName:"Sheikh",lastName:"Selim Ahmed",patientID:"006",diseases:["Broken heart","Depression"],isAdmitted:!0},{firstName:"Rafsan",lastName:"Wayne",patientID:"009",diseases:["COVID","1-kidney","Impaired vision"],isAdmitted:!1}]),e=Object(l.a)(t,2),c=e[0],n=e[1],r=Object(s.useState)([{firstName:"Agent",lastName:"Pena",diseases:["COVID"]},{firstName:"Heisenberg",lastName:"Bear",diseases:["Headache"]},{firstName:"Okarin",lastName:"May",diseases:["Broken Wrist","Mad-scientist"]},{firstName:"Hououin",lastName:"Kyoma",diseases:["Delusional disorder","Memory loss"]}]),a=Object(l.a)(r,2),O=a[0],u=a[1],m=Object(s.useState)([{doctorID:"6215",firstName:"Jalaluddin",lastName:"Mahbub",teamID:"008",doctorType:"Consultant",email:"jabub@hospital.com",active:!0,doctorRequests:[]},{doctorID:"6216",firstName:"Amin",lastName:"Morshed",teamID:"008",doctorType:"Assistant Consultant",email:"amhed@hospital.com",active:!0},{doctorID:"6214",firstName:"Mahady",lastName:"Selim",teamID:"005",doctorType:"Consultant",email:"malim@hospital.com",active:!0,doctorRequests:["6213"]},{doctorID:"6213",firstName:"Jamela",lastName:"Begum",teamID:"005",doctorType:"RMO",email:"jagum@hospital.com",active:!1}]),x=Object(l.a)(m,2),f=x[0],D=x[1],p=Object(s.useState)([{teamName:"nephrology",teamID:"008",consultantInCharge:"6215",teamMates:["6216"]},{teamName:"cardiology",teamID:"005",consultantInCharge:"6214",teamMates:[]}]),I=Object(l.a)(p,2),N=I[0],g=I[1],v=Object(s.useState)("Qustion1"),y=Object(l.a)(v,2),S=y[0],A=y[1],T=Object(s.useState)("0"),C=Object(l.a)(T,2),k=C[0],M=C[1],L=Object(s.useState)(!1),w=Object(l.a)(L,2),P=w[0],F=w[1],R=Object(o.a)(c);R.sort((function(t,e){return t.patientID-e.patientID}));var E=function(){var t=0;c.map((function(e){void 0!=e.diseases.find((function(t){return"1-kidney"==t}))&&t++})),M(t)},Q=function(){var t=100+899*Math.random();return Math.floor(t)};Object(s.useEffect)((function(){E()}),[]),Object(s.useEffect)((function(){E()}),[c]);var q="";return q="Qustion1"==S?Object(d.jsx)(j,{patientsDataSorted:R,kidneyNeeded:k,admittePatient:function(t){var e=c.map((function(e){return e.patientID===t?Object(i.a)(Object(i.a)({},e),{},{isAdmitted:!0}):e}));n(e)}}):"Qustion2"==S?Object(d.jsx)(b,{doctors:f,setDoctors:D,teams:N,setTeams:g}):Object(d.jsx)(h,{patients:O,setPatients:u,patientsDataSorted:R,addNewPatientFromOtherHospital:function(t){n([{firstName:t.firstName,lastName:t.lastName,patientID:Q(),diseases:t.diseases,isAdmitted:!0}].concat(Object(o.a)(c))),console.log(c)},showMsg:P,setShowMsg:F}),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("button",{onClick:function(){return A("Qustion1")},children:"Qustion1"}),Object(d.jsx)("button",{onClick:function(){return A("Qustion3")},children:"Qustion3"}),Object(d.jsx)("button",{onClick:function(){return A("Qustion2")},children:"Qustion2"}),q]})},u=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,s=e.getFID,n=e.getFCP,r=e.getLCP,a=e.getTTFB;c(t),s(t),n(t),r(t),a(t)}))};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),u()},6:function(t,e,c){}},[[16,1,2]]]);
//# sourceMappingURL=main.8acb38d0.chunk.js.map