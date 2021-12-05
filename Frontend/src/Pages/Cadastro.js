import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Forms.css'
import Swal from 'sweetalert2'

function Cadastro({ SetUsuario, SetToken }) {

    const [UsuarioForm, SetUsuarioForm] = useState({
        "nome": "",
        "sobrenome": "",
        "usuario": "",
        "email": "",
        "senha": "",
        "cpf": "",
        "telefone": "",
        "role": "cliente",
        "imagem": "",
        "modoNoturno": false
    });

    const h = useHistory()

    function HandleSubmit(e) {
        e.preventDefault();

        fetch('https://localhost:5001/api/usuario/cadastrar', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(UsuarioForm)
        }).then(async response => {
            const result = await response.json()
    
            if (response.status === 200) {
                SetUsuario(result.usuario)
                SetToken(result.token)
                Swal.fire('Usuário cadastrado com sucesso!')
                h.push("/pecas/cpu/1")
            }
            else
            {
                Swal.fire('Aconteceu algum erro, tente novamente mais tarde')
            }
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
                            <a href="https://images3.memedroid.com/images/UPLOADED439/60d4835ccf9b4.jpeg">termos de serviço</a><a href="https://images3.memedroid.com/images/UPLOADED439/60d4835ccf9b4.jpeg">contrato do usuário</a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )

}

export default Cadastro
