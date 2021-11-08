import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <>
      <div className="home">
        <h1 className="titulo">O dia de montar o PC do seus sonhos chegou !</h1>
        <br />
        <Link to="/pc" type="button" className="btn btn-dark">
          COMEÇAR A MONTAR
        </Link>
      </div>
    </>
  )
}

export default Home