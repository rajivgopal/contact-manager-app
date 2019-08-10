(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,a,t){e.exports=t(72)},46:function(e,a,t){},47:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(31),l=t.n(c),o=(t(46),t(47),t(48),t(11)),s=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav nav-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/"},r.a.createElement("i",{className:"fas fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/add/contact"},r.a.createElement("i",{className:"fas fa-plus"}),"Add Contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/about"},r.a.createElement("i",{className:"fas fa-question"}),"About"))))))};s.defaultProps={branding:"My Contact App"};var m=s,i=t(6),u=t.n(i),p=t(9),d=t(8),f=t(34),E=t(35),b=t(39),v=t(36),h=t(40),N=t(38),y=t(19),g=t(10),O=t.n(g),j=Object(n.createContext)(),w=function(e,a){switch(a.type){case"DELETE_INFO":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_INFO":return Object(y.a)({},e,{contacts:[a.payload].concat(Object(N.a)(e.contacts))});default:return e}},k=function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(b.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState(function(a){return w(a,e)})}},t}return Object(h.a)(a,e),Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(j.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),x=j.Consumer,C=k,A=(t(30),function(e){var a=e.contact,t=a.id,c=a.name,l=a.email,o=a.phone,s=Object(n.useState)(!0),m=Object(d.a)(s,2),i=m[0],f=m[1],E=function(){f(!i)},b=function(){var e=Object(p.a)(u.a.mark(function e(a,t,n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Is it 404?");case 8:n({type:"DELETE_INFO",payload:t});case 9:case"end":return e.stop()}},e,null,[[0,5]])}));return function(a,t,n){return e.apply(this,arguments)}}();return r.a.createElement(x,null,function(e){return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,c,r.a.createElement("i",{className:"fas fa-sort-down",onClick:E,style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:function(a){return b(a,t,e.dispatch)}})),i?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",l),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)})}),S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),r.a.createElement(x,null,function(e){return e.contacts.map(function(e){return r.a.createElement(A,{key:e.id,contact:e})})}))},D=t(37),F=t.n(D),P=function(e){var a=e.label,t=e.name,n=e.type,c=e.className,l=e.placeholder,o=e.value,s=e.tbEvent,m=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{className:F()(c,{"is-invalid":m}),type:n,name:t,placeholder:l,value:o,onChange:s,error:m}),m&&r.a.createElement("div",{className:"invalid-feedback"},m))};P.defaultProps={type:"textbox"};var I=P,q=function(e){var a=Object(n.useState)(""),t=Object(d.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)(""),s=Object(d.a)(o,2),m=s[0],i=s[1],f=Object(n.useState)(""),E=Object(d.a)(f,2),b=E[0],v=E[1],h=Object(n.useState)({}),N=Object(d.a)(h,2),y=N[0],g=N[1],j=function(e){var a=e.target,t=a.name,n=a.value;"name"===t?l(n):"email"===t?i(n):"phone"===t&&v(n)},w=function(){var a=Object(p.a)(u.a.mark(function a(t,n){var r;return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),""!==c){a.next=6;break}return g({name:"Name is required"}),a.abrupt("return");case 6:if(""!==m){a.next=11;break}return g({email:"Email is required"}),a.abrupt("return");case 11:if(""!==b){a.next=14;break}return g({phone:"Phone is required"}),a.abrupt("return");case 14:return a.next=16,O.a.post("https://jsonplaceholder.typicode.com/users",{name:c,email:m,phone:b});case 16:r=a.sent,n({type:"ADD_INFO",payload:r.data}),l(""),i(""),v(""),g({}),e.history.push("/");case 23:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null,function(e){return r.a.createElement("div",{className:"card card-mb3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(a){return w(a,e.dispatch)}},r.a.createElement(I,{label:"Name",name:"name",className:"form-control form-control-lg",type:"text",placeholder:"Enter name...",value:c,tbEvent:function(e){return j(e)},error:y.name}),r.a.createElement(I,{label:"Email",name:"email",className:"form-control form-control-lg",type:"email",placeholder:"Enter email...",value:m,tbEvent:function(e){return j(e)},error:y.email}),r.a.createElement(I,{label:"Phone",name:"phone",className:"form-control form-control-lg",type:"text",placeholder:"Enter phone...",value:b,tbEvent:function(e){return j(e)},error:y.phone}),r.a.createElement("input",{className:"btn btn-light btn-block",type:"submit",value:"Add Contact"}))))}))},_=t(7),L=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact App"),r.a.createElement("p",{className:"lead"},"App to manage contacts"))},B=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, we dont have what you are looking for!!!!"))};var J=function(){return r.a.createElement("div",{className:"container",style:{width:"600px",align:"left"}},r.a.createElement(C,null,r.a.createElement(o.a,null,r.a.createElement(m,null),r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/",component:S}),r.a.createElement(_.a,{exact:!0,path:"/add/contact",component:q}),r.a.createElement(_.a,{exact:!0,path:"/about",component:L}),r.a.createElement(_.a,{component:B})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.ea17c2dd.chunk.js.map