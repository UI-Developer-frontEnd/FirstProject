// Write a program that takes an array of objects containing name and grade properties and filters the array to only include objects where the grade is greater than or equal to 70.


let studScores = [
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
        grade: 72
    },

]
let greatScore =[];
for(let minScore in studScores){
    if(studScores[minScore].grade >= 70){
        greatScore.push(studScores[minScore])
}
}
console.log(greatScore);
