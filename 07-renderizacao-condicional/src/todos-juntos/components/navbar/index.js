import { NavbarContainer, Button } from './navbar.styles';

export const Navbar = ({ isUserLoggedIn, logIn, logOut, onClickPaginaHome, onClickPaginaMessages }) => {
    return (
        <NavbarContainer>
            <Button onClick={onClickPaginaHome}>
                Home
            </Button>
            <Button onClick={onClickPaginaMessages}>
                Messages
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