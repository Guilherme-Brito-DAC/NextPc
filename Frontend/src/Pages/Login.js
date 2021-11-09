import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Login() {
    return(
        <> 
            <div className="form">
                <input id="nome" type="text" placeholder="Nome de Usuário" />
                <label for="nome">Nome: </label>
                <input id="senha" type="password" placeholder="Senha" />
                <label for="senha">Senha: </label>
                <button type="submit" className="btn btn-success" id="logar">Logar</button>
            </div>
            <div className="options">
                <Link to="/cadastro" className="Cadastrar">Não é cadastrado ainda?</Link>
            </div>
        </>
    )
    
}

export default Login
