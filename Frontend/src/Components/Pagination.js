import React from 'react'
import './Pagination.css'

function NumeroPaginas(atual, total) {
    const n = []

    let start = Math.max(atual - 2, 1)
    let end = Math.min(atual + 2, total)
    if (end - start < 4 && total > 4) {
        if (start === 1) {
            end = 5
        } else if (end === total) {
            start = total - 4
        }
    }

    for (let i = start; i <= end; i++) n.push(i)
    return n
}

function Pagination({ SetPagina, info: { numero_pagina, total_paginas } }) {

    const PaginaAtual = (e) => e === numero_pagina ? "page-item ativo" : "page-item"

    const p = NumeroPaginas(numero_pagina, total_paginas)

    return (
        <>
            <div className="paginacao">
                <div className="pagination">
                    {p[0] > 1 && (
                        <>
                        <button className={PaginaAtual(1)} onClick={() => SetPagina(1)} >1</button>
                        <button className="page-item">...</button>
                        </>
                    )}
                    {
                        p.map(function (e, i) {
                            return <button key={i} className={PaginaAtual(e)} onClick={() => SetPagina(e)} >{e}</button>
                        })
                    }
                    {p[p.length-1] < total_paginas && (
                        <>
                        <button className="page-item">...</button>
                        <button className={PaginaAtual(total_paginas)} onClick={() => SetPagina(total_paginas)} >{total_paginas}</button>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Pagination