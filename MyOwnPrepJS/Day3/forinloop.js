// In javascript, the for-in loops allows you to loop through the properties of an object
// The statements of code found within the loop will be executed once for each property of objects
// the variable in for loop statement will refer to the keys of the object in for loop statement

// SYNTAX:for(let variable in Array)

let colors = {
    primary:'blue',
    secondary:'orange',
    default:'Black'
}
for(var color in colors){
    console.log(color +' ->'+colors[color]);
}

// for-in loops can also be used to loop through arrays
// As we know arrays in javascript are also objects

let arr =['Green','Purple','Vilot','Red'];
for(var color in arr){
    console.log(color + ' ->'+ arr[color]);
}