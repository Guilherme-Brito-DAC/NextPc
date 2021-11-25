import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import './Conta.css'

function Conta({ Usuario, Token }) {



    return (
        <>
            <div className="conta">
                <div className="menuConta">
                    <div className="btn-group">
                        <button type="button" className="btn btn-light">Minha Conta</button>
                        <button type="button" className="btn btn-success">Meus Pcs</button>
                    </div>
                </div>
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
                    <button type="submit" className="btn btn-success">Login</button>
                </div>
            </div>
        </>
    )

}

/* <Route
    render={props =>
        Usuario && Token ? (
            
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
    }
/> */
export default Conta