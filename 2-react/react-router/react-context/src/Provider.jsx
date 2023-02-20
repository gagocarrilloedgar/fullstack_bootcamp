import { AuthProvider } from './AuthContext'
import { UserProvider } from './UserContext'

export const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  )
}
