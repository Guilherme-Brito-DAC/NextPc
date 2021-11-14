import React, { useState } from 'react'
import './Home.css'

function Cadastro() {

    const [UsuarioForm, SetUsuarioForm] = useState({
        "nome": "",
        "sobrenome": "",
        "usuario": "",
        "email": "",
        "senha": "",
    });

    function HandleSubmit(e) {
        e.preventDefault();

        fetch('https://localhost:5001/api/usuario/cadastrar', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(UsuarioForm)
        }).then(response => response.json())
            .then(result => {
                console.log(result)
            })
    }

    return (
        <>
            <form onSubmit={HandleSubmit}>

                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" value={UsuarioForm.nome} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, nome: e.target.value }) }} placeholder="Nome" aria-label="Nome" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" value={UsuarioForm.sobrenome} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, sobrenome: e.target.value }) }}placeholder="Sobrenome" aria-label="Sobrenome" />
                    </div>
                </div>

                <input type="text" className="form-control" value={UsuarioForm.usuario} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, usuario: e.target.value }) }} placeholder="Usuario" required />
                
                <input type="email" className="form-control" value={UsuarioForm.email} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, email: e.target.value }) }} placeholder="Email" required />

                <input type="password" className="form-control" value={UsuarioForm.senha} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, senha: e.target.value }) }} placeholder="Senha" required />

                <button type="submit" className="btn btn-success">Login</button>

            </form>
        </>
    )

}

export default Cadastro
