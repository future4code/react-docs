import styled from 'styled-components';

export const PostsContainer = styled.div`
    width: 30vw;
    padding: 20px;
    border: 1px solid black;
    overflow-y: scroll;
`;

export const PostContainer = styled.div`
    border: 1px solid black;
    margin: 10px auto;
    &:hover {
        cursor: pointer;
    }
`;

export const PostTitle = styled.div`
    background-color: #eeffee;
    width: 100%;
    span {
        font-weight: 600;
        display: inline-block;
        padding: 0 10px;
    }
    p {
        display: inline-block;
        margin: 0 10px;
        padding: 5px;
    }
`;

export const PostBody = styled.p``;