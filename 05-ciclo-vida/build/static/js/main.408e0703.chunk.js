(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{43:function(t,e,a){"use strict";a.r(e);var n=a(2),s=a.n(n),i=a(14),o=a.n(i),r=a(15),c=a(16),m=a(18),u=a(17),h=a(5),l=a.n(h),p=a(1),j=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={firstName:"",lastName:"",text:""},t.inputFirstName="",t.onChangeFirstName=function(e){t.inputFirstName=e.target.value},t.inputLastName="",t.onChangeLastName=function(e){t.inputLastName=e.target.value},t.onClickButton=function(){t.setState({firstName:t.inputFirstName}),t.setState({lastName:t.inputLastName})},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this;l.a.get("https://api.icndb.com/jokes/random?escape=javascript").then((function(e){t.setState({text:e.data.value.joke})}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;console.log("Prev state",e),console.log("Current state",this.state);var n=this.state.firstName&&this.state.firstName!=e.firstName,s=this.state.lastName&&this.state.lastName!=e.lastName;console.log("Deve fazer uma nova requisi\xe7\xe3o?",n||s),(n||s)&&l.a.get("https://api.icndb.com/jokes/random?firstName=".concat(this.state.firstName,"&lastName=").concat(this.state.lastName)).then((function(t){a.setState({text:t.data.value.joke})}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:this.state.text}),Object(p.jsx)("hr",{}),Object(p.jsx)("h3",{children:"Altere o nome da piada acima, insira nome e sobrenome desejado abaixo:"}),"Nome: ",Object(p.jsx)("input",{type:"text",onChange:this.onChangeFirstName})," | Sobrenome: ",Object(p.jsx)("input",{type:"text",onChange:this.onChangeLastName}),Object(p.jsx)("button",{onClick:this.onClickButton,children:"Enviar"})]})}}]),a}(s.a.Component);o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.408e0703.chunk.js.map