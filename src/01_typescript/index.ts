/* --- also look at https://stackblitz.com/edit/vancity-typescript-basics --- */

// === basic types ===
const two = 2
const three = "3"
let twentythree = two + three
console.log(twentythree)


// === functions ===
const uppercase = (text: string) => text.toLocaleUpperCase()
uppercase("Bernhard")
// uppercase(23)
// uppercase({ name: "Bernhard" })
console.log(uppercase("Bernhard"))


// === psychology -> genders ===
const average = (numbers: number[]) => numbers.reduce((sum, cur) => sum + cur) / numbers.length
const count = <T>(items: T[], match: T) => items.filter(item => item === match).length

const testdata = 
  [ { nr: 1, gender: "f", height: 165}
  , { nr: 2, gender: "m", height: 170}
  , { nr: 3, gender: "m", height: 185}]
const heights = testdata.map(p => p.height)
const genders = testdata.map(p => p.gender)

console.log(average(heights))
// console.log(average(genders))
console.log(count(genders, "m"))
