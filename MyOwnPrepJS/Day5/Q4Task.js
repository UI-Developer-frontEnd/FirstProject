// Write a program that takes an array of objects containing name and salary properties and calculates the total salary across all objects.

let employeeSal = [
    {
        name:'Hemanth',
        salary:25000
    },

    {
        name:'Kumar',
        salary:29000
    },

    {
        name:'Bobby',
        salary:30000
    },
    {
        name:'Nius',
        salary:28000
    }
]
let empSal =0;
for(let i = 0;i<employeeSal.length;i++){
    empSal += (employeeSal[i].salary);
    console.log(Math.round(empSal));
}