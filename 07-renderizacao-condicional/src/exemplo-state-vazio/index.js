import React from 'react';
import { 
    AppContainer, 
    AvisoContainer, 
    MessageContainer, 
    MessagesContainer, 
    Input,
    JsonViewerContainer
} from './app.styles.js';
import ReactJson from 'react-json-view';

export default class MessagesPage extends React.Component {
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

    onEditStateJson = ({updated_src}) => {
        this.setState({...updated_src});
    }

    render() {
        return (
            <AppContainer>
                <JsonViewerContainer >
                <ReactJson 
                    src={this.state} 
                    theme="apathy:inverted" 
                    displayDataTypes={false} 
                    displayObjectSize={false}
                    onEdit={this.onEditStateJson}
                />
                </JsonViewerContainer>
                <h3>Use o input para adicionar mensagens.</h3>
                <h3>Clique nas mensagens para excluí-las</h3>
                <MessagesContainer>
                    {this.state.messages.length ? 
                        this.state.messages.map(message => (
                            <MessageContainer key={message.id} onClick={() => this.deleteMessage(message.id)}>{message.text}</MessageContainer>
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