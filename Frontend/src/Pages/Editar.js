import React from 'react'
import './Conta.css'

export default function Editar() {
    return (

        <div className="conta">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <input type="text" className="input" placeholder="Nome" aria-label="Nome" />
                    </div>
                    <div className="col">
                        <input type="text" className="input" placeholder="Sobrenome" aria-label="Sobrenome" />
                    </div>
                </div>
                <br />
                <input type="text" className="input" placeholder="Usuario" required />
                <br />
                <input type="email" className="input" placeholder="Email" required />
                <br />
                <input type="password" className="input" placeholder="Senha" required />
                <br />
                <button type="submit" className="btn btn-success">Salvar Alterações</button>
            </div>
        </div>
    )
}