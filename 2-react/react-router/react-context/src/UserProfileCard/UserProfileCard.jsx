import React from 'react'
import { useAuth } from '../AuthContext'
import { useUser } from '../UserContext'

export const UserProfileCard = () => {
  const [user] = useUser()
  const { auth } = useAuth()
  const { name, email } = user

  if (!auth.token) return <h1 className='text-center'>Please log in</h1>
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  )
}
