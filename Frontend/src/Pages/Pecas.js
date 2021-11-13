import React, { useState } from 'react'
import './Pecas.css'

function Pecas(prop) {
  const root = document.querySelector(':root');
  const [pecas, setPecas] = useState([]);
  const [Loading, SetLoading] = useState(true);

  function HandleChange(event) {
    prop.SetPesquisa(event.target.value)
  }

  function HandleSize(event) {
    prop.SetTamanho(event.target.value)
    root.style.setProperty('--TamanhoItem', event.target.value + 'rem');
  }

  return (
    <>
      <div className="pesquisaForm">
        <img src="https://img.icons8.com/ios-glyphs/25/9e9ea7/search--v1.png" alt="" />
        <input type="text" value={prop.Pesquisa} onChange={HandleChange} placeholder="Pesquisa uma Peça" />
      </div>
      <div className="pecaASerPesquisada">
        <button className="btn btn-light">
          <img src="https://img.icons8.com/color/40/000000/processor.png" alt="" />
          CPU
        </button>
        <button className="btn btn-light">
          <img src="https://img.icons8.com/color/40/000000/video-card.png" alt="" />
          GPU
        </button>
        <button className="btn btn-light">
          <img src="https://img.icons8.com/color/40/000000/memory-slot.png" alt="" />
          Memória RAM
        </button>
        <button className="btn btn-light">
          <img src="https://img.icons8.com/color/40/000000/motherboard.png" alt="" />
          Placa Mãe
        </button>
        <button className="btn btn-light">
          <img src="https://img.icons8.com/color/40/000000/ssd.png" alt="" />
          Armazenamento
        </button>
        <button className="btn btn-light">
          <img src="https://img.icons8.com/ios-filled/40/ffea03/lightning-bolt--v1.png" alt="" />
          Fonte
        </button>
      </div>
      <div className="filtros">
        <div className="tamanho">
          <label>Tamanho dos itens : </label>
          <input type="range" className="form-control-range" min="10" max="30" value={prop.Tamanho} onChange={HandleSize} />
        </div>
        <div className="ordenarPor">
          <p>Ordernar por : </p>
          <select className="form-select">
            <option value="NomeCrescente">Nome - Crescente</option>
            <option value="NomeDecrescente">Nome - Decrescente</option>
            <option value="PrecoCrescente">Preço - Crescente</option>
            <option value="PrecoDecrescente">Preço - Decrescente</option>
          </select>
        </div>
      </div>
      <div className="pecas">
        {
          Loading &&
          <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"100px"}}>
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
    </>
  )
}

export default Pecas