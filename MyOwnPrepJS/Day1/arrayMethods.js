// How to delete last element of an array
// Using pop() method we can delete the last index of an array


var values = [22,43,23,45,44,41]
console.log(values); // OUTPUT:[ 22, 43, 23, 45, 44, 41 ]
values.pop();
console.log(values); //[ 22, 43, 23, 45, 44]


// how to add element at the last position of an array
// Using push() method we can add elements at the last position of an array

var  names = ['Audi','Benz','Bentley','Hyundai'];
console.log(names);
names.push('Nexa');
console.log(names);

// How to delete the first index of an array
// Using shift() method we can delete the first index element of an array


var state = ['Andhra','Karnataka','TamilNadu','Telengana']
console.log(state);
state.shift()
console.log(state);


// How to add element in the first index of an array
// Using unshift() method we can delete the first index element of an array

var country = ['India','USA','UK','Canada'];
console.log(country);
country.unshift('UAE');
console.log(country)