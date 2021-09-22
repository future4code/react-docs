## O que é
Código em React inspirado na [documentação do React](https://pt-br.reactjs.org/docs/lists-and-keys.html), para ajudar a visualizar o conceito de <strong>Renderização de listas</strong>

## Como funciona
A página principal mostra uma lista de posts e um input para adicionar novos posts.
Coisas interessantes a se observar no código:
- Como uma lista é renderizada no React (com o map)
- Como adicionar, editar e remover itens de um state que é uma array no React.
- Como fornecer uma boa key para os elementos.
- Maneiras diferentes de se fornecer ids para os itens de uma lista.
Veja aqui um pequeno vídeo explicativo, contemplando os itens acima: https://www.loom.com/share/00aac87229704d6388b576a661a7174c
- Observe o resultado do console.log da linha 21 de src/components/posts/post.js. O valor passado em "key" para o componente que envolve o elemento da lista não pode ser acessada pelo componente. 

## Veja funcionando
Veja a implementação da aplicação aqui:
https://react-docs-08.surge.sh/

Para rodar este projeto:

```git clone https://github.com/future4code/react-docs.git```  
```cd react-docs```  
```cd 07-listas```  
```npm i```  
```npm start``` 