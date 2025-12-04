const name = "sk akib"
const repoCount = 34

console.log(name + repoCount  + "value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sk-akib')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('a'))

const newgameName = gameName.substring(0, 2)
console.log(newgameName);

const anothergameName = gameName.slice(-6, 2)
console.log(anothergameName);


const newstringOne = "    sk akib     "
console.log(newstringOne)
console.log(newstringOne.trim())

const url = "skakib.com/profile/test.php?id=3434"
console.log(url.replace('skakib', 'user'))

console.log(url.includes('profile'))
console.log(url.includes('kidar'))

console.log(gameName.split('-'))

