import React from 'react';
import { Navbar, JsonViewer } from './components';
import { Home, MessagesPage } from './pages';
import { AppContainer, StateDescription, JsonViewerContainer } from './app.styles';

const nomesPaginas = {
    HOME: "home",
    MESSAGES: "messages"
}

export default class App extends React.Component {
    state = {
        loggedIn: false,
        pagina: nomesPaginas.HOME
    }

    logIn = () => {
        this.setState({loggedIn: true});
    }

    logOut = () => {
        this.setState({loggedIn: false});
    }

    onClickPaginaHome = () => {
        this.setState({
            pagina: nomesPaginas.HOME
        });
    }
    onClickPaginaMessages = () => {
        this.setState({
            pagina: nomesPaginas.MESSAGES
        });
    }

    onEditStateJson = ({updated_src}) => {
        this.setState({...updated_src});
    }

    render() {

        const obterPagina = () => {
        
            switch(this.state.pagina) {
                case nomesPaginas.HOME:
                    return <Home/>
                case nomesPaginas.MESSAGES:
                    return <MessagesPage/>
                default: 
                    return <Home/>
            }
        }
        return (
            <>
                <Navbar 
                    isUserLoggedIn={this.state.loggedIn} 
                    logIn={this.logIn} 
                    logOut={this.logOut}
                    onClickPaginaHome={this.onClickPaginaHome}
                    onClickPaginaMessages={this.onClickPaginaMessages}
                />
                <AppContainer>
                    <StateDescription>Abaixo, veja os estados dos componentes</StateDescription>
                    <JsonViewerContainer>
                        <JsonViewer 
                            component={"App"}
                            src={this.state} 
                            onEdit={this.onEditStateJson}
                        />
                    </JsonViewerContainer>
                    {obterPagina()}
                </AppContainer>
            </>
        )
    }
}