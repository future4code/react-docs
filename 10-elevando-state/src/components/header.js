import React from 'react';
import styled from 'styled-components';
import { dark, light } from '../constants';
import DarkModeToggle from "react-dark-mode-toggle";

export const HeaderContainer = styled.nav`
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${props => props.theme === 'light' ? light.primary : dark.primary};
`;

export const Button = styled.a`
    text-decoration: none;
    box-sizing: border-box;
    display: inline-block;
    padding: 22px;
    color: ${props => props.theme === 'light' ? light.text : dark.text};
    font-size: 1.5rem;
    :hover {
        cursor: pointer;
        background-color: ${props => {
            return props.theme === 'light' ? light.primary : dark.primary
        }};
    }
`;

export const Header = ({ theme, toggleTheme }) => {
    return (
        <HeaderContainer theme={theme}>
            <DarkModeToggle
                onChange={toggleTheme}
                checked={theme === 'dark'}
                size={80}
            />
            <Button theme={theme}>
                Home
            </Button>
            <Button theme={theme}>
                Botão 2
            </Button>
            <Button theme={theme}>
                Botão 3
            </Button>
        </HeaderContainer>
    )
}