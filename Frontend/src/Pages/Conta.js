import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Conta.css'

function Conta() {
    return (
        <>
            <div className="conta">
                <div className="options">
                    <div className="imgTitulo">
                        <div className="img">
                            <button type="button" className="btn btn-warning">
                                <img src="https://img.icons8.com/ios-glyphs/65/ffffff/edit--v1.png" />
                            </button>
                        </div>
                        <div className="optionName">
                            <h1>Editar Conta</h1>
                            <h6>Editar informações como Nome, Email e Senha</h6>
                        </div>
                    </div>
                </div>
                <div className="options">
                    <div className="imgTitulo">
                        <div className="img">
                            <button type="button" className="btn btn-danger">
                                <img src="https://img.icons8.com/ios-glyphs/65/ffffff/delete-sign.png" />
                            </button>
                        </div>
                        <div className="optionName">
                            <h1>Apagar Conta</h1>
                            <h6>Apaga sua conta e todas suas informações AVISO: ESSA MUDANÇA É PERMANENTE!</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Conta