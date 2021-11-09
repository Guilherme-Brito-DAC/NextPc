import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Cadastro() {
    return(
        <> 
            <div className="form">
                <input id="nome" type="text" placeholder="ex: Joãozinho" />
                <label for="nome">Nome: </label>
                <input id="senha" type="password" placeholder="De XX a XX caracteres" />
                <label for="senha">Senha: </label>
                <input id="email" type="email" placeholder="ex: joao@gmail.com" />
                <label for="email">Email: </label>
                <button type="submit" className="btn btn-success" id="cadastrar">Cadastrar</button>
            </div>
            <div className="options">
                <Link to="/login" className="Cadastrar">Já é cadastrado ?</Link>
            </div>
        </>
    )
    
}

export default Cadastro
