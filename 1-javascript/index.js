// --- Variables ---

// Data Types
// Boolean;
// String;
// Number;
// Undefined;
// Array;
// Objects;
// Null;

const name = 'Edgar' // String
const number = 5 // Number
const isTrue = true // Boolean

const Undefined = undefined // Undefined
const array = [1, 2, 'Edgar'] // Array
const aray2 = [1 == 1, 'Edgar', undefined]

const emptyArray = []
const EmptyObject = {}

const a = 5 // age of a person
const b = 6 // milesPerHour of a person

const age = 5
const milesPerHour = 6

const MONDAY = 'Monday'

// nullish coalescing
const object = {
  name: 'Edgar',
  age: 25,
  object2: {
    name: 'Edgar',
    age: 25,
    nulTypes: null
  }
}

// Operations (Numbers & Strings)

console.log(5 + 5) // addition
console.log(5 - 5) // subtraction
console.log(5 * 5) // multiplication
console.log(5 / 5) // division
console.log(5 % 2) // modulus
console.log(5 ** 5) // exponent

console.log('5' + '5' + '10') // concatenation
console.log('Hello' + ' ' + 'World')
// Split
console.log('Hello World'.split('o'))
// Replace
console.log('Hello World'.replace('World', 'Edgar'))
// Includes
console.log('Hello World'.includes('World'))
// StartsWith
console.log('Hello World'.startsWith('Hello'))

console.log('Hello'.toLowerCase())
console.log('hello'.indexOf('e'))

// Doubts about how to do something

// - Oficial documentation - Errors FAQs section
// - StackOverflow - General
// - Github - Specific

// --- Functions ---

function add(a, b) {
  return a + b
}

console.log(add(5, 5))
console.log(add('6', '5'))

const newNiceObject = {
  name: 'Edgar',
  age: 25
}

const newNiceObject2 = {
  name: 'Mario',
  age: 25
}

function consoleLogObject(carName, carYear) {
  const newCarYear = 2 * carYear
  console.log(`${carName} ${newCarYear}`)
}

consoleLogObject('Ford', 2015)
consoleLogObject('Ford', '2016')

function nestedFunction(computeSum, a, b) {
  const sum = computeSum(a, b)
  console.log('The result is : ' + sum)
  return false
}

nestedFunction(add, 5, 5)

// Pure functions --> functions that return the same result for the same inputs
// Impucts functions

// --- Operators --- ==
console.log(5 != 4)

// OR, AND , NOR

const logicalCondition = 5 == 5 || 5 == 6

// --- Flow control (if, else, for | for (item in items), while, switch) ---

if (nestedFunction(add, 5, 5)) {
  console.log('5 is equal to 5')
} else {
  console.log('5 is not equal to 5')
}

const numbersArray = [1, 2, 4, 5, 6, 7, 8, 9, 10]

for (item in numbersArray) {
  console.log(numbersArray[item])
}

for (let i = 10; i > 0; i++) {
  console.log(numbersArray[i])
}

// numbersArray.forEach((item) => console.log(item));
let whileValue = 10

while (whileValue > 3) {
  console.log(whileValue)
  whileValue = whileValue - 1
}

const switchValue = '5'

switch (switchValue) {
  case 5:
    console.log('5')
    break
  case 'work':
    console.log('6')
    break
  default:
    console.log('default')
    break
}

if (switchValue === '5' || (switchValue === 'work' && switchValue === '5')) {
  console.log('5')
} else if (switchValue === 6) {
  console.log('6')
} else if (switchValue === 6) {
  console.log('6')
} else {
  console.log('default')
}

// --- Conditionals (or, and, nor, ternary, greater) ---

const ternaryValue = 'work'
const anotherWord = 'job'

const condition = ternaryValue === ternaryValue ? '5' : '6'

function withTernary(value) {
  return value === 'work' ? '5' : '6'
}

if (ternaryValue === 'work') withTernary('ternaryValue')
