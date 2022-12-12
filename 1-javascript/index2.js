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

// nullish coalescing
const emptyArray = [] // false or null
const EmptyObject = {} // false or null

const a = 5 // age of a person
const b = 6 // milesPerHour of a person

const age = 5
const milesPerHour = 6 // camelCase

const MONDAY = 'Monday'

// nullish coalescing
const object = {
  name: 'Edgar',
  age: 25,
  array: [1, 2, 4],
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

'string'.split('r')

const username = 'edgar@nuwe.io'.split('@')[0] + '5' // Split

console.log('Hello World'.split('o'))
// Replace
console.log('Hello World'.replace('World', 'Edgar'))

// Includes
console.log('Hello World'.includes('World'))

// StartsWith
console.log('Hello World'.startsWith('Hello'))

console.log('Hello'.toLowerCase())

console.log({ index: 'hello'.indexOf('e') })

// - Oficial documentation - Errors FAQs section
// - StackOverflow - General
// - Github - Specific

// --- Functions ---

// void function
function functionName(a, b) {
  return a + b
}

// Arraw function
const functionName2 = (a, b) => {
  const newVar = a + b
  return newVar
}

// --- Operators --- == || < =
console.log(5 != 4)
console.log(4 > 5)
console.log(4 <= 5)

const comlexeCondition = 5 > 4 && 4 < 5

const comlexeCondition2 = 5 > 4 || 4 < 5

const comlexeConditionOppste = !comlexeCondition
const comlexeConditionOppste2 = !comlexeCondition2

// OR, AND , NOR

// --- Flow control (if, else else if,switch, for | for (item in items), while) ---

if (5 == 5) {
  console.log('5 is equal to 5')
} else if (5 == 6) {
  console.log('5 is not equal to 5')
} else if (5 == 7) {
  console.log('5 is not equal to 5')
} else {
  console.log('default')
}

const switchCase = 5

switch (switchCase) {
  case 5:
    console.log('5 is equal to 5')
    break
  case 6:
    console.log('5 is not equal to 5')
    break
  case 7:
    console.log('5 is not equal to 5')
    break
  default:
    console.log('default')
    break
}

// i-- --> i = i - 1
// i++ --> i = i + 1

for (let i = 0; i < 10; i++) {
  console.log(i)
}

const sampleArray = ['hello', 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let index in sampleArray) {
  console.log('forIn:' + sampleArray[index])
}

sampleArray.forEach((item) => {
  console.log(item)
})

let whileIndex = 0

while (whileIndex < 10) {
  console.log(conditionToStop)
  whileIndex++
}

// --- Conditionals (or, and, nor, ternary, greater) ---
const variable = 5

const conditionToStop = variable > 5 ? 'greater than 5' : 'less than 5'
console.log(conditionToStop)

let conditionToStop2

const newArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
