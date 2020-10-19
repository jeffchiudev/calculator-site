function add(number1, number2) {
  return number1 + number2;
}
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number to add:"));
const result1 = add(number1, number2);
alert(result1);

function subtract(number3, number4) {
  return number3 - number4;
}
const number3 = parseInt(prompt("Enter a number:"));
const number4 = parseInt(prompt("Enter another number to subtract:"));
const result2 = subtract(number3, number4);
alert(result2);

function multiply(number5, number6) {
  return number5 * number6;
}
const number5 = parseInt(prompt("Enter a number:"));
const number6 = parseInt(prompt("Enter another number to multiply:"));
const result3 = multiply(number5, number6);
alert(result3);

function divide(number7, number8) {
  return number7 / number8;
}
const number7 = parseInt(prompt("Enter a number:"));
const number8 = parseInt(prompt("Enter another number to divide:"));
const result4 = divide(number7, number8);
alert(result4);