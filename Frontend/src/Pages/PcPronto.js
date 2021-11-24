import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Pagination from '../Components/Pagination'
import Erro from '../Components/Erro'
import './PcPronto.css'

function PcPronto(prop) {

  const [Loading, SetLoading] = useState(true)
  const [Pagina, SetPagina] = useState(1)
  const [Pesquisa, SetPesquisa] = useState("")
  const [Pcs, SetPcs] = useState([])
  const [Info, SetInfo] = useState()
  const [SearchInput, SetInput] = useState("")
  const { pagina, pesquisa } = useParams()

  useEffect(() => {
    SetPagina(pagina)
    if (pesquisa !== undefined) {
      SetPesquisa(pesquisa)
    }
  }, [pagina, pesquisa])

  useEffect(() => {
    SetLoading(true)

    window.history.pushState({}, null, `/pcpronto/${Pagina}/${Pesquisa}`);

    fetch(`https://localhost:5001/api/pc?pagina=${Pagina}&pesquisa=${Pesquisa}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then(result => {
        SetInfo(result)
        SetPcs(result.resultado)
      })
    SetLoading(false)
  }, [Pagina, Pesquisa])

  function FormatarPreco(preco) {
    var formatter = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'BRL',
    });
    return formatter.format(preco);
  }

  function HandleSubmit(e) {
    e.preventDefault()
    SetPagina(1)
    SetPesquisa(SearchInput)
  }

  function HandleSize(event) {
    const root = document.querySelector(':root')
    prop.SetTamanho(event.target.value)
    root.style.setProperty('--TamanhoItem', event.target.value + 'rem')
  }

  return (
    <>
      <form className="pesquisaForm" onSubmit={(e) => HandleSubmit(e)}>
        <img src="https://img.icons8.com/ios-glyphs/25/9e9ea7/search--v1.png" alt="" />
        <input type="text" placeholder="Pesquisa uma Peça" value={SearchInput} onChange={(e) => SetInput(e.target.value)} />
      </form>
      {
        Info !== null && Pcs.length !== 0 ?
          <>
            <Pagination info={Info} SetPagina={SetPagina} />
          </>
          :
          <Erro />
      }
      <div className="filtros">
        <div className="tamanho">
          <label>Tamanho dos itens : </label>
          <input type="range" className="form-control-range" min="12" max="30" value={prop.Tamanho} onChange={HandleSize} />
        </div>
      </div>
      <div className="pcs">
        {
          Loading &&
          <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "100px" }}>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          </div>
        }
        {
          Pcs.map(function (p, i) {
            return <div className="card" style={{ cursor: "pointer" }} key={i}>
              <img src={p.imagem} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">{p.nome}</h4>
                <ul>
                  <li><b>CPU:</b> {p.cpu.nome}</li>
                  <li><b>GPU:</b> {p.gpu.nome}</li>
                  <li><b>RAM:</b> {p.ram.nome}</li>
                  <li><b>Armazenamento:</b> {p.armazenamento.nome}</li>
                  <li><b>P. Mãe:</b> {p.placa_mae.nome}</li>
                  <li><b>Fonte:</b> {p.fonte.nome}</li>
                </ul>
                <hr />
                <p className="card-text" id="preco">{FormatarPreco(p.preco)}</p>
              </div>
            </div>
          })
        }

        {
          Info !== null && Pcs.length !== 0 &&
          <Pagination info={Info} SetPagina={SetPagina} />
        }
      </div>
    </>
  )
}

export default PcPronto