import React, { useState, Component } from 'react'
import { Collapse, Container, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import Logomarca from '../imgs/logo.png'
import './Header.css'

export default function Header() {

  const [nightMode, setNightMode] = useState(false)

  const setModoNoturno = (event) => setNightMode(event.target.checked)

  return (
    <header>
      <Navbar className="navbar-expand-lg ng-white border-bottom" variant="dark" expand="lg">
        <Container>
          <NavbarBrand tag={Link} to="/">
            <img src={Logomarca} className="logo" />
          </NavbarBrand>
          <Collapse navbar>
            <ul className="navbar-nav flex-grow" style={{ gap: '10px' }}>
              <NavItem>
                <NavLink tag={Link} style={{ color: 'black' }} title="Monte Seu PC" className="btn btn-dark" to="/pc"><img src="https://img.icons8.com/external-prettycons-lineal-prettycons/30/000000/external-pc-tower-devices-prettycons-lineal-prettycons.png"/>Monte seu PC</NavLink>
              </NavItem>
              <br />
              <NavItem>
                <NavLink tag={Link} style={{ color: 'black' }} title="Peças" className="btn btn-dark" to="/pecas"><img src="https://img.icons8.com/ios-filled/30/000000/video-card.png"/> Pesquisar por Peças</NavLink>
              </NavItem>
              <br />
              <NavItem>
                <NavLink tag={Link} style={{ color: 'black' }} title="Comunidade" className="btn btn-dark" to="/comunidade"><img src="https://img.icons8.com/ios-filled/30/000000/comment-discussion.png"/> Comunidade</NavLink>
              </NavItem>
              <br />
              <NavItem>
                <NavLink tag={Link} style={{ color: 'black' }} title="Conta" className="btn btn-dark" to="/conta" ><img src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"/> Conta</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header >
  )
}
