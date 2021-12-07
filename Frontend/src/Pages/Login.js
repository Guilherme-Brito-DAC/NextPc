import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Forms.css'
import Swal from 'sweetalert2'

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
            
            if (response.status === 200) {
                sessionStorage.setItem("token", result.token);
                sessionStorage.setItem("id", result.usuario.id);
                sessionStorage.setItem("nome", result.usuario.nome);
                sessionStorage.setItem("sobrenome", result.usuario.sobrenome);
                sessionStorage.setItem("usuario", result.usuario.usuario);
                sessionStorage.setItem("email", result.usuario.email);
                sessionStorage.setItem("cpf", result.usuario.cpf);
                sessionStorage.setItem("telefone", result.usuario.cpf);
                sessionStorage.setItem("senha", result.usuario.senha);
    
                SetUsuario(result.usuario)
                SetToken(result.token)
                h.push("/pecas/cpu/1")
            }
            else
            {
                Swal.fire('Usuário ou senha inválidos!')
            }
        })
    }


    return (
        <>
            <div className="formulario">
                <form className="background" onSubmit={HandleSubmit}>
                    <div className="form">
                        <div className="col">
                            <div className="row">
                                <input type="text" className="input" value={UsuarioForm.usuario} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, usuario: e.target.value }) }} placeholder="Usuario" required />
                            </div>
                            <br />
                            <div className="row">
                                <input type="password" className="input" value={UsuarioForm.senha} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, senha: e.target.value }) }} placeholder="Senha" required />
                            </div>
                            <br />
                        </div>
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
