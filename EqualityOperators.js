//---------Equality operators----------
//== VS ===
const age = 18;
//strict equality
if (age === 18) console.log("you just becoame adult");

if (18 == 18)
  //loose equality
  console.log("just became adult");

// const fav = prompt("what's your favourite number? ");
// console.log(fav);
// console.log(typeof fav);

// if (fav == 20) {
//   console.log("It is positive number");
// }

const fav = Number(prompt("what's your favourite number? "));
console.log(fav);
console.log(typeof fav);

if (fav === 20) {
  console.log("20 is positive number");
} else if (fav === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("number is not 20 or 7");
}

if (fav !== 20) {
  console.log("why not 23");
}
