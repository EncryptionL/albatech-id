import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import Cookie from 'js-cookie'

const BASE_URL = 'https://reqres.in/api'

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState(undefined)
  
  const authentication = useMemo(() => ({ token, isAuthenticated, setIsAuthenticated }), [token, isAuthenticated])

  useEffect(() => {
    const unsubscribe = () => {
      const cookieToken = Cookie.get('token')
      
      if (cookieToken) {
        setToken(cookieToken)
        setIsAuthenticated(true)
      }

      return
    }

    return () => {
      unsubscribe()
    }
  }, [isAuthenticated])
  

  return (
    <AuthContext.Provider value={authentication}>
      { children }
    </AuthContext.Provider>
  )
}

export async function login(data, setIsAuthenticated) {
  const controller = new AbortController()

  try {
    const timeoutId = setTimeout(() => controller.abort(), 3000)

    const response = await fetch(`${BASE_URL}/login`, {
      signal: controller.signal,
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) return null

    const responseData = await response.json()

    setIsAuthenticated(true)

    Cookie.set('token', responseData.token, { expires: 3 })

    return responseData
  } catch (error) {
    console.error(error.message)
  }
}

export function logout(setIsAuthenticated) {
  Cookie.remove('token')
  setIsAuthenticated(false)
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider