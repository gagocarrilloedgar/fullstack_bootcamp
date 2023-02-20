import React from 'react'

import { AuthContext } from './AuthProvider'

export const useAuth = () => React.useContext(AuthContext)
