import React, { useState } from 'react'
import './Comunidade.css'

function Comunidade() {

  const [Loading, SetLoading] = useState(true);


  return (
    <>
      <div>
        {
          Loading &&
          <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "100px" }}>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          </div>
        }
      </div>
    </>
  )
}

export default Comunidade