import * as React from 'react'

import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom'
import Home from './home.jsx'

export const HomeRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route
          exact
          path='/demo'
          element={
            <Link style={{ fontWeight: 900 }} to='/contacts/123'>
              Go to contacts
            </Link>
          }
        />
        <Route path='/contacts/:id' element={<Contacts />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

const Contacts = () => {
  const { id } = useParams()
  return <h1>Something {id}</h1>
}
