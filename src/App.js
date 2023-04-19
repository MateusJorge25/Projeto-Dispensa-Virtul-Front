import {Route,Routes,Link,BrowserRouter} from "react-router-dom";
import Cadastro from './componentes/paginas/Cadastro';
import Login from './componentes/paginas/Login';
import EsqSenha from './componentes/paginas/EsqSenha'
import Alterar_sen_email from './componentes/paginas/Alterar_sen_email'
import TelaInicio from './componentes/paginas/TelaInicio'
import Container from './componentes/layout/Container'
import Navegacao from './componentes/layout/Navegacao'


function App() {
  return (
    <BrowserRouter>
      <Container customClass='minHeight'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/Cadastro' element={<Cadastro />} />
          <Route exact path='/EsqSenha' element={<EsqSenha />} />
          <Route exact path='/Alterar_sen_email' element={<Alterar_sen_email />} />
          <Route exact path='/TelaInicio' element={<TelaInicio />} />
          <Route exact path='/Navbar' element={<Navegacao />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;