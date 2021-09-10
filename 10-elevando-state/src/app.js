import React from 'react';
import {
    Header,
    Main,
    Footer
} from './components';

export default class App extends React.Component {
    state = {
        theme: 'dark'
    }

    toggleTheme = () => {
        if(this.state.theme === 'dark') {
            this.setState({ theme: 'light' });
        } else {
            this.setState({ theme: 'dark' });
        }
    }
    render = () => {
        return (
            <>
                <Header theme={this.state.theme} toggleTheme={this.toggleTheme}/>
                <Main theme={this.state.theme}/>
                <Footer theme={this.state.theme}/>
            </>
        )
    }
}