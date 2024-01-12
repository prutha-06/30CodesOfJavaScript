//-----Type Conversion=explicit & coercion=implicit-----
//type conversion
const ipYear = "1991";
console.log(Number(ipYear)); //conversion
console.log(ipYear + 18); //199118
console.log(Number(ipYear) + 18); //2009

console.log(Number("patu")); //NaN=Not a Number
console.log(typeof NaN); //number

console.log(String(23)); //23 string type

//type coercion
console.log("I am " + 23 + " years old"); //+ operators convert number into string in op
console.log("23" - "10" - 3); //10-string converted into number
console.log("23" + 10 - "3"); //2307
console.log("20" * "2"); //40
console.log("20" % "2"); //0

let n = "1" + 1; //'11'string
n = n - 1; //11-1
console.log(n);

let m = 2 + 3 + 4 + "5";
console.log(m); //95

let k = "10" - "4" - "3" - 2 + "5";
console.log(k); //15
