import React from 'react';

export default class App extends React.Component {
    state = {
        nameClass: "Bruno",
        nameFunction: "Andrea"
    }

    onChangeClass = (e) => {
        this.setState({ nameClass: e.target.value })
    }


    onChangeFunction = (e) => {
        this.setState({ nameFunction: e.target.value })
    }

    render() {
        return (
            <div>
                <h3>Podemos renderizar tags HTML:</h3>
                <h1>Hello World!</h1>
                <hr />
                <h3>Podemos renderizar elementos feitos com função:</h3>
                <p>Insira o nome desejado, esse valor é salvo no estado do componente App e passado como props para o componente Welcome:</p>
                <input type="text" onChange={this.onChangeFunction}></input>
                <WelcomeFunction name={this.state.nameFunction} />
                <hr />
                <h3>Podemos renderizar elementos feitos com classe:</h3>
                <p>Insira o nome desejado, esse valor é salvo no estado do componente App e passado como props para o componente Welcome:</p>
                <input type="text" onChange={this.onChangeClass}></input>
                <WelcomeClass name={this.state.nameClass} />
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

