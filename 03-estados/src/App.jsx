import React from 'react';

export default class App extends React.Component {
    state = {
        text: ""
    }

    onChangeTexto = (e) => {
        this.setState({ text: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Salve, família!</h1>
                <h3>Escreva algo:</h3>
                <input type="text" onChange={this.onChangeTexto}></input>
                <h2>Você escreveu: {this.state.text}.</h2>
            </div>
        );
    }
}
