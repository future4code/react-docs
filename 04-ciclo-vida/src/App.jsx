import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
    state = { // objeto dos estados
        firstName: "",
        lastName: "",
        text: ""
    }

    inputFirstName = "" // variavel normal
    onChangeFirstName = (e) => {
        this.inputFirstName = e.target.value
    }

    inputLastName = "" // variavel normal
    onChangeLastName = (e) => {
        this.inputLastName = e.target.value
    }

    onClickButton = () => {
        this.setState({ firstName: this.inputFirstName })
        this.setState({ lastName: this.inputLastName })
    }

    componentDidMount() { // chamado logo após a renderização inicial do componente
        axios.get("https://api.icndb.com/jokes/random?escape=javascript").then((response) => {
            this.setState({ text: response.data.value.joke })
        })
    }

    componentDidUpdate(prevProps, prevState) {// chamado logo após cada renderização do componente
        console.log(prevState)

        // Verifica se houve alteração em algum do campos
        const verifyFisrtName = this.state.firstName && this.state.firstName != prevState.firstName
        const verifyLastName = this.state.lastName && this.state.lastName != prevState.lastName

        if (verifyFisrtName || verifyLastName)
            axios.get(`http://api.icndb.com/jokes/random?firstName=${this.state.firstName}&lastName=${this.state.lastName}`).then((response) => {
                this.setState({ text: response.data.value.joke })
            })
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <hr />
                <h3>Altere o nome da piada acima, insira nome e sobrenome desejado abaixo:</h3>
                Nome: <input type="text" onChange={this.onChangeFirstName}></input> |
                Sobrenome: <input type="text" onChange={this.onChangeLastName}></input>
                <button onClick={this.onClickButton}>Enviar</button>
            </div >
        );
    }
}