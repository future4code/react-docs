import React from 'react';
import { AppContainer, AvisoContainer, MessageContainer, MessagesContainer, Input } from './app.styles.js';

export default class App extends React.Component {
    state = {
        messages: [],
        message: ""
    }

    onChangeMessage = (event) => {
        this.setState({message: event.target.value});
    }

    saveMessage = (e) => {
        e.preventDefault();
        const messages = [...this.state.messages, {
            text: this.state.message,
            id: 1000 * Math.random() * Math.random()
        }];
        this.setState({ messages });
        this.setState({ message: "" });
    }

    deleteMessage = (id) => {
        const newMessages = this.state.messages.filter(m => m.id !== id);
        this.setState({ messages: newMessages});
    }

    render() {
        return (
            <AppContainer>
                <h4>Use o input para adicionar mensagens.</h4>
                <h4>Clique nas mensagens para excluí-las</h4>
                <MessagesContainer>
                    {this.state.messages.length ? 
                        this.state.messages.map(message => (
                            <MessageContainer onClick={() => this.deleteMessage(message.id)}>{message.text}</MessageContainer>
                        )) : 
                    <AvisoContainer><p>Não há mensagens</p></AvisoContainer>}
                </MessagesContainer>
                <form onSubmit={this.saveMessage}>
                    <Input value={this.state.message} onChange={this.onChangeMessage}></Input>
                    <button type="submit">Salvar</button>
                </form>
            </AppContainer>
        )
    }
}