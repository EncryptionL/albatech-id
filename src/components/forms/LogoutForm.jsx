import React from 'react'

import { logout, useAuth } from '../../providers/AuthProvider'

function LogoutForm() {
  const { setIsAuthenticated } = useAuth()

  function handleSubmit(e) {
    e.preventDefault()

    logout(setIsAuthenticated)
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <button type="submit" className='btn btn-primary rounded-pill border-dark py-2 px-4 py-md-3 px-lg-5'>
        <strong>Logout</strong>
      </button>
    </form>
  )
}

export default LogoutForm