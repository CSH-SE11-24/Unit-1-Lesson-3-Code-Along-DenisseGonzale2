// Code Along Norms: 
// 1. Only be on Repl.it/classroom resources
// 2. Actively follow along and engage
// 3. Ask questions and flag if you get stuck
// 4. Take notes as needed
let name = prompt("What's your name?")

//CONCATENATION
//with a + sign, need to add a space 
console.log("Welcome to my game, " + name)
//W backticks 
console.log('welcome to my game, ${name}')

let role= prompt("What role do you want? (magician, fighter, peasant)")
console.log(`Okay, ${name}, your role is now ${role}.`)

let powerLevel = prompt("What is ur power level?")

powerLevel = parseInt(powerLevel)
console.log(typeof powerLevel)