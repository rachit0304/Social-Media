import React from 'react'

const Loader = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="spinner-border spinner" style={{width: "3rem" , height: "3rem"}} role="status">
        </div>
        </div>
    </div>
  )
}

export default Loader
