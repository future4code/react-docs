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

    // Esta implementação é simples, porém gera um bug: veja o que acontece se:
    //  1. Apagar o primeiro item
    //  2. Adicionar um novo item
    //  3. Apagar o novo item
    // addPost = (post) => {
    //     const posts = [...this.state.posts, {
    //         id: this.state.posts.length,
    //         ...post
    //     }];
    //     this.setState({ posts });
    // }

    // Essa implementação é mais segura! A possibilidade de termos ids iguais é bem baixa desta maneira.
    addPost = (post) => {
        const newPosts = [...this.state.posts, {
            id: (Math.random() * 100000).toString(),
            ...post
        }];
        this.setState({ posts: newPosts });
    }

    deletePost = (id) => {
        const newPosts = this.state.posts.filter(post => post.id !== id);
        this.setState({ posts: newPosts });
    }

    onEditPost = (id) => {
        const postToEditIndex = this.state.posts.findIndex(post => post.id === id);
        const newTitle = prompt("Qual o novo título deste post?")
        const newBody = prompt("Qual o novo corpo deste post?");
        let editedPost = {
            id: this.state.posts[postToEditIndex].id,
            title: newTitle,
            body: newBody
        };
        const newPosts = [...this.state.posts];
        newPosts[postToEditIndex] = editedPost;
        this.setState({ posts: newPosts})
    }

    render() {
        // Podemos fazer o this.state.posts.map aqui mesmo neste componente:
        const getPosts = () => (
            <PostsContainer>
                {this.state.posts.map((post) => (
                    <PostContainer  key={post.id}>
                        <PostTitle onDelete={() => this.deletePost(post.id)} onEdit={() => this.onEditPost(post.id)}>
                            <div>
                                <span>[{post.id}]</span>
                                <p>{post.title}</p>
                            </div>
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
                <h3>Você pode ver, inserir, editar e remover os posts.</h3>
                <PostsPage>
                    {getPosts()}
                    <PostsInput addPost={this.addPost}/>
                </PostsPage>
            </>
        )
    }
}