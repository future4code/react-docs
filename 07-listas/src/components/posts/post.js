import {
    PostsContainer,
    PostContainer,
    PostTitle,
    PostBody
} from './posts.styles';

export const Post = ({ post, onClickPost, key }) => {
    // console.log(key); // Descomente esse console.log para ver que a key não é passada como props!
    // Ela tem a sintaxe de uma props, mas só serve para a organização do React.
    return (
        <PostContainer onClick={() => onClickPost(post.id)} key={post.id}>
            <div>{post.id}</div>
            <div>
                <PostTitle>
                    {post.title}
                </PostTitle>
                <PostBody>
                    {post.body}
                </PostBody>
            </div>
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

