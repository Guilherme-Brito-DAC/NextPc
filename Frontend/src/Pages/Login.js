import React, { useState } from 'react'
import './Forms.css'

function Login({ SetUsuario, SetToken }) {
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
        }).then(async response => {
            const result = await response.json()

            if (response.status === 200) {

            }

            SetUsuario(result.usuario)
            SetToken(result.token)
        })
    }

    return (
        <>
            <form className="background" onSubmit={HandleSubmit}>

                <div className="form">

                    <input type="text" className="form-control" value={UsuarioForm.usuario} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, usuario: e.target.value }) }} placeholder="Usuario" required />

                    <br />

                    <input type="password" className="form-control" value={UsuarioForm.senha} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, senha: e.target.value }) }} placeholder="Senha" required />

                    <br />

                    <button type="submit" className="btn btn-success">Login</button>
                
                </div>
            
            </form>
        </>
    )

}

export default Login
