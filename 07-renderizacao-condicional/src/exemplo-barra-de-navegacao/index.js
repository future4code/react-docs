import React from 'react';
import { Navbar } from './navbar';

export default class App extends React.Component {
    state = {
        loggedIn: false
    }

    logIn = () => {
        this.setState({loggedIn: true});
    }

    logOut = () => {
        this.setState({loggedIn: false});
    }

    render() {
        return (
            <Navbar isUserLoggedIn={this.state.loggedIn} logIn={this.logIn} logOut={this.logOut}/>
        )
    }
}