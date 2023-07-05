// Javascript Selectors in DOM
// getElementsByClassName - This returns array of elements [0:h1;1:ul] format
// getElementsByTagName - This also returns array of elements [0:h1;1:ul] format
// getElementById - This returns only single element and ID selector is unique


let para = document.getElementsByClassName("lists");
console.log(para);
let heading = document.getElementsByTagName("h1");
console.log(heading);
let listItems = document.getElementById('listItem1');
// console.log(listItems);
let listItems2 = document.getElementById('listItem2');
console.log(listItems2);

// querySelector - This is similar to getElementById- it returns only unique element

let quer = document.querySelector('#listItem1')
console.log(quer);

// querySelectorAll - This similart to getElementsByClassName and getElementsByTagName -It returns the elements in array format

let querAll = document.querySelectorAll("h1")
console.log(querAll);