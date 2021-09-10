import styled from 'styled-components';

export const AppContainer = styled.div`
    min-height: 50vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const StateDescription = styled.div`
    position: absolute;
    top: 10px;
    left: 0;
    text-align: left;
    width: 20vw;
    font-weight: bold;
`;

export const JsonViewerContainer = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    border: 1px solid black;
    text-align: left;
    width: 20vw;
`;