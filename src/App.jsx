import React, { Fragment } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Router from './Router'
import AuthProvider from './providers/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Router />
      <Footer />
    </AuthProvider>
  )
}

export default App