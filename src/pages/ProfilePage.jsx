import React, { Fragment } from 'react'
import { useAuth } from '../providers/AuthProvider'

function ProfilePage() {
  const { token } = useAuth()

  return (
    <Fragment>
      <main className="flex-shrink-0 my-5 pt-5">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-auto">
              <h1>Token : { token }</h1>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default ProfilePage