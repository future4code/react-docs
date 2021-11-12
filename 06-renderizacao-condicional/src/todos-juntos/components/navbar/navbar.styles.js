import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: black;
`;

export const Button = styled.a`
    text-decoration: none;
    box-sizing: border-box;
    display: inline-block;
    padding: 22px;
    color: white;
    font-size: 1.5rem;
    :hover {
        cursor: pointer;
        background-color: grey;
    }
`;