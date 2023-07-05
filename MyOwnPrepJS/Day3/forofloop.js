// The for of statement creates a loop iterating over iterable objects
// including: built-in string,array,array-like objects like node listand also map and se
// the variable in for loop statement will refer to the values of the array in for loop statement

// SYNTAX:for(let variable of Array)

let arr = ['bag','cloths','accesories','shoes']

for(var items of arr){ // here items will have access to arr 
    console.log(items);
}

// for of loop for string variables

let a = 'Hemanth';
for(var c of a){ // here c will have acces to a 
    console.log(c);
}