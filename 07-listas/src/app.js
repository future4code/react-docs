import React from 'react';
import {
    PostsPage,
} from './app.styles';
import { 
    PostsInput, 
    Posts, 
    Post,     
    PostsContainer,
    PostContainer,
    PostTitle,
    PostBody 
} from './components';

const defaultPosts = [
    { id: 0, body: "Lorem ipsum etc", title: "Post 1"},
    { id: 1, body: "Lorem ipsum etc", title: "Post 2"},
    { id: 2, body: "Lorem ipsum etc", title: "Post 3"},
    { id: 3, body: "Lorem ipsum etc", title: "Post 4"}
]

export default class App extends React.Component {
    state = {
        posts: defaultPosts
    }

    addPost = (post) => {
        const posts = [...this.state.posts, {
            id: this.state.posts.length,
            ...post
        }];
        this.setState({ posts });
    }

    deletePost = (id) => {
        const posts = this.state.posts.filter(post => post.id !== id);
        this.setState({ posts });
    }

    render() {
        // Podemos fazer o this.state.posts.map aqui mesmo neste componente:
        const getPosts = () => (
            <PostsContainer>
                {this.state.posts.map((post) => (
                    <PostContainer onClick={() => this.deletePost(post.id)} key={post.id}>
                        <PostTitle>
                            <span>[{post.id}]</span>
                            <p>{post.title}</p>
                        </PostTitle>
                        <PostBody>
                            {post.body}
                        </PostBody>
                    </PostContainer>
                ))}
            </PostsContainer>
        )

        // Podemos também criar um componente que lida com a renderização de cada item da lista, 
        // e passar cada item para ele como props:
        // const getPosts = () => (
        //     <PostsContainer>
        //         {this.state.posts.map((post) => <Post key={post.id} post={post} onClickPost={this.deletePost}/>)}
        //     </PostsContainer>
        // )

        // Ou ainda, podemos abstrair essa lógica para um componente Posts que recebe a lista e cuida da 
        // iteração pela lista e da renderização de cada componente:
        // const getPosts = () => <Posts onClickPost={this.deletePost} posts={this.state.posts} />
        
        return (
            <>
                <h3>Veja os posts e insira novos.</h3>
                <PostsPage>
                    {getPosts()}
                    <PostsInput addPost={this.addPost}/>
                </PostsPage>
            </>
        )
    }
}