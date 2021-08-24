import React from 'react';
import { AppContainer, MenuContainer } from './app.styles';
// importamos as páginas da aplicação para renderizá-las condicionalmente aqui.
import Home from './pages/home';
import Login from './pages/login';
import Cadastro from './pages/cadastro';

/**
 * Objeto nomePaginas criado para não termos que repetir as strings dos nomes das
 * páginas. Trata-se de uma boa prática.
 * Além disso, nomes de constantes costumam estar em maiúsculas. 
 */
const nomesPaginas = {
    HOME: "home",
    CADASTRO: "cadastro",
    LOGIN: "login"
}

/**
 * Componente App contém apenas a lógica para escolher qual página mostrar.
 * O conteúdo das páginas em si está em diferentes arquivos na pasta 'pages'
 */
export default class App extends React.Component {

    // Aqui, definimos a página inicial.
    state = {
        pagina: nomesPaginas.HOME
    };

    /**
     * Ao invés de fazer uma função para cada troca de página, poderíamos ter
     * passado () => this.setState({pagina: nomePaginas.X}) para cada botão.
     * Essa opção se chama 'função inline'. Porém, é melhor com uma função declarada
     * no corpo da classe, um método, pois torna o código mais legível no caso de 
     * funções maiores e mais complexas. 
     */
    onClickPaginaHome = () => {
        this.setState({
            pagina: nomesPaginas.HOME
        });
    }
    onClickPaginaLogin = () => {
        this.setState({
            pagina: nomesPaginas.LOGIN
        });
    }
    onClickPaginaCadastro = () => {
        this.setState({
            pagina: nomesPaginas.CADASTRO
        });
    }


    render() {

        const obterPagina = () => {
/**
 * O switch decide qual página deve ser retornada com base no valor do estado.
 */
            switch(this.state.pagina) {
                case nomesPaginas.HOME:
                    return <Home/>
                case nomesPaginas.LOGIN:
                    return <Login/>
                case nomesPaginas.CADASTRO:
                    return <Cadastro/>
            }
        }
        return (
            <>
        {/**Para renderizar a página, basta chamar a função que retorna a página com base no valor do estado. */}
                <AppContainer>
                    {obterPagina()}
                </AppContainer>
                <MenuContainer>
                    <button onClick={this.onClickPaginaHome}>
                        Home
                    </button>
                    <button onClick={this.onClickPaginaLogin}>
                        Login
                    </button>
                    <button onClick={this.onClickPaginaCadastro}>
                        Cadastro
                    </button>
                </MenuContainer>
            </>
        )
    }
}