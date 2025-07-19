var a = 10
console.log(a) // 10


console.log(b)
var b // undefined


console.log(c)
c =10 //ReferenceError: c is not defined

console.log(d)
let d = 10 //ReferenceError: Cannot access 'd' before initialization

console.log(e)
const e = 10 //ReferenceError: Cannot access 'e' before initialization

abc()
function abc(){
    f = 10
    console.log(f,"f")
}

abvar() // TypeError: abvar is not a function
var abvar = function varabc(){
    h = 10
    console.log(h,"h")
}


letabc() //ReferenceError: letabc is not defined
let ablet = function letabc(){
    g = 10
    console.log(g,"g")
}

constabc() //ReferenceError: constabc is not defined
let abconst = function constabc(){
    i = 10
    console.log(i,"g")
}


