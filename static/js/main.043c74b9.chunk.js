(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(32),s=n.n(r),i=n(9),u=n(23),o=n(6),l=n(10),j=n.n(l),b=n(17),d=n(12),p=n(24),f=n(20);n(44),n(58),n(59);f.a.initializeApp({apiKey:"AIzaSyD_mI8tMdHuUwDFDaDGrQuV7VAEQ7d6vg0",authDomain:"nwitter-edc03.firebaseapp.com",projectId:"nwitter-edc03",storageBucket:"nwitter-edc03.appspot.com",messagingSenderId:"106238198241",appId:"1:106238198241:web:a3030c2ca0eb39b04e12a0"});var h=f.a,O=f.a.auth(),m=f.a.firestore(),x=f.a.storage(),v=(n(46),n(1)),g=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),u=s[0],o=s[1],l=Object(a.useState)(!0),d=Object(i.a)(l,2),p=d[0],f=d[1],h=Object(a.useState)(""),m=Object(i.a)(h,2),x=m[0],g=m[1],w=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&o(a)},y=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(n,u);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:y,className:"container",children:[Object(v.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:w,className:"authInput"}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:w,className:"authInput"}),Object(v.jsx)("input",{type:"submit",className:"authInput authSubmit",value:p?"Create Account":"Sign In"}),x&&Object(v.jsx)("span",{className:"authError",children:x})]}),Object(v.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:p?"Sign In":"CreateAccount"})]})},w=(n(48),function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new h.auth.GoogleAuthProvider:"github"===n&&(a=new h.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(a);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"authContainer",children:[Object(v.jsx)(d.a,{icon:p.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(v.jsx)(g,{}),Object(v.jsxs)("div",{className:"authBtns",children:[Object(v.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(v.jsx)(d.a,{icon:p.b})]}),Object(v.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(v.jsx)(d.a,{icon:p.a})]})]})]})}),y=n(34),N=n(19),S=(n(49),function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],u=r[1],o=Object(a.useState)(t.text),l=Object(i.a)(o,2),p=l[0],f=l[1],h=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,m.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,x.refFromURL(t.attachmentURL).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){return u((function(e){return!e}))},g=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m.doc("nweets/".concat(t.id)).update({text:p});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"nweet",children:s?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(v.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:p,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;f(t)},className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(v.jsx)("span",{onClick:O,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{children:t.text}),t.attachmentURL&&Object(v.jsx)("img",{src:t.attachmentURL,alt:t.attachmentURL}),n&&Object(v.jsxs)("div",{className:"nweet__actions",children:[Object(v.jsx)("span",{onClick:h,children:Object(v.jsx)(d.a,{icon:N.d})}),Object(v.jsx)("span",{onClick:O,children:Object(v.jsx)(d.a,{icon:N.a})})]})]})})}),k=n(61),C=(n(50),function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),l=o[0],p=o[1],f=function(){var e=Object(b.a)(j.a.mark((function e(n){var a,c,i,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return c=x.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return u={text:r,createAt:Date.now(),creatorId:t.uid,attachmentURL:a},e.next=15,m.collection("nweets").add(u);case 15:s(""),p("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:f,className:"factoryForm",children:[Object(v.jsxs)("div",{className:"factoryInput__container",children:[Object(v.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(v.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(v.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(v.jsx)("span",{children:"Add photos"}),Object(v.jsx)(d.a,{icon:N.b})]}),Object(v.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;p(t)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(v.jsxs)("div",{className:"factoryForm__attachment",children:[Object(v.jsx)("img",{src:l,style:{backgroundImage:l},alt:l}),Object(v.jsxs)("div",{className:"factoryForm__clear",onClick:function(){p("")},children:[Object(v.jsx)("span",{children:"Remove"}),Object(v.jsx)(d.a,{icon:N.c})]})]})]})}),I=(n(51),function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){var e=m.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));s(t)}));return function(){return e()}}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(C,{userObj:t}),Object(v.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(v.jsx)(S,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})}),F=(n(52),function(e){var t=e.refreshUser,n=e.userObj,c=Object(a.useState)(n.displayName),r=Object(i.a)(c,2),s=r[0],u=r[1],l=Object(o.f)(),d=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===s){e.next=5;break}return e.next=4,n.updateProfile({displayName:s});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;u(t)},type:"text",autoFocus:!0,placeholder:"Display Name",value:s,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(v.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){O.signOut(),l.push("/")},children:"Log Out"})]})}),A=(n(55),function(e){var t,n=e.userObj;return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{className:"ulContainer",children:[Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(v.jsx)(d.a,{icon:p.c,color:"#04AAFF",size:"2x"})})}),Object(v.jsx)("li",{children:Object(v.jsxs)(u.b,{to:"/profile",className:"profileLink",children:[Object(v.jsx)(d.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(v.jsxs)("span",{style:{marginTop:10},children:[" ",(null===n||void 0===n||null===(t=n.displayName)||void 0===t?void 0:t.length)?"".concat(n.displayName,"'s Profile"):"Profile"]})]})})]})})}),U=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(v.jsxs)(u.a,{children:[n&&Object(v.jsx)(A,{userObj:a}),Object(v.jsx)(o.c,{children:n?Object(v.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(v.jsx)(o.a,{exact:!0,path:"/",children:Object(v.jsx)(I,{userObj:a})}),Object(v.jsx)(o.a,{exact:!0,path:"/profile",children:Object(v.jsx)(F,{userObj:a,refreshUser:t})})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(o.a,{exact:!0,path:"/",children:Object(v.jsx)(w,{})})})})]})};var P=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),u=s[0],o=s[1];return Object(a.useEffect)((function(){O.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(v.jsx)(v.Fragment,{children:n?Object(v.jsx)(U,{refreshUser:function(){var e=O.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"Initializing..."})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(56);console.log(f.a),s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(P,{})}),document.getElementById("root")),_()}},[[57,1,2]]]);
//# sourceMappingURL=main.043c74b9.chunk.js.map