import React from 'react'
import { Link, Redirect, Route } from 'react-router-dom'


function Conta({ Usuario, Token }) {



    return (
        <>
            <div className="background">
                <div className="links">
                    <Link to="/editar" className="btn_edit"><img src="https://img.icons8.com/glyph-neue/30/ffffff/edit.png" /></Link>
                </div>
                <div className="links">
                    <h2>Editar a minha conta</h2>
                </div>
            </div>
            <br />
            <div className="background">
                <div className="links">
                    <Link to="/excluir" className="btn_excluir"><img src="https://img.icons8.com/glyph-neue/30/ffffff/delete-forever.png" /></Link>
                </div>
                <div className="links">
                    <h2>Excluir a minha conta</h2>
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