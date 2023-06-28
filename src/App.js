import {Route,Routes,BrowserRouter} from "react-router-dom";
import Cadastro from './componentes/paginas/TeladeCadastro/Cadastro';
import Login from './componentes/paginas/TeladeLogin/Login';
import AlterarSenhaEmail from './componentes/paginas/AlterarSenha/Alterar_sen_email';
import TelaInicio from './componentes/paginas/TelaInicial/TelaInicio';
import Container from './componentes/layout/Container';
import AdicionarDespensas from "./componentes/paginas/AdicionarDespensas/AdicionarDespensas";
import AdiciCategoria from "./componentes/paginas/AdicionarCategoria/AdicionarCategoria";
import EditarCategoria from "./componentes/paginas/EditarCategoria/EditarCategoria";
import EditarDespensas from "./componentes/paginas/EditarDespensas/EditarDespensas";
import AdicionarProduto  from "./componentes/paginas/AdicionarProdutos/AdicionarProduto";
import TotalProdutos from "./componentes/paginas/TotalProdutos/TotalProdutos";
import EditarProdutos from "./componentes/paginas/EditarProdutos/EditarProduto";
import ProdutoListCompras from "./componentes/paginas/AddProdutoLC/ProdutoListCompras";
import ListaCompra from "./componentes/paginas/ListaCompra/ListaC";
import Despensas from "./componentes/paginas/Despensas/Despensa";
import RedefinirSenha from "./componentes/paginas/RedefSenha/RedefSenha";
import TelaVerItem from "./componentes/paginas/TelaVerItem/TelaVerItem";
import TotalCategorias from "./componentes/paginas/TelaCategoria/TotalCategorias";
import TelaProdutosVencidos from "./componentes/paginas/TelaProdutosVencidos/TelaProdutosVencidos";
import TelaProdutosAVencer from "./componentes/paginas/TelaProdutosAVencer/TelaProdutosAVencer";


function App() {
  return (
    <BrowserRouter>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/alterar-senha/:tokenparam' element={<RedefinirSenha />}/>
          <Route path='/despensas/:id' element={<Despensas/>}/>
          <Route path='/listadecompras/:id' element={<ListaCompra/>}/>
          <Route path='/adicionar/listCompras/:id' element={<ProdutoListCompras/>}/>
          <Route path='/produto/editar/:id'element={<EditarProdutos/>}/>
          <Route path='/produto/adicionar/:id'element={<AdicionarProduto/>}/>
          <Route path='/despensa/editar/:id' element={<EditarDespensas/>}/>
          <Route path='/categoria/editar/:id' element={<EditarCategoria/>} />
          <Route path='/categoria/adicionar/:id' element={<AdiciCategoria/>} />
          <Route path='/despensa/adicionar/:id' element={<AdicionarDespensas/>} />
          <Route exact path='/cadastro' element={<Cadastro />} />
          <Route exact path='/alterarSenha' element={<AlterarSenhaEmail />} />
          <Route path='/home/:id' element={<TelaInicio />} />
          <Route path='/produtos/:id' element={<TotalProdutos/>}/>
          <Route path='/produto/info/:id' element={<TelaVerItem/>}/>
          <Route path='/categorias/:id' element={<TotalCategorias/>}/>
          <Route path="/produtos/vencidos/:id" element={<TelaProdutosVencidos/>}/>
          <Route path="/produtos/AVencer/:id" element={<TelaProdutosAVencer/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;


