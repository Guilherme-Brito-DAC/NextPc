import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import Swal from 'sweetalert2'

function Conta({ Usuario, SetUsuario, Token, Deslogar }) {

    const [UsuarioForm, SetUsuarioForm] = useState({
        "nome": '',
        "sobrenome": '',
        "id": '',
        "usuario": '',
        "email": '',
        "senha": '',
        "cpf": '',
        "telefone": '',
        "role": '',
        "imagem": '',
        "modoNoturno": ''
    })

    const h = useHistory()
    useEffect(() => {
        if (!Usuario || !Token) {
            h.push("/pecas/cpu/1")
        }
        else {
            SetUsuarioForm({
                "nome": Usuario.nome,
                "sobrenome": Usuario.sobrenome,
                "id": Usuario.id,
                "usuario": Usuario.usuario,
                "email": Usuario.email,
                "senha": Usuario.senha,
                "cpf": Usuario.cpf,
                "telefone": Usuario.telefone,
                "role": Usuario.role,
                "imagem": Usuario.imagem,
                "modoNoturno": Usuario.modoNoturno
            })
        }
    }, [Usuario, Token])

    function HandleSubmit(e) {
        e.preventDefault();

        fetch('https://localhost:5001/api/usuario', {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Token}`,
            },
            body: JSON.stringify(UsuarioForm)
        }).then(response => response.json())
            .then(result => {
                console.log(result)
                SetUsuario(result)
            })
            
        Swal.fire(
            'Dados salvos!',
            'Seus novos dados já foram salvos!',
            'success'
        )
    }

    function Deletar(e) {
        e.preventDefault();

        Swal.fire({
            title: 'Tem certeza que deseja deletar sua conta?',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            denyButtonText: `Não`,
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://localhost:5001/api/usuario', {
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${Token}`,
                    },
                    body: JSON.stringify(Usuario)
                }).then(response => response.json())
                    .then(resultado => {
                        console.log(resultado)
                        Deslogar()
                    })
            } else if (result.isDenied) {

            }
        })
    }


    return (
        <>

            <form className="background" onSubmit={HandleSubmit}>
                <div className="form">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="input" value={UsuarioForm.nome} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, nome: e.target.value }) }} placeholder="Nome" aria-label="Nome" required />
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
                    </div>
                    <br />
                    <button type="button" onClick={HandleSubmit} className="btn btn-success">Editar Informações</button>
                </div>
                <br />
            </form>
            <br />
            <form className="background" onSubmit={Deletar}>
                <button className="btn btn-warning" type="submit">Deletar</button>
            </form>
        </>
    )

}


export default Conta