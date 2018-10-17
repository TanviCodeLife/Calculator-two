//this is the business logic portion
var add = function(addNumber1, addNumber2) {
return addNumber1 + addNumber2;
};
//Division
var resultDivide = function(divNumber1, divNumber2) {
return divNumber1 / divNumber2;
};

//Subtract
var resultSubtract= function(subNumber1, subNumber2) {
return subNumber1 - subNumber2;
};

//Multiply
var resultMultiply= function(mulNumber1, mulNumber2) {
return mulNumber1 * mulNumber2;
};


//this is the interface logic portion
$(document).ready(function() {
  $("form#add").submit(function(event){
   event.preventDefault();
var addNumber1 = parseInt($("#add1").val());
var addNumber2 = parseInt($("#add2").val());

var addResult = add(addNumber1, addNumber2);
$("#outputAdd").text(addResult);
});

  $("form#divide").submit(function(event){
    event.preventDefault();
var divNumber1 = parseInt($("#divide1").val());
var divNumber2 = parseInt($("#divide2").val());

var divideResult = resultDivide(divNumber1, divNumber2);
$("#outputDivide").text(divideResult);
});

$("form#subtract").submit(function(event){
  event.preventDefault();

var subNumber1 = parseInt($("#subtract1").val());
var subNumber2 = parseInt($("#subtract2").val());

var subtractResult = resultSubtract(subNumber1, subNumber2);
$("#outputSubtract").text(subtractResult);
});

$("form#multiply").submit(function(event){
  event.preventDefault();

var mulNumber1 = parseInt($("#multiply1").val());
var mulNumber2 = parseInt($("#multiply2").val());

var multiplyResult = resultMultiply(mulNumber1, mulNumber2);
$("#outputMultiply").text(multiplyResult);

  });
});
