import {Route,Routes,BrowserRouter} from "react-router-dom";
import Cadastro from './componentes/paginas/TeladeCadastro/Cadastro';
import Login from './componentes/paginas/TeladeLogin/Login';
import AlterarSenhaEmail from './componentes/paginas/AlterarSenha/Alterar_sen_email';
import TelaInicio from './componentes/paginas/TelaInicial/TelaInicio';
import Container from './componentes/layout/Container';
import AdicionarDespensas from "./componentes/paginas/AdicionarDespensas/AdicionarDespensas";
import AdicionarCategoria from "./componentes/paginas/AdicionarCategoria/AdicionarCategoria";
import EditarCategoria from "./componentes/paginas/EditarCategoria/EditarCategoria";
import EditarDespensas from "./componentes/paginas/EditarDespensas/EditarDespensas";
import AdicionarProduto  from "./componentes/paginas/AdicionarProdutos/AdicionarProduto";
import TotalProdutos from "./componentes/paginas/TotalProdutos/TotalProdutos";
import EditarProdutos from "./componentes/paginas/EditarProdutos/EditarProduto";
import ProdutoListCompras from "./componentes/paginas/AddProdutoLC/ProdutoListCompras";
import ListaCompra from "./componentes/paginas/ListaCompra/ListaC";
import Despesas from "./componentes/paginas/Despesas/Despesa";
import RedefinirSenha from "./componentes/paginas/RedefSenha/RedefSenha";
import TelaVerItem from "./componentes/paginas/TelaVerItem/TelaVerItem";


function App() {
  return (
    <BrowserRouter>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/alterar-senha/:tokenparam' element={<RedefinirSenha />}/>
          <Route path='/despensas/:id' element={<Despesas/>}/>
          <Route exact path='/listadecompras' element={<ListaCompra/>}/>
          <Route exact path='/produto/listCompras' element={<ProdutoListCompras/>}/>
          <Route path='/produto/editar/:id'element={<EditarProdutos/>}/>
          <Route path='/produto/adicionar/:id'element={<AdicionarProduto/>}/>
          <Route path='/despensa/editar/:id' element={<EditarDespensas/>}/>
          <Route exact path='/categoria/editar' element={<EditarCategoria/>} />
          <Route exact path='/categoria/adicionar' element={<AdicionarCategoria/>} />
          <Route path='/despensa/adicionar/:id' element={<AdicionarDespensas/>} />
          <Route exact path='/cadastro' element={<Cadastro />} />
          <Route exact path='/alterarSenha' element={<AlterarSenhaEmail />} />
          <Route path='/home/:id' element={<TelaInicio />} />
          <Route path='/produtos/:id' element={<TotalProdutos/>}/>
          <Route path='/produto/info/:id' element={<TelaVerItem/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;


