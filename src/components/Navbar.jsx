import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Logo from '../assets/images/logo.png'

import { useAuth } from '../providers/AuthProvider'

import LogoutForm from './forms/LogoutForm'

const navLinks = [
  {
    path: '/service',
    name: 'Service'
  },
  {
    path: '/about',
    name: 'About'
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

function Navbar() {
  const { isAuthenticated } = useAuth()

  return (
    <nav className="navbar navbar-expand-md bg-white shadow-sm fixed-top py-3">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="mx-auto">
          <Link className="navbar-brand" to="/">
            <img src={Logo} className='logo' alt="Logo" />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 d-flex justify-content-around">
            { navLinks.map(({ path, name }, i) => (
              <li key={i} className="nav-item my-auto text-center">
                <NavLink to={path} className='nav-link'>{ name }</NavLink>
              </li>
            )) }
            <li className="nav-item my-auto text-center">
              { isAuthenticated ? (
                <LogoutForm />
              ) : (
                <Link className="btn btn-primary rounded-pill border-dark py-2 px-4 py-md-3 px-lg-5" to="/login">
                  <strong>Login</strong>
                </Link>
              ) }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar