import React from 'react';
import ReactDOM from 'react-dom';

// Altere a linha comentada abaixo para mudar o modo do projeto
// import App from './App-componentizado';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);