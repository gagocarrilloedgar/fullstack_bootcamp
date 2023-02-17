import React from 'react'
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom'

export const StarWarsLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StarWarsBlog />} />
        <Route path='/people/:id' element={<CharacterDetail type='people' />} />
        <Route
          path='/starships/:id'
          element={<CharacterDetail type='starships' />}
        />
        <Route
          path='/plantes/:id'
          element={<CharacterDetail type='planets' />}
        />
        <Route path='*' element={<h1>404: Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export const StarWarsBlog = () => {
  return (
    <div>
      <h1>Star Wars Blog</h1>
      <CharacterList type='people' />
      <hr />
      <CharacterList type='starships' />
      <hr />
      <CharacterList type='planets' />
    </div>
  )
}

const CharacterList = ({ type }) => {
  const [characters, setCharacters] = React.useState(null)

  const getLocalData = () => {
    const data = localStorage.getItem(type)
    if (data) return JSON.parse(data)
    return null
  }

  const fetchData = async () => {
    const localData = getLocalData()
    if (localData) return setCharacters(localData)

    const characterResponse = await fetch(`https://swapi.tech/api/${type}`)
    const characterJson = await characterResponse.json()
    const characterResults = characterJson.results
    localStorage.setItem(type, JSON.stringify(characterResults))
    setCharacters(characterResults)
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  if (!characters) return <h1>Loading...</h1>

  return characters.map(character => (
    <div key={character?.name}>
      <Link to={`/${type}/${character.uid}`}>
        <h2>{character?.name}</h2>
      </Link>
    </div>
  ))
}

const CharacterDetail = ({ type }) => {
  const [character, setCharacter] = React.useState(null)
  const [fetchError, setFetchError] = React.useState(null)

  const { id } = useParams()

  React.useEffect(() => {
    if (id)
      return fetch(`https://swapi.tech/api/${type}/${id}`)
        .then(response => {
          if (!response.ok) return Promise.resolve(false)
          return response.json()
        })
        .then(data => {
          if (!data) return setFetchError('No data found')
          return setCharacter(data.result)
        })
  }, [id])

  if (fetchError) return <h1>Fetch Error: {fetchError}</h1>
  if (!character) return <h1>Loading...</h1>

  return (
    <div>
      <h2>{character.properties.name}</h2>
      <h6>{character.description}</h6>
    </div>
  )
}
