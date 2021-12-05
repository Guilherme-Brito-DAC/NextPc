import React from 'react'
import Logomarca from '../imgs/Logomarca-no-bg-no-margin.png'
import './Home.css'

function Home() {
  return (
    <>
      <div className="home">
        <div className="title">
          <img className="logoHome" src={Logomarca} alt="logo"></img>
        </div>
        <h4>O pc dos seus sonhos pode estar a alguns clickes de distância!</h4>
        <a type="submit" href="cadastro" className="linkCadastrar">Montar meu primeiro PC!</a>
      </div>
    </>
  )
}

export default Home