import React, { useContext } from 'react'
import { createBrowserRouter, redirect } from 'react-router-dom'
import Cookie from 'js-cookie'

import { AuthContext } from './features/Authentication'

import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'

import ProtectedRoute from './components/ProtectedRoute'

const {} = useContext(AuthContext)

const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/profile',
    element: <ProtectedRoute element={ProfilePage}/>
  },
  {
    path: '/login',
    element: <LoginPage />,
    action: async ({ request }) => {
      try {
        const formData = await request.formData()

        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('https://reqres.in/api/login', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        })

        const responseData = await response.json()

        Cookie.set('token', responseData.token, { expires: 3 })

        

        return navigate('/profile')
      } catch (error) {
        return navigate('/')
      }
    }
  }
])

export default Router