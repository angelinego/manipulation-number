console.log("LEVEL 0")
var numberA = 10
let numberB = 099
const numberC = 0.02

console.log(numberA)
console.log(numberB)
console.log(numberC)
console.log("-----------------------------------------------------------------------");

console.log("LEVEL 1")
console.log(numberA + numberB)
console.log(numberB - numberC)
console.log(numberA * numberC)
console.log(numberB / numberC)
console.log(numberB % numberC)
console.log("-----------------------------------------------------------------------");

console.log("LEVEL 2")
console.log("My lucky number is" + " " + numberA)
console.log(numberA >= numberB)
var numberD = 1000000000000
const numberE = -3000
console.log(numberE / numberD)
console.log("Number" + ":" + numberE)
console.log(numberE + "test")
console.log("---------------------------------------------------------------------")

console.log("LEVEL 3")
var number = [18, -200, 87, 1000]
console.log("my favorite numbers are" + " " + number.toString());
console.log(number.pop());
console.log(number);

number.push(88);
console.log(number)

console.log("loop......");
for (i = 0; i < number.length; i++) {
  console.log(number[i]);
}