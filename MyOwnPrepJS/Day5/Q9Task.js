// Write a program that takes an array of objects containing name and age properties and finds the oldest person in the array.

let arrOld =[
    {
        name:'Hemanth',
        birth:1990,
        death:2023
    },
    {
        name:'Bobby',
        birth:1980,
        death:2023
    },
    {
        name:'Nius',
        birth:1999,
        death:2023
    },
    {
        name:'Sony',
        birth:2000,
        death:2023
    },

]
let oldest =0
for(let i=0;i<arrOld.length;i++){
    if((arrOld[i].death - arrOld[i].birth) > oldest){
    oldest = (arrOld[i].death - arrOld[i].birth);
        }
    }
    console.log(`The age of person  is ${oldest}`);
