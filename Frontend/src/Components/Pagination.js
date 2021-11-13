import React from 'react'
import './Pagination.css'

function Pagination(prop) {

    const NumeroPaginas = []

    function PaginaAtual(e) {
        if (e === prop.info.numero_pagina) {
            return "page-item ativo"
        }
        return "page-item"
    }

    for (let i = 1; i < prop.info.total_paginas; i++) {
        NumeroPaginas.push(i)
    }

    return (
        <>
            <div className="paginacao">
                <div className="pagination">
                    {
                        NumeroPaginas.map(function(e,i){
                            return <button key={i} className={PaginaAtual(e)} onClick={()=>prop.SetPagina(e)} >{e}</button>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Pagination