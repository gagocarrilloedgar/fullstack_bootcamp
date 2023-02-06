import React from 'react'
import ReactDOM from 'react-dom'

import data from './data.json'
import { SecondsCounter } from './secondsCounter.js'

export function Home () {
  // We use here the spread operator (to avoid a shallow copy of the array)
  const displayDigits = [...data].reverse()
  return (
    <div className='container rounded d-flex justify-content-center py-3'>
      <DigitsDisplay displayDigits={displayDigits} />
    </div>
  )
}

const DigitsDisplay = ({ displayDigits }) => {
  return displayDigits.map(({ value, id }) => {
    return <SecondsCounter key={id} value={value} id={id} />
  })
}

let counter = 1
let temporizador = function () {
  let aux = counter
  data.forEach((digit, index) => {
    ReactDOM.render(aux % 10, document.getElementById(digit.id))
    if (index === data.length - 1) return counter++
    aux = Math.floor(aux / 10)
  })
}

window.setInterval(temporizador, 1000)
