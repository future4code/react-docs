import React from 'react';
import styled from 'styled-components';
import { dark, light } from '../constants';
import logo from '../img/labenu.png';

const FooterStyled = styled.footer`
    height: 20vh;
    border-top: 10px #FE7E02 solid;
    background-color: ${props => props.theme === 'light' ? light.primary : dark.primary};
    display: flex;
    justify-content: space-between;
    img {
        height: 100px;
        padding: 10px;
    }
    p {
        padding: 10px;
        display: inline-block;
        color: ${props => props.theme === 'light' ? light.text : dark.text};
    }
`;
export const Footer = ({ theme }) => {
    return (
        <FooterStyled theme={theme}>
            <img src={logo}/>
            <p>Feito pela Labenu para os seus estudantes {'<3'}</p>
        </FooterStyled>
    )
};