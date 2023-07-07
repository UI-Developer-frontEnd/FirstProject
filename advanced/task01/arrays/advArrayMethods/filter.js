// The filter() method creates a new array filled with elements that pass a test provided by a function.

const arr=[20,30,50,60];
var arr1 = arr.filter((num)=>{
    return num >30;
})
console.log(arr1);