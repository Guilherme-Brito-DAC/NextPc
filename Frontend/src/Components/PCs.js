import React, { useState } from 'react'
import './PCs.css'
import './bootstrap.min.css'

function PCs() {
  return (
    <>
      <div className="backgroundEscolha">
        <div className="etapas">
          <div className="processador">
            <button type="button" className="btn btn-dark" id="processadorButton">
              <img src="https://img.icons8.com/material-sharp/50/000000/smartphone-cpu.png" className="imgPC" />
            </button>
            <h5>PROCESSADOR</h5>
          </div>
          <div className="placaMae">
            <button type="button" className="btn btn-dark" id="placaMaeButton">
              <img src="https://img.icons8.com/ios-filled/50/000000/motherboard.png" className="imgPC" />
            </button>
            <h5>PLACA MÃE</h5>
          </div>
          <div className="RAM">
            <button type="button" className="btn btn-dark" id="RAMButton">
              <img src="https://img.icons8.com/external-those-icons-fill-those-icons/50/000000/external-ram-it-components-those-icons-fill-those-icons.png" className="imgPC" />
            </button>
            <h5>MEMÓRIA RAM</h5>
          </div>
          <div className="placaVideo">
            <button type="button" className="btn btn-dark" id="placaVideoButton">
              <img src="https://img.icons8.com/glyph-neue/50/000000/video-card.png" className="imgPC" />
            </button>
            <h5>PLACA DE VÍDEO</h5>
          </div>
          <div className="hdSsd">
            <button type="button" className="btn btn-dark" id="hdSsdButton">
              <img src="https://img.icons8.com/external-prettycons-solid-prettycons/50/000000/external-hard-drive-technology-prettycons-solid-prettycons.png" className="imgPC" />
            </button>
            <h5>HD/SSD</h5>
          </div>
          <div className="gabinete">
            <button type="button" className="btn btn-dark" id="gabineteButton">
              <img src="https://img.icons8.com/external-prettycons-solid-prettycons/50/000000/external-pc-tower-devices-prettycons-solid-prettycons.png" className="imgPC" />
            </button>
            <h5>GABINETE</h5>
          </div>
          <div className="fonte">
            <button type="button" className="btn btn-dark" id="fonteButton">
              <img src="https://img.icons8.com/ios-filled/50/000000/lightning-bolt--v1.png" className="imgPC" />
            </button>
            <h5>FONTE DE ALIMENTAÇÃO</h5>
          </div>
          <div className="final">
            <button type="button" className="btn btn-dark" id="finalButton">
              <img src="https://img.icons8.com/ios-filled/50/000000/check--v1.png" className="imgPC" />
            </button>
            <h5>FINALIZAÇÃO</h5>
          </div>
        </div>
        <div className="backgroundFinal">
        </div>
      </div>
    </>
  )
}

export default PCs