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
import { useEffect } from 'react/cjs/react.development'
import Admin from './Pages/Admin'

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

  useEffect(()=>{
    if(sessionStorage.getItem("token"))
    {
      SetToken(sessionStorage.getItem("token"))
      SetUsuario({
        "nome" : sessionStorage.getItem("nome"),
        "sobrenome" : sessionStorage.getItem("sobrenom"),
        "usuario" : sessionStorage.getItem("usuario"),
        "email" : sessionStorage.getItem("email"),
        "telefone" : sessionStorage.getItem("telefone"),
        "cpf" : sessionStorage.getItem("cpf"),
        "senha" : sessionStorage.getItem("senha"),
      })
    }
  },[])

  function Deslogar(){
    SetUsuario("")
    SetToken(null)
    sessionStorage.clear()
    window.location.reload()
  }

  return (
    <>
      <Router>
        <Header Usuario={Usuario} NightMode={NightMode} SetNightMode={SetNightMode} Deslogar={Deslogar} />
        <br />
        <div className="container">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pc">
            <PCs />
          </Route>
          <Route path="/admin">
            <Admin />
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
            <Cadastro SetUsuario={SetUsuario} SetToken={SetToken} />
          </Route>
          <Route path="/conta">
            <Conta Usuario={Usuario} SetUsuario={SetUsuario} Token={Token} Deslogar={Deslogar}/>
          </Route>
        </div>
      </Router>

      
    </>
  )
}
export default App
