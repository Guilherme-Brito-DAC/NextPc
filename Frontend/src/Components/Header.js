import React from 'react'
import { NavbarBrand, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import Logomarca from '../imgs/Logo.png'
import './Header.css'

export default function Header(Prop) {
  function VerificaUsuario() {
    if (Prop.Usuario !== null) {
      return <div>
        <NavLink tag={Link} className="NavLink" className="btn btn-success" title="Conta" to="/conta" >Conta</NavLink>
      </div>
    }
    else {
      return <div className="loginECadastro">
        <NavLink tag={Link} className="btn btn-success" title="Cadastro" to="/cadastro" >Cadastro</NavLink>
        <NavLink tag={Link} className="NavLink" title="Login" to="/login" >Login</NavLink>
      </div>
    }
  }

  function VerificaModoNoturno() {
    if (!Prop.NightMode) {
      return <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/30/585858/external-Night-essential-collection-bearicons-glyph-bearicons.png" alt="" id="nightModeOn" className="nightModeOn" />
    }
    else {
      return <img src="https://img.icons8.com/fluency-systems-filled/30/9e9ea7/sun.png" alt="" id="nightModeOff" className="nightModeOff" />
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavbarBrand className="navbar-brand" tag={Link} to="/">
            <img src={Logomarca} className="logo" alt="" />
          </NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="https://img.icons8.com/material-outlined/24/585858/menu--v1.png" alt=""/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink tag={Link} className="NavLink" title="Monte Seu PC" to="/pc"><img src="https://img.icons8.com/ios-filled/20/9e9ea7/wrench.png" alt="" />Monte seu PC</NavLink>
              <NavLink tag={Link} className="NavLink" title="Comunidade" to="/comunidade"><img src="https://img.icons8.com/ios-glyphs/20/9e9ea7/monitor.png" alt="" />PCs Prontos</NavLink>
              <NavLink tag={Link} className="NavLink" title="Peças" to="/pecas/cpu/1"><img src="https://img.icons8.com/ios-glyphs/20/9e9ea7/search--v1.png" alt="" /> Procurar Peças</NavLink>
            </div>
          </div>
          <button type="button" className="ModoNoturno" onClick={() => Prop.SetNightMode(!Prop.NightMode)}  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Modo Noturno">
              {VerificaModoNoturno()}
          </button>
          {VerificaUsuario()}
        </div>
      </nav>

    </>
  )
}
