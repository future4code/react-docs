import React from 'react';
import { Navbar, JsonViewer } from './components';
import { Home, MessagesPage, ObjectPage } from './pages';
import { AppContainer, StateDescription, JsonViewerContainer } from './app.styles';

const pageNames = {
    HOME: "home",
    MESSAGES: "messages",
    OBJECT: "object"
}

export default class App extends React.Component {
    state = {
        loggedIn: false,
        page: pageNames.HOME
    }

    logIn = () => {
        this.setState({loggedIn: true});
    }

    logOut = () => {
        this.setState({loggedIn: false});
    }

    onClickHomePage = () => {
        this.setState({
            page: pageNames.HOME
        });
    }

    onClickMessagesPage = () => {
        this.setState({
            page: pageNames.MESSAGES
        });
    }

    onClickObjectPage = () => {
        this.setState({
            page: pageNames.OBJECT
        });
    }

    onEditStateJson = ({updated_src}) => {
        this.setState({...updated_src});
    }

    render() {

        const getPage = () => {
            switch(this.state.page) {
                case pageNames.HOME:
                    return <Home/>
                case pageNames.MESSAGES:
                    return <MessagesPage/>
                case pageNames.OBJECT:
                    return <ObjectPage/>
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
                    onClickHomePage={this.onClickHomePage}
                    onClickMessagesPage={this.onClickMessagesPage}
                    onClickObjectPage={this.onClickObjectPage}
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
                    {getPage()}
                </AppContainer>
            </>
        )
    }
}