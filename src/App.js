import {Route,Routes,Link,BrowserRouter} from "react-router-dom";
import Cadastro from './componentes/paginas/Cadastro';
import Login from './componentes/paginas/Login';
import EsqSenha from './componentes/paginas/EsqSenha';
import AlterarSenhaEmail from './componentes/paginas/Alterar_sen_email';
import TelaInicio from './componentes/paginas/TelaInicio';
import Container from './componentes/layout/Container';

import './'


function App() {
  return (
    <BrowserRouter>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/cadastro' element={<Cadastro />} />
          <Route exact path='/esqSenha' element={<EsqSenha />} />
          <Route exact path='/alterarSenha' element={<AlterarSenhaEmail />} />
          <Route exact path='/home' element={<TelaInicio />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;