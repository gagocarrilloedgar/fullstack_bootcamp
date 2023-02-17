import * as React from 'react'

import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useParams
} from 'react-router-dom'

import Home from './home.jsx'

const Contacts = () => {
  const { contactId } = useParams()
  return <h1>Something {contactId}</h1>
}

const navigation = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/demo',
    element: <Link to='/contacts/123'>Go to contacts</Link>
  },
  {
    path: 'contacts/:contactId',
    element: <Contacts />
  }
])

export const HomeRouterWithCreateBrowser = () => (
  <RouterProvider router={navigation} />
)
