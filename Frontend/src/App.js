import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Pecas from './Pages/Pecas'
import Home from './Pages/Home'
import Comunidade from './Pages/Comunidade'
import PCs from './Pages/PCs'
import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro'
import Conta from './Pages/Conta'
import './App.css'

function App() {

  const [Usuario, SetUsuario] = useState(null);
  const [NightMode, SetNightMode] = useState(false);
  const [Tamanho,SetTamanho] = useState("17 rem");
  const [Pesquisa, SetPesquisa] = useState("");
  const root = document.querySelector(':root');

  if (NightMode) {
    root.style.setProperty('--CorFundo', '#212121');
    root.style.setProperty('--CorFonte', '#757475');
    root.style.setProperty('--Navbar', '#151515');
    root.style.setProperty('--FonteInput', 'white');
  }
  else {
    root.style.setProperty('--CorFundo', '#f1f1f1');
    root.style.setProperty('--CorFonte', '#585858');
    root.style.setProperty('--Navbar', 'white');
    root.style.setProperty('--FonteInput', '#9e9ea7');
  }

  return (
    <>
      <Router>
        <Header Usuario={Usuario} NightMode={NightMode} SetNightMode={SetNightMode}/>
        <div className="fakeNav"></div>
        <div className="container">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pc" component={PCs} >
            <PCs />
          </Route>
          <Route path="/pecas">
            <Pecas Pesquisa={Pesquisa} SetPesquisa={SetPesquisa} Tamanho={Tamanho} SetTamanho={SetTamanho}/>
          </Route>
          <Route path="/comunidade" component={Comunidade} >
            <Comunidade />
          </Route>
          <Route path="/login" component={Login} >
            <Login />
          </Route>
          <Route path="/cadastro" component={Cadastro} >
            <Cadastro />
          </Route>
          <Route path="/conta" component={Conta} >
            <Conta />
          </Route>
        </div>
        <Footer />
      </Router>
    </>
  )
}
export default App
