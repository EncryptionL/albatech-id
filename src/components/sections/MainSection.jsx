import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../assets/images/people-looking-monitor.png'

function MainSection() {
  return (
    <main className="flex-shrink-0 my-5 pt-5 pb-md-5">
      <div className="container position-relative mt-5 py-md-5">
        <div className="row justify-content-center justify-content-lg-start align-items-center gy-3">
          <div className="col-auto">
            <h1 className="display-1 text-shadow">
              <strong>
                <span style={{ fontWeight: 600 }}>
                  <span className="position relative">
                    B
                    <small className='position-absolute border border-dark display-5 b-outline'>
                      <span className="invisible">W</span>
                    </small>
                  </span>
                  uild or scale up
                </span>
                <br />
                your development team
              </strong>
            </h1>
            <div className="row g-3 g-md-4">
              <div className="col-auto d-flex align-items-center">
                <hr className="text-primary rounded-pill" style={{ width: 70, borderTop: '5px solid', opacity: '100%' }}/>
              </div>
              <div className="col d-flex align-items-center">
                <p className="lead m-0" style={{ textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>in weeks, not months</p>
              </div>
              <div className="col-12 text-center text-md-start">
                <Link to="/" className="btn btn-primary rounded-pill py-3 px-5"><strong>Book now</strong></Link>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <img src={Img1} alt="" className='img-fluid position-absolute' style={{ zIndex: '-1', top: 0, right: 0 }} />
            <div className="dots dot-yellow dot-3"></div>
            <div className="dots dot-yellow dot-4"></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainSection