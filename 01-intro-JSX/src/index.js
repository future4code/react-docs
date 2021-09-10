import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const elemento = 'Intro JSX !';
const tituloDaPagina = <h1>Olá, vamos falar de  {elemento}</h1>;


// <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>

const elemento2 = (
  <div>
    <p> 
Incorporando Expressões em JSX

No exemplo abaixo, declaramos uma variável chamada name e então a usamos dentro do JSX ao envolvê-la com chaves:
</p>;
  </div>
);


ReactDOM.render(
// tituloDaPagina,
elemento,
  //  elemento2,
  document.getElementById('root')
);