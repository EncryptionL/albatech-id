import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/logo.png'

import FAB from './FAB'

const links = [
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/service',
    name: 'Service'
  },
  {
    path: '/portofolio',
    name: 'Portofolio'
  },
  {
    path: '/blog',
    name: 'Blog'
  },
  {
    path: '/career',
    name: 'Career'
  }
]

function Footer() {
  return (
    <Fragment>
      <FAB />
      <footer className='mt-auto pb-3 pb-xl-5'>
        <div className="container">
          <hr />
          <div className="row justify-content-between g-3 g-lg-5 py-lg-3 py-xl-5">
            <div className="col-md-12 col-lg-5">
              <Link to='/'>
                <img src={Logo} className='logo mb-3 mb-lg-4' alt="Logo" />
              </Link>
              <p className='mb-0'>
                Albatech acts as a corporate partner to help digitize their business to accelerate trends in remote work.
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className='mb-lg-3 mb-xl-4'><strong>Website</strong></h5>
              <ul className='list-unstyled mb-0'>
                { links.map(({ path, name }, i) => (
                  <li key={i} className='mb-lg-3'>
                    <Link to={path} className='text-decoration-none'>{ name }</Link>
                  </li>
                )) }
              </ul>
            </div>
            <div id='contactus' className="col-md-6 col-lg-3">
              <h5 className='mb-lg-3 mb-xl-4'><strong>Contact</strong></h5>
              <p className='mb-lg-3'>
                The Prominence Blok 38D No.25
                <br />
                Jl. Jalur Sutera Barat, Alam Sutera, Kota Tanggerang, Banten 15143
              </p>
              <div className="d-block mb-lg-3">
                <h6 className='d-inline'>P : </h6> <a href="tel:+628118893383" target='_blank' rel="noopener noreferrer">+62 81 1889 3383</a>
              </div>
              <div className="d-block">
                <h6 className='d-inline'>E : </h6> <a href="mailto:info@albatech.id" target='_blank' rel="noopener noreferrer">info@albatech.id</a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-7">
              <span className="text-body-secondary">
                &copy; PT. Alba Digital Teknologi 2021 | All Rights Reserved
              </span>
            </div>
            <div className="col-md-5 text-md-end">
              <span className="text-body-secondary">
                <a href="#" target='_blank' rel="noopener noreferrer">Privacy policy</a>
                &nbsp; | &nbsp;
                <a href="#" target='_blank' rel="noopener noreferrer">Terms of service</a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer