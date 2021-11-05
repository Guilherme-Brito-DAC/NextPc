import React , { useState } from 'react'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import './Comunidade.css'

function Comunidade() {
  return (
    <>
    <div className="pecas">
      <div className="barraPesquisa">
        <FormControl className="BP">
          <Input
            id="BP"
            placeholder="Procurar Peças..."
            startAdornment={
              <InputAdornment position="start">
                <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/32/ffffff/external-search-interface-kiranshastry-lineal-kiranshastry.png" />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <br />
      <br />
      <div className="researchResult">
        <div className="imgTitulo">
          <div className="img">
            <p>imagem do usuario</p>
          </div>
          <div className="tituloDesc">
            <h1>Titulo/tópico</h1>
          </div>
          <h4>Texto spoiler do assunto</h4>
        </div>
      </div>
      <div className="researchResult">
        <div className="imgTitulo">
          <div className="img">
            <p>imagem do usuario</p>
          </div>
          <div className="tituloDesc">
            <h1>Titulo/tópico</h1>
          </div>
          <h4>Texto spoiler do assunto</h4>
        </div>
      </div>
      <div className="researchResult">
        <div className="imgTitulo">
          <div className="img">
            <p>imagem do usuario</p>
          </div>
          <div className="tituloDesc">
            <h1>Titulo/tópico</h1>
          </div>
          <h4>Texto spoiler do assunto</h4>
        </div>
      </div>
      <div className="researchResult">
        <div className="imgTitulo">
          <div className="img">
            <p>imagem do usuario</p>
          </div>
          <div className="tituloDesc">
            <h1>Titulo/tópico</h1>
          </div>
          <h4>Texto spoiler do assunto</h4>
        </div>
      </div>
    </div>

  </>
  )
}

export default Comunidade