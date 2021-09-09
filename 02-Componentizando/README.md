# Componentes e Props

Este projeto propõe-se a implementar e ilustrar os conceitos abordados no [capítulo 4 dos Principais Conceitos da documentaçõa oficial do React](https://pt-br.reactjs.org/docs/components-and-props.html).

Maiores detalhes e observações podem ser vistas neste [vídeo explicativo](https://www.loom.com/share/45310e3db48942fcb982e754be4b6198).

## Como rodar o projeto
Nesta pasta é possível encontrar dois arquivos principais:

- *App.jsx*
    Nele temos o código demonstrando um componente sendo chamado no App.js. Porém, nota-se que o componente possui elementos que podem ser reutilizados individualmente.
- *App-componentizado.jsx*
    Nele temos o código implementando o mesmo componente mas componentizando suas partes reutilizáveis. Além disso, neste projeto os componentes são separados em arquivos diferentes, de modo a organizar melhor a estrutura do projeto.

Logo, para alterar qual dos modos deseja rodar o projeto é possível alterar o arquivo utilizado para importar o componente `App` no arquivo `index.js`.

Para rodar, siga os seguintes comandos após o clone:
```
$ cd 02-componentizando
$ npm i
$ npm run start
```

## Acesse os modos sem clonar o projeto
- [App não componentizado](https://unarmed-calculator.surge.sh/)
- [App componentizado](https://male-jail.surge.sh/)
