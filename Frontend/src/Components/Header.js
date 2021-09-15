import React, { useState } from 'react'
import './Header.css'
import { Button } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { Link } from 'react-router-dom'
import Logomarca from '../imgs/Logomarca.png'

function Header() {

  const [nightMode, setNightMode] = useState(false)

  const setModoNoturno = (event) => setNightMode(event.target.checked)

  return (
    <header>
      <link rel="shortcut icon" href="../imgs/favicon.ico" />
      <img src={Logomarca} className="logo" />
      <div style={{ textAlign: 'center', marginLeft: '11em' }}>
        <Link to="/">
          <a>Início</a>
        </Link>
        <Link to="/pc">
          <a>Montar um pc</a>
        </Link>
        <Link to="/pecas">
          <a>Peças</a>
        </Link>
        <Link to="/comunidade">
          <a>Comunidade</a>
        </Link>
      </div>
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={nightMode}
              onChange={setModoNoturno}
              id="nightModeToggle"
              name="nightMode"
              color="primary"
            />
          }
          label="Modo Noturno"
        />
        <Button variant="contained" color="primary">
          Logar
        </Button>
        <Button variant="contained" color="secondary">
          Cadastrar
        </Button>
      </div>
    </header>
  )
}

export default Header