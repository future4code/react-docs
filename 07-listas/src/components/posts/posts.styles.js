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
    div:nth-child(1) {
        font-weight: bold;
        padding: 5px;
        background-color: #f0fff0;
        margin-right: 20px;
        margin-top: 0;
        border: 1px solid black;
        width: 15px;
    }
`;

export const PostTitle = styled.h3``;

export const PostBody = styled.p``;