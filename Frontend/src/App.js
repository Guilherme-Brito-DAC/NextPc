import { BrowserRouter as Router , Switch , Route } from 'react-router-dom' 
import Header from './Components/Header'
import Pecas from './Pages/Pecas'
import Home from './Pages/Home'
import Comunidade from './Pages/Comunidade'
import PCs from './Pages/PCs'
import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro'
import Conta from './Pages/Conta'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Header />
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/pc" component={PCs} />
            <Route path="/pecas" component={Pecas} />
            <Route path="/comunidade" component={Comunidade} />
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/conta" component={Conta} />
          </main>
      </Router>
    </>
  )
}
export default App
