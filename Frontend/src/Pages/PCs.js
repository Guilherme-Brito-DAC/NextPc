import React from 'react'
import './PCs.css'

function PCs() {


  return (
    <>

      <div>
        <div className="background">
          <div className="construcao">
            <div className="peças">
              <h5>Processador</h5>
              <div className="img">
              </div>
              <div class="dropdown">
                <button className="btn btn-light">Selecione</button>
                <div className="dropdown-content">
                  <a href="#">Processador 1</a>
                  <a href="#">Processador 2</a>
                  <a href="#">Processador 3</a>
                </div>
              </div>
            </div>
            <div className="peças">
              <h5>Placa mãe</h5>
              <div className="img">
              </div>
              <div class="dropdown">
                <button className="btn btn-light">Selecione</button>
                <div className="dropdown-content">
                  <a href="#">Placa mãe 1</a>
                  <a href="#">Placa mãe 2</a>
                  <a href="#">Placa mãe 3</a>
                </div>
              </div>
            </div>
            <div className="peças">
              <h5> Memória RAM</h5>
              <div className="img">
              </div>
              <div class="dropdown">
                <button className="btn btn-light">Selecione</button>
                <div className="dropdown-content">
                  <a href="#">Memória RAM 1</a>
                  <a href="#">Memória RAM 2</a>
                  <a href="#">Memória RAM 3</a>
                </div>
              </div>
            </div>
            <div className="peças">
              <h5> Placa de vídeo</h5>
              <div className="img">
              </div>
              <div class="dropdown">
                <button className="btn btn-light">Selecione</button>
                <div className="dropdown-content">
                  <a href="#">Placa de vídeo 1</a>
                  <a href="#">Placa de vídeo 2</a>
                  <a href="#">Placa de vídeo 3</a>
                </div>
              </div>
            </div>
            <div className="peças">
              <h5>HD</h5>
              <div className="img">
              </div>
              <div class="dropdown">
                <button className="btn btn-light">Selecione</button>
                <div className="dropdown-content">
                  <a href="#">HD 1</a>
                  <a href="#">HD 2</a>
                  <a href="#">HD 3</a>
                </div>
              </div>
            </div>
            <div className="peças">
              <h5>SSD</h5>
              <div className="img">
              </div>
              <div class="dropdown">
                <button className="btn btn-light">Selecione</button>
                <div className="dropdown-content">
                  <a href="#">SSD 1</a>
                  <a href="#">SSD 2</a>
                  <a href="#">SSD 3</a>
                </div>
              </div>
            </div>
            <div className="peças">
              <h5>Gabinete</h5>
              <div className="img">
              </div>
              <div class="dropdown">
                <button className="btn btn-light">Selecione</button>
                <div className="dropdown-content">
                  <a href="#">Gabinete 1</a>
                  <a href="#">Gabinete 2</a>
                  <a href="#">Gabinete 3</a>
                </div>
              </div>
            </div>
            <div className="peças">
              <h5> Fonte</h5>
              <div className="img">
              </div>
              <div class="dropdown">
                <button className="btn btn-light">Selecione</button>
                <div className="dropdown-content">
                  <a href="#">Fonte 1</a>
                  <a href="#">Fonte 2</a>
                  <a href="#">Fonte 3</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="background">
          <h5>TOTAL:</h5>
          <h5>R$ XXXX,XX</h5>
        </div>
      </div>
    </>
  )
}

export default PCs