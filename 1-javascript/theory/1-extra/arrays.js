let pronoun = ['the', 'our', 'your', 'my']
let adj = ['great', 'big', 'only', 'less', 'superb', 'amazing', 'new']
let noun = ['jogger', 'racoon', 'shop', 'icon', 'plane', 'holiday']
let ext = ['.com', '.it', '.es', '.eu', '.org']
const domain = []

function domainNameGenerator() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let n = 0; n < noun.length; n++) {
        for (let t = 0; t < ext.length; t++) {
          domain.push(pronoun[i] + adj[j] + noun[n] + ext[t])
          console.log(domain)
        }
      }
    }
  }
}

domainNameGenerator()
