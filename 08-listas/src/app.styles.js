import styled from 'styled-components';

export const PostsPage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    alignt-items: center;
    height: 90vh;
`;

export const PostsContainer = styled.div`
width: 30vw;
padding: 20px;
border: 1px solid black;
overflow-y: scroll;
`;

export const PostContainer = styled.div`
border: 1px solid black;
margin: 10px auto;
div:nth-child(1) {
    font-size: 2rem;
    padding: 5px;
    background-color: #f0fff0;
    margin-right: 20px;
    border: 1px solid black;
}
div {
    display: inline-block;
}
`;

export const PostTitle = styled.h3``;

export const PostBody = styled.p``;