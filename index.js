// Iteration 1: Names and Input
 
const hacker1 = "Carlos"
console.log(`The driver's name is ${hacker1}`)
 
const hacker2 = "Juliano"
console.log(`The navigator's name is Juliano`)
 
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
//3.1:
const hacker1Up = hacker1.toUpperCase()
 
for (let i = 0; i < hacker1Up.length; i++) {
    console.log(hacker1Up[i])
}
 
//3.2
 
for (let i = hacker2.length; i >= 0; i--) {
    console.log(hacker2[i])
}
 
//3.3
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}
 




