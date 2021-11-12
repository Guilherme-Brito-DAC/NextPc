import React from 'react'
import './Pecas.css'

function Pecas(prop) {
  const root = document.querySelector(':root');
  const peca = [
    {
      "nome": "G.Skill Trident Z RGB 64 GB",
      "imagem": "https://cdna.pcpartpicker.com/static/forever/images/product/712c928dba9edee5be3380b33b612b50.256p.jpg",
      "velocidade": "DDR4-3600",
      "preco": "1942.19"
    },
    {
      "nome": "Patriot Viper Elite 8 GB",
      "imagem": "https://cdna.pcpartpicker.com/static/forever/images/product/859485e41ebc22f8965ba8a55537f069.256p.jpg",
      "velocidade": "DDR4-2666",
      "preco": "210.99"
    },
    {
      "nome": "G.Skill Aegis 32 GB",
      "imagem": "https://cdna.pcpartpicker.com/static/forever/images/product/3d982773833e1f43c65c3ef8110e87ca.256p.jpg",
      "velocidade": "DDR4-2400",
      "preco": "513.95"
    },
    {
      "nome": "Team T-FORCE VULCAN Z 16 GB",
      "imagem": "https://cdna.pcpartpicker.com/static/forever/images/product/a79f5d98275d75e320292a6d40a1dfd1.256p.jpg",
      "velocidade": "DDR4-3200",
      "preco": "286.73"
    },
    {
      "nome": "Crucial CT4K32G4LFQ4213 128 GB",
      "imagem": "https://images-na.ssl-images-amazon.com/images/I/41%2B2%2B5suuAL.jpg",
      "velocidade": "DDR4-2133",
      "preco": 0
    },
    {
      "nome": "Corsair Vengeance LPX 32 GB",
      "imagem": "https://cdna.pcpartpicker.com/static/forever/images/product/0d7ccc6bb32c1a857bdfc56d9eb74081.256p.jpg",
      "velocidade": "DDR4-2133",
      "preco": "660.02"
    },
    {
      "nome": "Corsair Vengeance LPX 32 GB",
      "imagem": "https://cdna.pcpartpicker.com/static/forever/images/product/e79d504aff7beb267af80eb5820ca907.256p.jpg",
      "velocidade": "DDR4-2666",
      "preco": "638.38"
    },
    {
      "nome": "Corsair Vengeance LPX 16 GB",
      "imagem": "https://cdna.pcpartpicker.com/static/forever/images/product/590a6c615236028c69624375808d7b65.256p.jpg",
      "velocidade": "DDR4-5000",
      "preco": "546.41"
    },
    {
      "nome": "PNY XLR8 32 GB",
      "imagem": "https://cdna.pcpartpicker.com/static/forever/images/product/4a4678c8ab8bc90aec88726e7abd471d.256p.jpg",
      "velocidade": "DDR4-3200",
      "preco": "605.92"
    },
    {
      "nome": "Corsair Vengeance RGB Pro SL 32 GB",
      "imagem": "https://cdna.pcpartpicker.com/static/forever/images/product/0b28b6bd87727602f485d15867d6a9a4.256p.jpg",
      "velocidade": "DDR4-3600",
      "preco": "1011.67"
    },
    {
      "nome": "Kingston HyperX Fury 4 GB",
      "imagem": "https://cdna.pcpartpicker.com/static/forever/images/product/0d8c59df6d1abf16753bc5404c0922c4.256p.jpg",
      "velocidade": "DDR4-2666",
      "preco": "210.99"
    },
    {
      "nome": "Kingston HyperX FURY 16 GB",
      "imagem": "https://cdna.pcpartpicker.com/static/forever/images/product/0d8c59df6d1abf16753bc5404c0922c4.256p.jpg",
      "velocidade": "DDR4-3200",
      "preco": "557.23"
    }
  ]

  function HandleChange(event) {
    prop.SetPesquisa(event.target.value)
  }

  function HandleSize(event){
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
          peca.map(function (p, i) {
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