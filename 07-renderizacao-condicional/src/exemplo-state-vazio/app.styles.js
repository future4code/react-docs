import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const AvisoContainer = styled.div`
    color: red;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MessageContainer = styled.div`
    padding: 5px;
    &:hover {
        cursor: pointer;
    }
`;

export const Input = styled.input`
    margin: 10px auto;
`;

export const MessagesContainer = styled.div`
    margin: 20px auto;
    height: 50vh;
    width: 50vw;
    text-align: center;
    border: 1px solid black;
    > ${MessageContainer}:nth-child(even) {
        background-color: rgb(200,200,225);
    }
`;

