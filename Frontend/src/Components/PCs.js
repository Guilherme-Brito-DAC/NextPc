import React, { useState } from 'react'
import './PCs.css'

function PCs() {
  return (
    <>
      <div className="back">
        <div className="etapas">
          <div className="processador">
            <img src="https://img.icons8.com/material-sharp/50/000000/smartphone-cpu.png" className="imgPC" />
            <h5>PROCESSADOR</h5>
          </div>
          <div className="placaMae">
            <img src="https://img.icons8.com/ios-filled/50/000000/motherboard.png" className="imgPC" />
            <h5>PLACA MÃE</h5>
          </div>
          <div className="RAM">
            <img src="https://img.icons8.com/external-those-icons-fill-those-icons/50/000000/external-ram-it-components-those-icons-fill-those-icons.png" className="imgPC" />
            <h5>MEMÓRIA RAM</h5>
          </div>
          <div className="placaVideo">
            <img src="https://img.icons8.com/glyph-neue/50/000000/video-card.png" className="imgPC" />
            <h5>PLACA DE VÍDEO</h5>
          </div>
          <div className="hdSsd">
            <img src="https://img.icons8.com/external-prettycons-solid-prettycons/50/000000/external-hard-drive-technology-prettycons-solid-prettycons.png" className="imgPC" />
            <h5>HD/SSD</h5>
          </div>
          <div className="gabinete">
            <img src="https://img.icons8.com/external-prettycons-solid-prettycons/50/000000/external-pc-tower-devices-prettycons-solid-prettycons.png" className="imgPC" />
            <h5>GABINETE</h5>
          </div>
          <div className="fonte">
          <img src="https://img.icons8.com/ios-filled/50/000000/lightning-bolt--v1.png" className="imgPC" />
            <h5>FONTE DE ALIMENTAÇÃO</h5>
          </div>
          <div className="final">
          <img src="https://img.icons8.com/ios-filled/50/000000/check--v1.png" className="imgPC" />
            <h5>FINALIZAÇÃO</h5>
          </div>
        </div>
        <div className="back">
          <div className="escolha">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default PCs