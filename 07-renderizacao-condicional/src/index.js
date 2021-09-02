import React from 'react';
import ReactDOM from 'react-dom';

// Escolha qual exemplo visualizar deixando apenas o exemplo desejado não-comentado abaixo.
// import App from './exemplo-pages';
// import App from './exemplo-barra-de-navegacao';
import App from './exemplo-state-vazio';
// import App from './todos-juntos';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);