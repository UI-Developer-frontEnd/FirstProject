
function clickMe(){
var inputfil1 = document.getElementById("inputField1").value;
var inputfil2 = document.getElementById("inputField2").value;
var result = (parseInt(inputfil1) + parseInt(inputfil2))
var arrange = document.getElementById('para');
arrange.innerHTML = `The resule is: ${result}`;
}
