import React from 'react'

export const AuthContext = React.createContext(null)

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState({
    id: null,
    loading: true,
    error: null,
    token: null,
    user: null
  })

  const handlAuthState = (key, value) =>
    setAuth(prev => ({ ...prev, [key]: value }))

  const login = (email, password) => {
    handlAuthState('loading', true)
    handlAuthState('error', null)
  }

  return (
    <AuthContext.Provider value={{ auth, handlAuthState, login }}>
      {children}
    </AuthContext.Provider>
  )
}
