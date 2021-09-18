import React from 'react';
import { 
    AppContainer, 
    AvisoContainer, 
    ObjectContainer, 
    JsonViewerContainer,
    HeroInfoContainer,
    HeroPowersContainer,
} from './app.styles.js';
import { JsonViewer } from '../components/json-viewer';

export default class ObjectPage extends React.Component {
    state = {
        superHero: {
            name: "Spider Man",
            secretIdentity: "Peter Parker",
            uncle: "Uncle Ben",
            aunt: "Aunt May",
            superPowers: [
                "Super strength",
                "Wall climbing",
                "Web shooting"
            ]

        }
    }

    saveMessage = (e) => {
        e.preventDefault();
        const messages = [...this.state.messages, {
            text: this.state.message,
            id: this.state.messages.length
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

    onDeleteState = ({updated_src}) => {
        if(updated_src.superHero) {
            console.log(updated_src);
            this.setState({...updated_src});
            return true;
        } else {
            return false;
        }
        
    }
    render() {
        return (
            <AppContainer>
                <h3>Edite o objeto e veja as mudanças</h3>
                <JsonViewerContainer >
                    <JsonViewer 
                        src={this.state} 
                        onEdit={this.onEditStateJson}
                        onDelete={this.onDeleteState}
                        onAdd={this.onEditStateJson}
                        component={"ObjectPage"}
                    />
                </JsonViewerContainer>
                <ObjectContainer>
                    {this.state.superHero.name ? <HeroInfoContainer>{this.state.superHero.name}</HeroInfoContainer> : <AvisoContainer>Super-herói sem nome :(</AvisoContainer>}
                    {this.state.superHero.secretIdentity ? <HeroInfoContainer>{this.state.superHero.secretIdentity}</HeroInfoContainer> : <AvisoContainer>Não sabemos a identidade deste super-herói.</AvisoContainer>}
                    {this.state.superHero.aunt ? <HeroInfoContainer>{this.state.superHero.aunt}</HeroInfoContainer> : <AvisoContainer>Não conhecemos a tia deste super-herói.</AvisoContainer>}
                    {this.state.superHero.uncle ? <HeroInfoContainer>{this.state.superHero.uncle}</HeroInfoContainer> : <AvisoContainer>Não conhecemos o tio deste super-herói.</AvisoContainer>}
                    {this.state.superHero.superPowers?.length ? this.state.superHero.superPowers.map((power, index) => {
                        return <HeroPowersContainer key={index}>{power}</HeroPowersContainer>
                    }) : <AvisoContainer>Este super herói não tem super poderes.</AvisoContainer>}
                </ObjectContainer>
            </AppContainer>
        )
    }
}