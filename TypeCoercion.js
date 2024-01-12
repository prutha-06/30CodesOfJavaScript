//type coercion using if-else
const money = 0; //0 is falsy
if (money) {
  //fasle
  console.log("do not spend money");
} else {
  console.log("you should get a job"); //this executes
}

let ht;
if (ht) {
  //fasle
  console.log("YaY height is defined");
} else {
  console.log("height is undefined"); //executes
}
