import React, { useState } from 'react'

import { login, useAuth } from '../../providers/AuthProvider'

function LoginForm() {
  const { setIsAuthenticated } = useAuth()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    setIsSubmitting(true)

    login(formData, setIsAuthenticated)
      .finally(() => setIsSubmitting(false))
  }

  return (
    <form method='post' onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} disabled={isSubmitting} required/>
        <label htmlFor="email">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} disabled={isSubmitting} required/>
        <label htmlFor="password">Password</label>
      </div>
      <div className="row justify-content-end">
        <div className="col-auto">
          <button type="submit" className="btn btn-primary rounded-pill py-2 px-4" disabled={isSubmitting}>
            <strong>
              Login
              &nbsp;
              { isSubmitting && (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) }
            </strong>
          </button>
        </div>
      </div>
    </form>
  )
}

export default LoginForm