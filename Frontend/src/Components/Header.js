import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Logomarca from '../imgs/Logomarca.png'

export default function Header() {

  const [nightMode, setNightMode] = useState(false)

  const setModoNoturno = (event) => setNightMode(event.target.checked)

  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/">
            <img src={Logomarca} className="logo" />
          </Link>
          <div class="collapse navbar-collapse" id="navbarColor02" style={{float: 'right'}}>
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="/pc">Monte seu PC</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/pecas">Peças</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/comunidade">Comunidade</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/conta">Conta</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
