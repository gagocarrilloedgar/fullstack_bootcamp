window.onload = function () {
  let points = [40, 100, 1, 5, 25, 10]
  function compareFunction (a, b) {
    return a - b
  }

  function compareFunction2 (a, b) {
    return b - a
  }

  const arrayOfObjects = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 24 },
    { name: 'Jack', age: 26 }
  ]

  const compareFunction3 = (a, b) => {
    const nameA = a.name.toUpperCase() // ignore upper and lowercase
    const nameB = b.name.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
  }

  //console.log(points.sort(compareFunction))
  //console.log(points.sort(compareFunction2))
  //console.log(arrayOfObjects.sort(compareFunction3))

  const numbers = [4, 9, 16, 25]

  numbers.forEach((item, index) => {
    console.log(`Item at index ${index} has value ${item}`)
  })

  const modifiedNumbers = numbers.map(item => item * 2)
  console.log(modifiedNumbers)
}

function myPrevCallbackFunction (name, callback) {
  // Aquí quiero ahcer algo con el nombre
  // Y después ejecutar una función random
  name = name + ' ' + 'Perez'
  callback(name)
}

myPrevCallbackFunction('Juan', function (name) {
  const result = name + ' ' + 'Perez'
  console.log(result)
})

function myPrevCallbackFuncitonWithParams (callback) {
  callback('Hello from callback')
}
