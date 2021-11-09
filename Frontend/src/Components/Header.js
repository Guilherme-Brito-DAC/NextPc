import React, { useState, Component } from 'react'
import { Collapse, Container, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import Logomarca from '../imgs/Logo.png'
import './Header.css'

export default function Header() {

  const [nightMode, setNightMode] = useState(false)

  const setModoNoturno = (event) => setNightMode(event.target.checked)

  return (
    <div>
      <header>
            <NavbarBrand tag={Link} to="/">
              <img src={Logomarca} className="logo" />
            </NavbarBrand>
            <nav>
                <ul className="nav__links">
                    <li>
                    <NavLink tag={Link} title="Monte Seu PC" to="/pc"><img src="https://img.icons8.com/external-prettycons-lineal-prettycons/25/ffffff/external-pc-tower-devices-prettycons-lineal-prettycons.png"/>Monte seu PC</NavLink>
                    </li>
                    <li>
                    <NavLink tag={Link} title="Peças" to="/pecas"><img src="https://img.icons8.com/ios-filled/25/ffffff/video-card.png"/> Pesquisar por Peças</NavLink>
                    </li>
                    <li>
                    <NavLink tag={Link} title="Comunidade" to="/comunidade"><img src="https://img.icons8.com/ios-filled/25/ffffff/comment-discussion.png"/> Comunidade</NavLink>
                    </li>
                </ul>
            </nav>
            <NavLink tag={Link} title="Conta" className="cta" to="/conta" style={{color:'white'}}><img src="https://img.icons8.com/ios-glyphs/25/ffffff/user--v1.png"/> Conta</NavLink>
            <p className="menu cta">Menu</p>
        </header>
        <div className="overlay">
            <a className="close">&times;</a>
            <div className="overlay__content">
              <NavLink tag={Link} title="Monte Seu PC" to="/pc"><img src="https://img.icons8.com/external-prettycons-lineal-prettycons/25/ffffff/external-pc-tower-devices-prettycons-lineal-prettycons.png"/>Monte seu PC</NavLink>
              <NavLink tag={Link} title="Peças" to="/pecas"><img src="https://img.icons8.com/ios-filled/25/ffffff/video-card.png"/> Pesquisar por Peças</NavLink>
              <NavLink tag={Link} title="Comunidade" to="/comunidade"><img src="https://img.icons8.com/ios-filled/25/ffffff/comment-discussion.png"/> Comunidade</NavLink>
              <NavLink tag={Link} title="Conta" to="/conta" ><img src="https://img.icons8.com/ios-glyphs/25/ffffff/user--v1.png"/> Conta</NavLink>
            </div>
        </div>
    </div>
  )
}
