import React from 'react';
import { AppContainer, MenuContainer, JsonViewerContainer } from './app.styles';
import { JsonViewer } from '../components/json-viewer';
// importamos as páginas da aplicação para renderizá-las condicionalmente aqui.
import Home from './pages/home';
import Login from './pages/login';
import Cadastro from './pages/cadastro';

/**
 * Objeto nomePaginas criado para não termos que repetir as strings dos nomes das
 * páginas. Trata-se de uma boa prática.
 * Além disso, nomes de constantes costumam estar em maiúsculas. 
 */
const pageNames = {
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
        page: pageNames.HOME
    };

    /**
     * Ao invés de fazer uma função para cada troca de página, poderíamos ter
     * passado () => this.setState({pagina: nomePaginas.X}) para cada botão.
     * Essa opção se chama 'função inline'. Porém, é melhor com uma função declarada
     * no corpo da classe, um método, pois torna o código mais legível no caso de 
     * funções maiores e mais complexas. 
     */
    onClickHomePage = () => {
        this.setState({
            page: pageNames.HOME
        });
    }
    onClickLoginPage = () => {
        this.setState({
            page: pageNames.LOGIN
        });
    }
    onClickCadastroPage = () => {
        this.setState({
            page: pageNames.CADASTRO
        });
    }

    onEditStateJson = ({updated_src}) => {
        this.setState({...updated_src});
    }

    render() {
        const getPage = () => {
/**
 * O switch decide qual página deve ser retornada com base no valor do estado.
 */
            switch(this.state.pagina) {
                case pageNames.HOME:
                    return <Home/>
                case pageNames.LOGIN:
                    return <Login/>
                case pageNames.CADASTRO:
                    return <Cadastro/>
                default: 
                    return <Home />
            }
        }
        return (
            <>
        {/**Para renderizar a página, basta chamar a função que retorna a página com base no valor do estado. */}
                <AppContainer>
                <JsonViewerContainer>
                    <JsonViewer 
                        src={this.state} 
                        onEdit={this.onEditStateJson}
                        component={"App"}
                    />
                </JsonViewerContainer>
                    {getPage()}
                </AppContainer>
                <MenuContainer>
                    <button onClick={this.onClickHomePage}>
                        Home
                    </button>
                    <button onClick={this.onClickLoginPage}>
                        Login
                    </button>
                    <button onClick={this.onClickCadastroPage}>
                        Cadastro
                    </button>
                </MenuContainer>
            </>
        )
    }
}