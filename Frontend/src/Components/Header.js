import React , {useState}from 'react'
import { NavbarBrand, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import Logomarca from '../imgs/Logo.png'
import './Header.css'

export default function Header(Prop) {

  const [Pesquisa, SetPesquisa] = useState("");

  function VerificaUsuario() {
    if (Prop.Usuario != null) {
      return <div>
        <NavLink tag={Link} className="cta" title="Conta" to="/conta" >Conta</NavLink>
      </div>
    }
    else {
      return <div className="loginECadastro">
        <NavLink tag={Link} className="cta" title="Cadastro" to="/cadastro" >Cadastro</NavLink>
        <NavLink tag={Link} title="Login" to="/login" >Login</NavLink>
      </div>
    }
  }

  function VerificaModoNoturno(){
    if(!Prop.NightMode){
      return <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/30/585858/external-Night-essential-collection-bearicons-glyph-bearicons.png" alt="" id="nightModeOn" className="nightModeOn"/>
    }
    else{
      return <img src="https://img.icons8.com/fluency-systems-filled/30/9e9ea7/sun.png" alt="" id="nightModeOff" className="nightModeOff"/>
    }
  }

  function HandleChange(event){
    SetPesquisa(event.target.value)
  }

  function HandleSubmit(event) {
    event.preventDefault()
    window.location.href = "/pecas?q=" + Pesquisa
  }

  return (
    <>
      <nav>
        <div>
          <NavbarBrand tag={Link} to="/">
            <img src={Logomarca} className="logo" alt="" />
          </NavbarBrand>
          <NavLink tag={Link} title="Monte Seu PC" to="/pc"><img src="https://img.icons8.com/ios-filled/20/9e9ea7/wrench.png"/>Monte seu PC</NavLink>
          <NavLink tag={Link} title="Comunidade" to="/comunidade"><img src="https://img.icons8.com/ios-glyphs/20/9e9ea7/monitor.png"/>PCs Prontos</NavLink>
          <NavLink tag={Link} title="Peças" to="/pecas"><img src="https://img.icons8.com/ios-glyphs/20/9e9ea7/search--v1.png"/> Procurar Peças</NavLink>
        </div>
        <div>
          <form action="" method="get" onSubmit={HandleSubmit}>
            <div className="pesquisa">
              <img src="https://img.icons8.com/ios-glyphs/20/9e9ea7/search--v1.png" alt=""/>
              <input type="text" value={Pesquisa} onChange={HandleChange} placeholder="Pesquisa uma Peça" />
            </div>
          </form>
          <button type="button" className="ModoNoturno" onClick={() => Prop.SetNightMode(!Prop.NightMode)}>
              {VerificaModoNoturno()}
          </button>
          {VerificaUsuario()}
        </div>

      </nav>
    </>
  )
}
