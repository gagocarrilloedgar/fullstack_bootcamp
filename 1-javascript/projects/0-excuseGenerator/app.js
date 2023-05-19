window.onload = function () {
  let who = ['The dog', 'My grandma', 'His turtle', 'My bird'] // 0, 1, 2, 3
  let action = ['ate', 'peed', 'crushed', 'broke']
  let what = ['my homework', 'the keys', 'the car']
  let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying']
  let place = ['otro1', 'otro2']
  let place2 = ['otro1', 'otro2']

  const matrix = [who, action, what, when, place, place2]

  const excuse = generateSentence(matrix)

  const excuseElement = document.getElementById('excuse')
  excuseElement.innerHTML = excuse
}

function getRandomInt (max) {
  return Math.floor(Math.random() * max)
}

function getRandomWord (array) {
  const index = getRandomInt(array.length)
  const selectedWord = array[index]
  return selectedWord
}

function generateSentence (matrix) {
  const words = []

  matrix.forEach(element => {
    // Aquí ejecuta algo para cada element dentro de matrix
    const selectedWho = getRandomWord(element)
    words.push(selectedWho)
  })

  return words.join(' ')
}

function manualSentenceGeneration (who, action, what, when, place) {
  // creación de una variable = array[index en función de la longitud de array]
  const selectedWho = getRandomWord(who)
  const selectedAction = getRandomWord(action)
  const selectedWhat = getRandomWord(what)
  const selectedWhen = getRandomWord(when)
  const selectedPlace = getRandomWord(place)

  return `${selectedWho} ${selectedAction} ${selectedWhat} ${selectedWhen} ${selectedPlace}`
}
