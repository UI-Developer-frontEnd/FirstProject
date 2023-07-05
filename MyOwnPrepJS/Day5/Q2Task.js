// write a program that takes an array of objects containing name, age, and city properties and filters the array to only include objects where the city is "New York".

let userDetails = [
    {
        name:'Hemanth',
        age: 26,
        city: 'California'
    },
    {
        name:'Kumar',
        age: 23,
        city: 'New York'
    },
    {
        name:'Bobby',
        age: 24,
        city: 'Sydny'
    },
    {
        name:'Sony',
        age: 24,
        city: 'New York'
    },
    {
        name:'Bhagya',
        age: 29,
        city: 'New York'
    }
]
// let city =[]
 for(let i=0;i<userDetails.length;i++){
     if(userDetails[i].city == 'New York'){
        console.log(userDetails[i]);
     }
 }

 