import React from 'react'

export const SimpleCounterButton = () => {
  let valueNotState = 0
  const [state, setState] = React.useState(() => 1)

  const handleAddOne = () => setState(prev => prev + 1)
  const minusOne = () => setState(prev => prev - 1)

  return (
    <div>
      <button onClick={minusOne}>-1 </button>
      <div
        style={{
          display: 'inline-block',
          width: '50px',
          textAlign: 'center'
        }}
      >
        {state}
        <div>{`value not state: ${valueNotState}`}</div>
      </div>
      <button onClick={handleAddOne}> + 1</button>
    </div>
  )
}
