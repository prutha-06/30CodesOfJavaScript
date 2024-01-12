//------OPERATORS------

//Arithmetic
const now = 2023;
const age = now - 2001;
const ageAmu = now - 1998;
console.log(age);
console.log(ageAmu);

console.log(age, ageAmu);
console.log("Amu= " + ageAmu + " Patu= " + age);
console.log(age * 2, ageAmu / 10, 2 ** 3); //2**3=8

const fName = "patu";
const lName = "rasal";
console.log(fName + " " + lName); //concatination

//Assignment operator
let x = 10 + 5; //15
x += 10; //15+10=25
x *= 4; //25*4=100
x++; //101
x--; //100
console.log(x);

//Comparison Operator//<,>,<=,>=,==,!=
console.log(age > ageAmu); //false
console.log(age >= 18);
const isFullAge = age >= 18; //boolean

const now1 = 2037;
const age1 = now - 1991;
const ageAmu1 = now - 2018;

console.log(now - 1991 > now - 2018);

let m, n;
m = n = 12 - 6 - 2;
console.log(x, y);

//##Challenge -1
const marksMass = 78;
const marksht = 1.69;
const johnsMass = 92;
const johnsht = 1.95;
const mBMI = marksMass / (marksht * marksht);
console.log("Marks= " + mBMI);

const jBMI = johnsMass / (johnsht * johnsht);
console.log("John= " + jBMI);

const markHigherBMI = mBMI > jBMI;
console.log(markHigherBMI);
