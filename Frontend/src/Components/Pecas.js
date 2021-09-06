import React, { useState } from 'react'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import './Pecas.css'

function Pecas() {
  return (
    <>
      <div className="pecas">
        <div className="barraPesquisa">
          <FormControl className="BP">
            <Input
              id="BP"
              startAdornment={
                <InputAdornment position="start">
                  <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/32/000000/external-search-interface-kiranshastry-lineal-kiranshastry.png" />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="researchResult">
          <div className="imgTitulo">
            <div className="img">
              <p>imagem da parada</p>
            </div>
            <div className="tituloDesc">
              <h1>Nome da parada</h1>
              <p>descrição da parada</p>
            </div>
            <h4>Preço da parada</h4>
          </div>
        </div>
        <div className="researchResult">
          <div className="imgTitulo">
            <div className="img">
              <p>imagem da parada</p>
            </div>
            <div className="tituloDesc">
              <h1>Nome da parada</h1>
              <p>descrição da parada</p>
            </div>
            <h4>Preço da parada</h4>
          </div>
        </div>
        <div className="researchResult">
          <div className="imgTitulo">
            <div className="img">
              <p>imagem da parada</p>
            </div>
            <div className="tituloDesc">
              <h1>Nome da parada</h1>
              <p>descrição da parada</p>
            </div>
            <h4>Preço da parada</h4>
          </div>
        </div>
      </div>

    </>
  )
}

export default Pecas