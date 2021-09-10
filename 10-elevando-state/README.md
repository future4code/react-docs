## O que é
Código em React inspirado na [documentação do React](https://pt-br.reactjs.org/docs/lifting-state-up.html), para ajudar a visualizar o conceito de <strong>Elevando o State</strong>

## Como funciona
Este projeto é composto por uma página que implementa 'light mode' e 'dark mode'. 
A ideia é observar como o state 'theme' tinha que pertencer ao componente pai de todos, o App, e não ao componente Header, onde o valor desse state é decidido.
Isso foi necessário porque esse state é compartilhado por todos os componentes da aplicação, e, como no React a informação só vai de cima para baixo, e nunca para os lados, não seria possível compartilhar a informação do Header para os seus componentes irmãos, o Main e o Footer.


## Veja funcionando
Veja a implementação de todos os componentes juntos aqui:
https://react-docs-07.surge.sh/

Para rodar este projeto:

```git clone https://github.com/future4code/react-docs.git```  
```cd react-docs```  
```cd 07-renderizacao-condicional```  
```npm i```  
Escolha qual ```App``` importar  
```npm start```  
