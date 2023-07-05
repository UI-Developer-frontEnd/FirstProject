// Write a program that takes an array of objects containing name, age, and salary properties and finds the person with the highest salary in the array.

let highestSal = [
    {
        name:'Hemanth',
        grade: 89
    },
    {
        name:'Bobby',
        grade: 56
    },
    {
        name:'Kumar',
        grade: 34
    },
    {
        name:'Nius',
        grade: 2000
    },

]
let highest = 0;

for(var i = 0;i<highestSal.length;i++){
    if(highestSal[i].grade > highest){
        highest = highestSal[i].grade
// console.log(highestSal[i].name);
    }
}
console.log(`The highest salary is : ${highest}`);