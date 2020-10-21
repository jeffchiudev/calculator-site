const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
  return number1 - number2;
};

const multiply = function(number1, number2) {
  return number1 * number2;
};

const divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  // $("form#calculate").submit(function(event) {
  //   event.preventDefault();
  //   const number1 = parseInt($("#num1").val());
  //   const number2 = parseInt($("#num2").val());
  //   let result = add(number1, number2);
  //   $("#output").text(result);
   $("form#calculate").submit(function(event) {
     event.preventDefault();
     const number1 = parseInt($("#num1").val());
     const number2 = parseInt($("#num2").val());
     let result = subtract(number1, number2);
    $("#output").text(result);
  });
  // });
});