import React, { Fragment } from 'react'

import LoginForm from '../components/forms/LoginForm'

function LoginPage() {
  return (
    <Fragment>
      <main className="flex-shrink-0 my-5 pt-5">
        <div className="container mt-5">
          <div className="row justify-content-center gy-5">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card shadow">
                <div className="card-body">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default LoginPage