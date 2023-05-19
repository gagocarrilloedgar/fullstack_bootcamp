const array = 0
const array2 = [3, 4, 5]

const newObject = {
  array,
  array2
}

//
const average = (arr) => (!arr || arr.length === 0 ? 0 : arr.reduce((a, b) => a + b, 0) / arr.length)

// --

// [3,4,5]
array2.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

const averageAtElement = (obj, key) => average(obj[key])

console.log({ average: average(array), averageElement: averageAtElement(newObject, 'array') })
console.log({ average: average(array2), averageElement: averageAtElement(newObject, 'array2') })

/// -----

const secondObject = {
  array: ['hello', 'a', 'fsf'],
  noArray: null
}

const someFunction = (key, obj) => {
  // if the value of the key is not an array return []
  if (!Array.isArray(obj[key])) return []

  // if there is no property with the key return []
  if (!obj.hasOwnProperty(key)) return []
}

const arr4 = secondObject.hasOwnProperty() ? secondObject.array : []
console.log(arr4)

// even --> means when number % 2 === 0
// odd --> means when number % 2 !== 0

// --

if (condition1) {
  if (condition2) {
    // this will no be exectued if condition 1  && condition2 is not met
  }
}

if (condition1) {
  /* do something */
}

if (condition2) {
  /* do something */
}
