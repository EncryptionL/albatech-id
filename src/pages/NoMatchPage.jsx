import React, { Fragment } from 'react'

function NoMatchPage() {
  return (
    <Fragment>
      <main className="flex-shrink-0 my-5 pt-5">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-auto">
              <h1 className="display-1 text-shadow">
                <strong>404 Not Found!</strong>
              </h1>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default NoMatchPage