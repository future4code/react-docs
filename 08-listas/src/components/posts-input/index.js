import {
    PostInputContainer,
    PostInput,
    PostTextArea,
    PostsLabel,
    PostsButton
} from './posts-input.styles';
import React from 'react';

class PostsInput extends React.Component {

    state = {
        title: "",
        body: ""
    }

    onChangeTitle = (e) => {
        this.setState({ title: e.target.value });
    }
    onChangeBody = (e) => {
        this.setState({ body: e.target.value });
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.addPost({
            title: this.state.title,
            body: this.state.body
        });
        this.setState({
            title: "",
            body: ""
        })
    }

    render() {
        return (
            <PostInputContainer>
                <form onSubmit={this.onFormSubmit}>
                    <PostsLabel htmlFor="title">Título</PostsLabel>
                    <PostInput id="title" value={this.state.title} onChange={this.onChangeTitle}/>
                    <PostsLabel htmlFor="body">Corpo</PostsLabel>
                    <PostTextArea id="body" value={this.state.body} onChange={this.onChangeBody}/>
                    <div><PostsButton type="submit" >Adicionar</PostsButton></div>
                </form>
            </PostInputContainer>
        )
    }
}

export { PostsInput }