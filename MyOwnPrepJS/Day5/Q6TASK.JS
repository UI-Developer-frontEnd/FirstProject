// Write a program that takes an array of objects containing name, age, and occupation properties and reduces the array to a single object containing the total count of people in each occupation.

let occupation = [
    {
        name:'Hemanth',
        age:25,
        Des:'Software Engineer'
    },
    {
        name:'Kumar',
        age:35,
        Des:'Web Engineer'
    },
    {
        name:'Bobby',
        age:32,
        Des:'Designer'
    },
    {
        name:'Nius',
        age:45,
        Des:'Data Engineer'
    },
    {
        name:'Bharath',
        age:26,
        Des:'Designer'
    }
]
let empOccup =[];
    for(let i =0;i<occupation.length;i++){
        let sameDes = occupation[i].Des
        if(occupation[i].Des == sameDes){
            empOccup.push(occupation[i].Des)
            console.log(empOccup.length);
        }
    }
