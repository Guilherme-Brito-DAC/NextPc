import React, { useState } from 'react'
import './Home.css'

function Login({SetUsuario,SetToken}) {
    const [UsuarioForm, SetUsuarioForm] = useState({
        "usuario": "",
        "senha": "",
    });

    function HandleSubmit(e) {
        e.preventDefault();

        fetch('https://localhost:5001/api/usuario/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(UsuarioForm)
        }).then(response =>  response.json())
          .then(result => {
                SetUsuario(result.usuario)
                SetToken(result.token)
          })
    }

    return (
        <>
            <form onSubmit={HandleSubmit}>

                <input type="text" className="form-control" value={UsuarioForm.usuario} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, usuario: e.target.value }) }} placeholder="Usuario" required />

                <input type="password" className="form-control" value={UsuarioForm.senha} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, senha: e.target.value }) }} placeholder="Senha" required />

                <button type="submit" className="btn btn-success">Login</button>

            </form>
        </>
    )

}

export default Login
