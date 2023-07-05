// Write a program that takes an array of objects containing name and score properties and calculates the average score across all objects.
let stud =[
    {
        name:'hemath',
        score:40
    },
    {
        name:'bobby',
        score:75
    },
    {
        name:'kumar',
        score:89
    },
    {
        name:'nius',
        score:58
    },
]
let sumAvg = 0;
for(var i = 0;i<stud.length;i++){
    sumAvg += stud[i].score/stud.length;
console.log(sumAvg);
}
