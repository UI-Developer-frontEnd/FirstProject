// Write a program that takes an array of objects containing name, age, and occupation properties and maps the array to a new array containing only the names of people over the age of 30.

let occupation = [
    {
        name:'Hemanth',
        age:25,
        occup:'Software Engineer'
    },
    {
        name:'Kumar',
        age:35,
        occup:'Web Engineer'
    },
    {
        name:'Bobby',
        age:32,
        occup:'Devops Engineer'
    },
    {
        name:'Nius',
        age:45,
        occup:'Data Engineer'
    },
    {
        name:'Bharath',
        age:26,
        occup:'Designer'
    }
]
let empOccup =[];
let empFlag =false;
for(let i in occupation){
    if(occupation[i].age > 30){
        empFlag =true;
        empOccup.push(occupation[i].name)
    }
}
console.log(empOccup);
if(empFlag == false){
    let empl = occupation;
    console.log(`There is no Employee found with this name`);
}

