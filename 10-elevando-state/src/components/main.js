import React from 'react';
import styled from 'styled-components';
import { dark, light } from '../constants';

const MainContainer = styled.main`
    margin: 5px;
    background-color: ${props => props.theme === 'light' ? light.secondary : dark.secondary};
    display: flex;
    alignt-items: center;
    justify-content: center;
`;

const ArticleBody = styled.p`
    padding: 20px 0;
    width: 40%;
    font-size: 1.2rem;
    line-height: 150%;
    display: inline-block;
    color: ${props => props.theme === 'light' ? light.text : dark.text};
`;

export const Main = ({ theme }) => {
    return (
        <MainContainer theme={theme}>
            <ArticleBody theme={theme}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            <br/>
            <br/>

            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/>

            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            <br/>

            <br/>
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ArticleBody>
        </MainContainer>
    )
}