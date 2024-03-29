import React, { useState, useEffect } from 'react'
import Pagination from '../Components/Pagination'
import { useParams } from "react-router-dom";
import './Pecas.css'
import Erro from '../Components/Erro'

function Pecas(prop) {
  const root = document.querySelector(':root')
  const [Pesquisa, SetPesquisa] = useState("")
  const [SearchInput, SetInput] = useState("")
  const [pecas, setPecas] = useState([])
  const [Loading, SetLoading] = useState(true)
  const [PecaASerPesquisa, SetPecaASerPesquisa] = useState("")
  const [Pagina, SetPagina] = useState(1)
  const [Info, SetInfo] = useState()
  const { peca, pagina, pesquisa } = useParams()

  useEffect(() => {
    SetPecaASerPesquisa(peca)
    SetPagina(pagina)

    if (pesquisa !== undefined) {
      SetPesquisa(pesquisa)
      SetInput(pesquisa)
    }
  }, [peca,pagina,pesquisa])

  function HandleSize(event) {
    prop.SetTamanho(event.target.value)
    root.style.setProperty('--TamanhoItem', event.target.value + 'rem')
  }

  function Ativo(e) {
    if (PecaASerPesquisa === e) {
      return "btn btn-success"
    }
    return "btn btn-light"
  }

  useEffect(() => {
    SetLoading(true)

    window.history.pushState({}, null, `/pecas/${PecaASerPesquisa}/${Pagina}/${Pesquisa}`);

    fetch(`https://localhost:5001/api/pecas/${PecaASerPesquisa}?pesquisa=${Pesquisa}&pagina=${Pagina}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then(result => {
        SetInfo(result)
        setPecas(result.resultado)
      })

    SetLoading(false)
  }, [Pagina, PecaASerPesquisa, Pesquisa])

  function HandleSubmit(e) {
    e.preventDefault()
    SetPagina(1)
    SetPesquisa(SearchInput)
  }

  function Reset() {
    SetPagina(1)
    SetPesquisa("")
    SetInput("")
  }

  return (
    <>
      <form className="pesquisaForm" onSubmit={(e) => HandleSubmit(e)}>
        <img src="https://img.icons8.com/ios-glyphs/25/9e9ea7/search--v1.png" alt="" />
        <input type="text" placeholder="Pesquisa uma Peça" value={SearchInput} onChange={(e) => SetInput(e.target.value)} />
      </form>
      <div className="pecaASerPesquisada">
        <button className={Ativo("cpu")} onClick={() => { SetPecaASerPesquisa("cpu"); Reset() }}>
          <img src="https://img.icons8.com/color/40/000000/processor.png" alt="" />
          CPU
        </button>
        <button className={Ativo("gpu")} onClick={() => { SetPecaASerPesquisa("gpu"); Reset() }}>
          <img src="https://img.icons8.com/color/40/000000/video-card.png" alt="" />
          GPU
        </button>
        <button className={Ativo("ram")} onClick={() => { SetPecaASerPesquisa("ram"); Reset() }}>
          <img src="https://img.icons8.com/color/40/000000/memory-slot.png" alt="" />
          Memória RAM
        </button>
        <button className={Ativo("placaMae")} onClick={() => { SetPecaASerPesquisa("placaMae"); Reset() }}>
          <img src="https://img.icons8.com/color/40/000000/motherboard.png" alt="" />
          Placa Mãe
        </button>
        <button className={Ativo("armazenamento")} onClick={() => { SetPecaASerPesquisa("armazenamento"); Reset() }}>
          <img src="https://img.icons8.com/color/40/000000/ssd.png" alt="" />
          Armazenamento
        </button>
        <button className={Ativo("fonte")} onClick={() => { SetPecaASerPesquisa("fonte"); Reset() }}>
          <img src="https://img.icons8.com/ios-filled/40/ffea03/lightning-bolt--v1.png" alt="" />
          Fonte
        </button>
      </div>
      <div className="filtros">
        <div className="tamanho">
          <label>Tamanho dos itens : </label>
          <input type="range" className="form-control-range" min="12" max="30" value={prop.Tamanho} onChange={HandleSize} />
        </div>
      </div>

      {
        Info !== null && pecas.length !== 0 ?
          <>
            <h5 className="resultados">{Info.total} resultados</h5>
            <Pagination info={Info} SetPagina={SetPagina} />
          </>
          :
          <Erro />
      }

      <div className="pecas">
        {
          Loading &&
          <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "100px" }}>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          </div>
        }

        {
          pecas.map(function (p, i) {
            return <div className="card" key={i}>
              <img src={p.imagem} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{p.nome}</h5>
                <p className="card-text">{p.velocidade}</p><br />
                <p className="card-text">{p.preco === 0 ? "Preço não encontrado" : "R$" + p.preco}</p>
              </div>
            </div>
          })
        }
      </div>

      {
        Info !== null && pecas.length !== 0 &&
        <Pagination info={Info} SetPagina={SetPagina} />
      }
    </>
  )
}

export default Pecas