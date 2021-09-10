import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import jsx1 from './images/jsx1.png'

const elemento = 'Incorporando Expressões em JSX  !';
const tituloDaPagina = <h1>Olá, vamos falar de  {elemento}</h1>;
const elemento2 = (
  <div>
    <p> 


Neste exemplo , declaramos uma variável chamada elemento2 e então a 
usamos dentro do JSX ao envolvê-la com chaves:
</p>;

<img src={jsx1} alt="codigo em imagem"> </img>

  </div>

);


ReactDOM.render(

 elemento2,
  document.getElementById('root')
);