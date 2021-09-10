import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const elemento = 'Incorporando Expressões em JSX  !';
const tituloDaPagina = <h1>Olá, vamos falar de  {elemento}</h1>;

const elemento2 = (

    <div>
   
        <p> 
          Neste exemplo , declaramos uma variável chamada elemento2 e então a 
          usamos dentro do JSX ao envolvê-la com chaves:
        </p>;


  
    </div>
  );


ReactDOM.render(
//elemento,
elemento2,
  document.getElementById('root')
);