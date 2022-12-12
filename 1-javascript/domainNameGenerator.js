const pronouns = ['the', 'our']
const adjs = ['great', 'big']
const nouns = ['jogger', 'racoon']
const dotComs = ['com', 'net', 'org']

const dotCom = '.com'

const domainNameGenerator = (pronouns, adjs, nouns) =>
  pronouns.map((pronoun) => adjs.map((adj) => nouns.map((noun) => console.log(`${pronoun}${adj}${noun}${dotCom}`))))

const domainNameGeneratorFors = (pronouns, adjs, nouns, dotComs) => {
  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjs.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < dotComs.length; l++) {
          console.log(`${pronouns[i]}${adjs[j]}${nouns[k]}${dotComs[l]}`)
        }
      }
    }
  }
}

// domainNameGenerator(pronouns, adjs, nouns)
// domainNameGeneratorFors(pronouns, adjs, nouns, dotComs)

// Callback
const domainNameGenerator2 = (pronouns, adjs, nouns, print) =>
  pronouns
    .map((pronoun) => adjs.map((adj) => nouns.map((noun) => `${pronoun}${adj}${noun}${dotCom}`)))
    .flat(2)
    .map((item) => print(item))

domainNameGenerator2(pronouns, adjs, nouns, (e) => console.log(e))
