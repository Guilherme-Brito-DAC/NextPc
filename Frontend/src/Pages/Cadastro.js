import React, { useState } from 'react'
import './Forms.css'

function Cadastro() {

    const [UsuarioForm, SetUsuarioForm] = useState({
        "nome": "",
        "sobrenome": "",
        "usuario": "",
        "email": "",
        "senha": "",
        "cpf": "",
        "telefone": "",
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
            <div className="formulario">
                <form className="background" onSubmit={HandleSubmit}>
                    <div className="form">
                        <div className="row">
                            <div className="col">
                                <input type="text" className="input" value={UsuarioForm.nome} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, nome: e.target.value }) }} placeholder="Nome" aria-label="Nome" />
                            </div>
                            <div className="col">
                                <input type="text" className="input" value={UsuarioForm.sobrenome} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, sobrenome: e.target.value }) }} placeholder="Sobrenome" aria-label="Sobrenome" />
                            </div>
                        </div>
                        <br />
                        <div className="col">
                            <input type="text" className="input" value={UsuarioForm.usuario} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, usuario: e.target.value }) }} placeholder="Usuario" required />
                            <br />
                            <input type="email" className="input" value={UsuarioForm.email} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, email: e.target.value }) }} placeholder="Email" required />
                            <br />
                            <input type="password" className="input" value={UsuarioForm.senha} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, senha: e.target.value }) }} placeholder="Senha" required />
                            <br />
                            <input type="number" className="input" value={UsuarioForm.cpf} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, cpf: e.target.value }) }} placeholder="CPF" required />
                            <br />
                            <input type="number" className="input" value={UsuarioForm.telefone} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, telefone: e.target.value }) }} placeholder="Telefone" required />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-success">Cadastrar</button>
                    </div>
                    <br />
                    <div className="link">
                        Já possui conta? <a className="redirect" href="login">Logar</a>
                    </div>
                    <br />
                    <div className="eula">
                        <p> Ao cadastrar em nosso site, você está de acordo com os termos de serviço e contrato do usuário </p>
                        <div className="termos">
                            <a href="">termos de serviço</a><a href="">contrato do usuário</a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )

}

export default Cadastro
