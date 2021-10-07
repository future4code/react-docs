import { NavbarContainer, Button } from './navbar.styles';

export const Navbar = ({ isUserLoggedIn, logIn, logOut, onClickHomePage, onClickMessagesPage, onClickObjectPage }) => {
    return (
        <NavbarContainer>
            <Button onClick={onClickHomePage}>
                Home
            </Button>
            <Button onClick={onClickMessagesPage}>
                Messages
            </Button>
            <Button onClick={onClickObjectPage}>
                Objeto
            </Button>
            {isUserLoggedIn ? 
                <Button onClick={logOut}>
                    Sair
                </Button>
            :
                <span>
                    <Button onClick={logIn}>
                        Entrar
                    </Button>
                </span>
            }
        </NavbarContainer>
    )
}