//------if-else----------
const age = 10;
const isOld = age >= 18;
console.log(isOld);
//controlled-structure
if (isOld) {
  console.log("Amu can get license");
} else {
  console.log("Not Applicable");
}

//--------
const bYear = 1991;
let centuary;
if (bYear <= 2000) {
  centuary = 20;
} else {
  centuary = 21;
}
console.log(centuary);

//##Challenge-2
const marksMass = 78;
const marksht = 1.69;
const johnsMass = 92;
const johnsht = 1.95;
const mBMI = marksMass / (marksht * marksht);
console.log("Marks= " + mBMI);

const jBMI = johnsMass / (johnsht * johnsht);
console.log("John= " + jBMI);

if (mBMI > jBMI) {
  console.log("Marks " + mBMI + " is higher than Johns " + jBMI);
} else {
  console.log("Johns " + jBMI + " is higher than Marks " + mBMI);
}
