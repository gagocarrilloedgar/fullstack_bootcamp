import React from 'react'

import { initialState } from './initialState'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(initialState)

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}
