import React from 'react'


export default function Excluir(){
    return(
        <>
        <div className="background">
            <h2>Tem certeza que deseja excluir sua conta?</h2>
            <button type="submit" className="btn btn-danger" id="excluir">Excluir</button>
        </div>
        </>
    )
}