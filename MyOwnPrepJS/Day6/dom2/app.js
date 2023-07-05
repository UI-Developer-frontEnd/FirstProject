// Creating an element in Js - document.createElement("tag Name")


var motoHead = document.createElement("li");
motoHead.innerHTML = "Royal Enfield";

var parentEle = document.getElementById("motorbikes");
// console.log(parentEle);
var childEle = document.getElementById("Tvs");
// childEle.remove()

parentEle.appendChild(motoHead) // append will add the element at the end
parentEle.prepend(motoHead) // prepend will add the element at the beginning
parentEle.insertBefore(motoHead,childEle) // insertBefore will insert the element in between two elements in the document
