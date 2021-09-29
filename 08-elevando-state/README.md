## O que é
Código em React inspirado na [documentação do React](https://pt-br.reactjs.org/docs/lifting-state-up.html), para ajudar a visualizar o conceito de <strong>Elevando o State</strong>

## Como funciona
Este projeto é composto por uma página que implementa 'light mode' e 'dark mode'. 
A ideia é observar como o state 'theme' tinha que pertencer ao componente pai de todos, o App, e não ao componente Header, onde o valor desse state é decidido.
Isso foi necessário porque esse state é compartilhado por todos os componentes da aplicação, e, como no React a informação só vai de cima para baixo, e nunca para os lados, não seria possível compartilhar a informação do Header para os seus componentes irmãos, o Main e o Footer.

Veja aqui um pequeno vídeo explicativo: https://www.loom.com/share/8b4bfb90b46e4b35b5c56dadeccf9063

## Veja funcionando
Para rodar este projeto:

```git clone https://github.com/future4code/react-docs.git```  
```cd react-docs```  
```cd 08-elevando-state```  
```npm i```  
```npm start```  
