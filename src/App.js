import {Route,Routes,Link,BrowserRouter} from "react-router-dom";
import Cadastro from './componentes/paginas/TeladeCadastro/Cadastro';
import Login from './componentes/paginas/TeladeLogin/Login';
import AlterarSenhaEmail from './componentes/paginas/Alterar_sen_email';
import TelaInicio from './componentes/paginas/TelaInicial/TelaInicio';
import Container from './componentes/layout/Container';
import AdicionarDespensa from "./componentes/paginas/AdicionarDespensa";
import AdicionarCategoria from "./componentes/paginas/AdicionarCategoria";
import EditarCategoria from "./componentes/paginas/EditarCategoria";
import EditarDespensa from "./componentes/paginas/EditarDespensa";
import AdicionarProduto  from "./componentes/paginas/AdicionarProduto";
<<<<<<< HEAD
import TotalProdutos from "./componentes/paginas/TotalProdutos/TotalProdutos";
=======
import TotalProdutos from "./componentes/paginas/TotalProdutos";
>>>>>>> f56dd81b663274154f7dd2e473768d0c811e8663
 
function App() {
  return (
    <BrowserRouter>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/produto/adicionar'element={<AdicionarProduto/>}/>
          <Route exact path='/despensa/editar' element={<EditarDespensa/>}/>
          <Route exact path='/categoria/editar' element={<EditarCategoria/>} />
          <Route exact path='/categoria/adicionar' element={<AdicionarCategoria/>} />
          <Route exact path='/despensa/adicionar' element={<AdicionarDespensa/>} />
          <Route exact path='/cadastro' element={<Cadastro />} />
          <Route exact path='/alterarSenha' element={<AlterarSenhaEmail />} />
          <Route exact path='/home' element={<TelaInicio />} />
          <Route exact path='/produtos' element={<TotalProdutos/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;