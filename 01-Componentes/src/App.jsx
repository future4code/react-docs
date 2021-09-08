import React from 'react';

// O App é sempre o componente inicial, pois é o que será chamado no arquivo index.js
export default class App extends React.Component {

    render() {
        return (
            <div>
                <p>Podemos renderizar tags HTML:</p>
                <h1>Hello World!</h1>
                <hr />
                <p>Podemos renderizar elementos feitos com função:</p>
                <WelcomeFunction name="Bruno" />
                <hr />
                <p>Podemos renderizar elementos feitos com classe:</p>
                <WelcomeClass name="Andrea" />
                <hr />
                <h2>Pontos importantes:</h2>
                <p>Todo componente feito por nós, seja em classe ou funçõa, deve começar com a letra maiúscula.</p>
                <p>Alterando o valor passado no atributo `name` é possível alterar o resultado de um componente. Isso ocorre pois passamos o nome através de uma props.</p>
                <p>As props são somente para consulta, ou seja, nõa podemos alterar a props dentro do componeten `Welcome` nesse caso.</p>
            </div>
        )
    }
}

function WelcomeFunction(props) {
    return <h1>Hello, {props.name}</h1>;
}

class WelcomeClass extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

