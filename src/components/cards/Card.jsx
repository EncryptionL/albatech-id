import React, { useState } from 'react'

function Card({ icon, title, description }) {
  const [isShown, setIsShown] = useState(false)

  return (
    <div className="card h-100" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      <div className="card-body">
        <h5 className="card-title mb-3">
          <div className="row justify-content-center justify-content-lg-start">
            <div className="col-auto">
              <img src={icon} alt="Icon" />
            </div>
          </div>
        </h5>
        <h5 className="card-title text-primary">{ title } { isShown ? <i className="fa-solid fa-arrow-right-long"></i> : ''}</h5>
        <p className="card-text">{ description }</p>
      </div>
    </div>
  )
}

export default Card