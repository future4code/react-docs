import {
    PostsContainer,
    PostContainer,
    PostTitleContainer,
    PostBody,
    PostButton
} from './posts.styles';

export const PostTitle = ({onEdit, onDelete, children}) => {
    return (
        <PostTitleContainer>
            {children}
            <div>
                <PostButton onClick={onDelete}>X</PostButton>
                <PostButton onClick={onEdit}>E</PostButton>
            </div>
        </PostTitleContainer>
    )
}
export const Post = ({ post, onEdit, onDelete, key }) => {
    console.log("key:",key); // Veja como a key não é passada como props!
    // Ela tem a sintaxe de uma props, mas só serve para a organização do React.
    return (
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
    )
}

export const Posts = ({ posts, onClickPost }) => {
    return (
        <PostsContainer>
            {posts.map((post) => <Post key={post.id} post={post} onClickPost={() => onClickPost(post.id)} />)}
        </PostsContainer>
    )
}

