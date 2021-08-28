import React from 'react';
import { Navbar } from './navbar';
import { JsonViewer } from '../components/json-viewer';

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

    onEditStateJson = ({updated_src}) => {
        this.setState({...updated_src});
    }

    render() {
        return (
            <>
                <Navbar isUserLoggedIn={this.state.loggedIn} logIn={this.logIn} logOut={this.logOut}/>
                <div style={{position: 'relative'}}>
                <JsonViewer 
                    src={this.state} 
                    onEdit={this.onEditStateJson}
                />
                </div>
            </>
        )
    }
}