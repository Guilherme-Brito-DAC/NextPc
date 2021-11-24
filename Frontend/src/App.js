import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header'
import Pecas from './Pages/Pecas'
import Home from './Pages/Home'
import PcPronto from './Pages/PcPronto'
import PCs from './Pages/PCs'
import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro'
import Conta from './Pages/Conta'
import './App.css'

function App() {

  const [Usuario, SetUsuario] = useState(null);
  const [Token, SetToken] = useState("");
  const [NightMode, SetNightMode] = useState(false);
  const [Tamanho, SetTamanho] = useState("17 rem");
  const root = document.querySelector(':root');

  if (NightMode) {
    root.style.setProperty('--CorFundo', '#212121');
    root.style.setProperty('--CorFonte', '#757475');
    root.style.setProperty('--Navbar', '#151515');
    root.style.setProperty('--FonteInput', 'white');
    root.style.setProperty('--BlackEWhite', 'white');
    root.style.setProperty('--CorFundoForm', '#333333');
  }
  else {
    root.style.setProperty('--CorFundo', '#f1f1f1');
    root.style.setProperty('--CorFonte', '#585858');
    root.style.setProperty('--Navbar', 'white');
    root.style.setProperty('--FonteInput', '#9e9ea7');
    root.style.setProperty('--BlackEWhite', 'black');
    root.style.setProperty('--CorFundoForm', 'white');
  }

  return (
    <>
      <Router>
        <Header Usuario={Usuario} NightMode={NightMode} SetNightMode={SetNightMode} />
        <br />
        <div className="container">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pc">
            <PCs />
          </Route>
          <Route path="/pecas/:peca/:pagina/:pesquisa?">
            <Pecas Tamanho={Tamanho} SetTamanho={SetTamanho} />
          </Route>
          <Route path="/pcpronto/:pagina/:pesquisa?">
            <PcPronto Tamanho={Tamanho} SetTamanho={SetTamanho} />
          </Route>
          <Route path="/login">
            <Login SetUsuario={SetUsuario} SetToken={SetToken} />
          </Route>
          <Route path="/cadastro">
            <Cadastro />
          </Route>
          <Route path="/conta">
            <Conta Usuario={Usuario} Token={Token} />
          </Route>
        </div>
      </Router>

      
    </>
  )
}
export default App
