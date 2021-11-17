import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Forms.css'

function Login({ SetUsuario, SetToken }) {
    const [UsuarioForm, SetUsuarioForm] = useState({
        "usuario": "",
        "senha": "",
    });

    const h = useHistory()

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

            SetUsuario(result.usuario)
            SetToken(result.token)

            if (response.status === 200) {
                h.push("/pecas/cpu/1")
            }
        })
    }


    return (
        <>
            <div className="formulario">
                <form className="background" onSubmit={HandleSubmit}>

                    <div className="form">

                        <input type="text" className="form-control" value={UsuarioForm.usuario} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, usuario: e.target.value }) }} placeholder="Usuario" required />

                        <br />

                        <input type="password" className="form-control" value={UsuarioForm.senha} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, senha: e.target.value }) }} placeholder="Senha" required />

                        <br />

                        <button type="submit" className="btn btn-success">Login</button>

                    </div>

                    <br />

                    <div className="link">

                        Não possui conta? <a className="redirect" href="cadastro">Cadastrar</a>

                    </div>

                </form>
            </div>
        </>
    )

}

export default Login
