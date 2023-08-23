import React from 'react'
import { Link } from 'react-router-dom'

function Card3() {
  return (
    <div className="card text-bg-primary card-shadow border-dark text-center py-3 rounded-5">
      <div className="card-body">
        <p className="card-text">Is software important for your business?</p>
        <h2 className="card-title mb-3">Build it with Albatech</h2>
        <Link to="/" className="btn btn-outline-dark rounded-pill py-3 px-5">
          <strong>Consultation Now</strong>
        </Link>
      </div>
    </div>
  )
}

export default Card3