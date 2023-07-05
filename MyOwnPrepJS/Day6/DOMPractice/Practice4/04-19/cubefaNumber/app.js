function cubeOf(){
var userInput =document.getElementById("amount").value;
var cubeValue = userInput*userInput*userInput;
var res = document.getElementById("result");
res.value = cubeValue
console.log(res);
// document.getElementById("result").value =cubeValue;
}