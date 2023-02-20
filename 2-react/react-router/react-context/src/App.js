import './App.css'
import { useAuth } from './AuthContext'
import { useUser } from './UserContext'
import { UserProfileCard } from './UserProfileCard'

function App () {
  const [user, setUser] = useUser()
  const handleState = value => setUser(prev => ({ ...prev, name: value }))

  return (
    <>
      <UserProfileCard />
      <UserStats />
      <input
        type='text'
        value={user.name}
        onChange={e => handleState(e.target.value)}
      />
    </>
  )
}

const UserStats = () => {
  const { auth } = useAuth()
  if (!auth.token) return <h1>loading</h1>

  return null
}
export default App
