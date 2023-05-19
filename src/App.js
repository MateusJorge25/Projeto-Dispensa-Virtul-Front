import {Route,Routes,BrowserRouter} from "react-router-dom";
import Cadastro from './componentes/paginas/TeladeCadastro/Cadastro';
import Login from './componentes/paginas/TeladeLogin/Login';
import AlterarSenhaEmail from './componentes/paginas/AlterarSenha/Alterar_sen_email';
import TelaInicio from './componentes/paginas/TelaInicial/TelaInicio';
import Container from './componentes/layout/Container';
import AdicionarDespensa from "./componentes/paginas/AdicionarDespensa/AdicionarDespensa";
import AdicionarCategoria from "./componentes/paginas/AdicionarCategoria/AdicionarCategoria";
import EditarCategoria from "./componentes/paginas/EditarCategoria/EditarCategoria";
import EditarDespensa from "./componentes/paginas/EditarDespensa/EditarDespensa";
import AdicionarProduto  from "./componentes/paginas/AdicionarProdutos/AdicionarProduto";
import TotalProdutos from "./componentes/paginas/TotalProdutos/TotalProdutos";
import EditarProdutos from "./componentes/paginas/EditarProdutos/EditarProduto";
import ProdutoListCompras from "./componentes/paginas/AddProdutoLC/ProdutoListCompras";
import ListaCompra from "./componentes/paginas/ListaCompra/ListaC";
import Despesas from "./componentes/paginas/Despesas/Despesa";
import RedefinirSenha from "./componentes/paginas/RedefSenha/RedefSenha";


function App() {
  return (
    <BrowserRouter>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/senha/redefinir' element={<RedefinirSenha/>}/>
          <Route path='/despensas/:id' element={<Despesas/>}/>
          <Route exact path='/listadecompras' element={<ListaCompra/>}/>
          <Route exact path='/produto/listCompras' element={<ProdutoListCompras/>}/>
          <Route exact path='/produto/editar'element={<EditarProdutos/>}/>
          <Route exact path='/produto/adicionar'element={<AdicionarProduto/>}/>
          <Route exact path='/despensa/editar' element={<EditarDespensa/>}/>
          <Route exact path='/categoria/editar' element={<EditarCategoria/>} />
          <Route exact path='/categoria/adicionar' element={<AdicionarCategoria/>} />
          <Route exact path='/despensa/adicionar' element={<AdicionarDespensa/>} />
          <Route exact path='/cadastro' element={<Cadastro />} />
          <Route exact path='/alterarSenha' element={<AlterarSenhaEmail />} />
          <Route path='/home/:id' element={<TelaInicio />} />
          <Route exact path='/produtos' element={<TotalProdutos/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;


