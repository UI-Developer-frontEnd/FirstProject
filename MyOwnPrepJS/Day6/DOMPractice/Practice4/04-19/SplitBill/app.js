
function splitBill(){
    var amountField = document.getElementById("amount").value;
    var people = document.getElementById("persons").value;
    var resultSplit = amountField/people;
    var rounding = resultSplit.toFixed(2);
if(resultSplit <= 0){
    alert("Amount field should be greater than Zero")
}else if(resultSplit > 0){
    var splitedValue =document.getElementById("result");
    splitedValue.value = rounding;
    alert("The amount splited is " + rounding);
    document.getElementById("labl").innerHTML =`<h3>The amount splited between ${people} persons is: ${rounding}</h3>`;
    document.getElementById("amount").value = "";
    document.getElementById("persons").value ="";
    }
}