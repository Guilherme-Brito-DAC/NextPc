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
    useEffect(()=>{
        if (!Usuario || !Token) {
            h.push("/pecas/cpu/1")
        }
        else{
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
    },[Usuario,Token])
    
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
                    .then(result => {
                        Deslogar()
                    })
            } else if (result.isDenied) {
              
            }
          })
    }


    return (
        <>
            <form className="background" onSubmit={HandleSubmit}>

                {/*Exemplo de formulário */}
                <input type="text" className="input" value={UsuarioForm.nome} onChange={(e) => { SetUsuarioForm({ ...UsuarioForm, nome: e.target.value }) }} placeholder="Nome" aria-label="Nome" />

            </form>
            <form className="background" onSubmit={Deletar}>
                <button type="submit">Deletar</button>
            </form>
        </>
    )

}


export default Conta