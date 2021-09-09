import { NavbarContainer, Button } from './navbar.styles';

export const Navbar = ({ isUserLoggedIn, logIn, logOut }) => {
    return (
        <NavbarContainer>
            <Button>
                Home
            </Button>
            <Button>
                Botão 2
            </Button>
            <Button>
                Botão 3
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