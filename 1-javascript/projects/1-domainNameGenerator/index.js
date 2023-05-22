const pronouns = ['the', 'our']
const adjs = ['great', 'big']
const nouns = ['jogger', 'racoon']
const dotComs = ['com', 'net', 'org']
const dotCom = '.com'

const domainNameGenerator = (pronouns, adjs, nouns) =>
  pronouns.map(pronoun => adjs.map(adj => nouns.map(noun => console.log(`${pronoun}${adj}${noun}${dotCom}`))))

const domainNameGeneratorFors = (pronouns, adjs, nouns, dotComs) => {
  let generatedDomains = []
  for (let i = 0; i < pronouns.length; i++) {
    // i = 0 -> the
    for (let j = 0; j < adjs.length; j++) {
      // j = 0 -> great, j = 1 -> big
      for (let k = 0; k < nouns.length; k++) {
        // k = 0 -> jogger, k = 1 -> racoon
        for (let l = 0; l < dotComs.length; l++) {
          generatedDomains.push(`${pronouns[i]}${adjs[j]}${nouns[k]}${dotComs[l]}`)
        }
      }
    }
  }

  return generatedDomains
}

const domainNameGeneratorRecursion = (arrayOfArrays, index = 0, result = '') => {
  let generatedDomains = []

  if (index === arrayOfArrays.length) {
    return result
  }

  for (let i = 0; i < arrayOfArrays[index].length; i++) {
    const generatedDomain = domainNameGeneratorRecursion(arrayOfArrays, index + 1, result + arrayOfArrays[index][i])
    generatedDomains.push(generatedDomain)
  }

  return generatedDomains.flat(arrayOfArrays.length)
}

const domainNameGeneratorWithMapAndCbk = (pronouns, adjs, nouns, print) =>
  pronouns
    .map(pronoun => adjs.map(adj => nouns.map(noun => `${pronoun}${adj}${noun}${dotCom}`)))
    .flat(2)
    .map(item => print(item))

console.log(domainNameGeneratorFors(pronouns, adjs, nouns, dotComs))
domainNameGeneratorWithMapAndCbk(pronouns, adjs, nouns, e => console.log(e))
console.log(domainNameGeneratorRecursion([pronouns, adjs, nouns, dotComs]))
