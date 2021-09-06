import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import './Home.css'

function Home() {
  return (
    <>
      <div className="home">
        <h1 className="titulo">O dia de montar o PC do seus sonhos chegou !</h1>
        <br />
        <Button variant="contained" color="primary">
          Montar meu PC
        </Button>
      </div>
    </>
  )
}

export default Home