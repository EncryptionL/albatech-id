import React from 'react'

function Card2({ image, category, title, description }) {
  return (
    <div className="card h-100">
      <img src={image} className='card-img-top' alt="Card Image" />
      <div className="card-body">
        <small className="text-body-secondary">{ category }</small>
        <h5 className="card-title text-primary">{ title }</h5>
        <p className="card-text">{ description }</p>
      </div>
    </div>
  )
}

export default Card2