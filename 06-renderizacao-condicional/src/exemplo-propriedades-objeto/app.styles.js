import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const AvisoContainer = styled.p`
    color: red;
    font-weight: normal;
`;

export const HeroInfoContainer = styled.p`
`;

export const HeroPowersContainer = styled.p`
    color: green;
`;

export const ObjectContainer = styled.div`
    // margin: 0 100px 10px;
    margin-left: 400px;
    height: 50vh;
    width: 40vw;
    text-align: center;
    border: 1px solid black;
`;

export const JsonViewerContainer = styled.div`
    position: absolute;
    top: 200px;
    left: 0;
    max-height: 300px;
    width: 40vw;
    left: 0;
    border: 1px solid black;
    overflow-y: scroll;
    text-align: left;
`;