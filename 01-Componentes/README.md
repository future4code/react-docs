# Componentes e Props

Este projeto propõe-se a implementar e ilustrar os conceitos abordados no [capítulo 4 dos Principais Conceitos da documentaçõa oficial do React](https://pt-br.reactjs.org/docs/components-and-props.html).

Maiores detalhes e observações podem ser vistas neste [vídeo explicativo](adicionar-link).

## Como rodar o projeto
Nesta pasta é possível encontrar dois arquivos principais:

- *App.jsx*
    Nele temos o código expositivo mostrando como podemos renderizar elementos na tela, criar componentes e utilizar props para determinar valores.
- *App-state.jsx*
    Nele temos o código com campos de entrada de texto interativos, possibilitando verificar como as props podem ser utilizadas para transmitir informações entre componentes em tempo real. 
    Vale ressaltar que para este código foram utilizados conceitos de estados, que veremos em capítulos mais a frente.

Logo, para alterar qual dos modos deseja rodar o projeto é possível alterar o arquivo utilizado para importar o componente `App` no arquivo `index.js`.

Para rodar, siga os seguintes comandos após o clone:
```
$ cd 01-Componentes
$ npm i
$ npm run start
```

## Acesse os modos sem clonar o projeto
- [Modo expositivo](https://mountainous-toe.surge.sh/)
- [Modo com entradas interativas](https://reflective-knife.surge.sh/)
