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
    errorElement: <h1>Not the default error</h1>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/demo2',
        element: <Link to='/contacts/2'>Go to contacts</Link>
      }
    ]
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
