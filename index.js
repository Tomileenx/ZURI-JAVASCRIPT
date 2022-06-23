const firstNumber = parseFloat( prompt("input first number", ""));
const operation = prompt("operation");
const secondNumber = parseFloat( prompt("input second number", ""));

if (isNaN(firstNumber) && isNaN(secondNumber)) {
    alert("nothing")
} else {
  if (operation == "+") { 
    parseFloat(alert (firstNumber + secondNumber))
} else if (operation == "-") {
    parseFloat(alert(firstNumber - secondNumber));
} else if (operation == "/") {
    parseFloat(alert (firstNumber / secondNumber));
} else if (operation == "*") {
    parseFloat(alert(firstNumber * secondNumber));
} 
}
