import React, { Fragment } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

import { useAuth } from './providers/AuthProvider'
import NoMatchPage from './pages/NoMatchPage'

function GuestRoute({ element: Element }) {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <Navigate to='/profile' /> : <Element />
}

function ProtectedRoute({ element: Element }) {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <Element /> : <Navigate to='/login' />
}

function Router() {
  return (
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path='/login' element={<GuestRoute element={LoginPage} />} />
      <Route path='/profile' element={<ProtectedRoute element={ProfilePage} />} />
      <Route path='*' element={<NoMatchPage />} />
    </Routes>
  )
}

export default Router