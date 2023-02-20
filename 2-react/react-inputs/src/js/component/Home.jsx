import React, { useState } from 'react'

//We define the initial state of our component. We define it outside the component
// so we don't create a new object every time the component is rendered
const initialState = {
  name: 'John-default',
  age: 0
}

export const Home = () => {
  // We use the useState hook to create a state and a function to update it
  const [state, setState] = useState(initialState)

  // This is a function that updates the state. It receives a key and a value (it can be any type)
  const udpateState = (key, value) => {
    setState(prev => {
      return {
        ...prev,
        [key]: value
      }
    })
  }

  // This is also a generic function to handle input event changes
  const handleOnChange = e => {
    const newValue = e.target.value
    const key = e.target.name
    udpateState(key, newValue)
  }

  const onSubmit = () => {
    if (state.name === '' || state.name === initialState.name)
      return alert('Name is required')
    alert('Form submitted')
  }

  return (
    <>
      <input
        type='text'
        name='name' // This is for the state
        id='home-name-input'
        aria-label='Name input' // This is for accessibility (screen readers)
        placeholder='Type here'
        value={state.name}
        onChange={handleOnChange}
      />
      <input
        type='number'
        id='home-age-input'
        aria-label='Age input'
        name='age'
        placeholder='Type your age here'
        value={state.age}
        onChange={handleOnChange}
      />
      <button
        type='button'
        id='submit-home-form'
        aria-label='Submit contact form'
        onClick={onSubmit}
      >
        Submit
      </button>
    </>
  )
}
