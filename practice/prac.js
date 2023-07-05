var userDetails =[
    {
        name:"Hemanth",
        age:30
    },
    {
        name:"Tripti",
        age:26
    },
    {
        name:"Jyothi",
        age:32
    }
]

for(var i=0;i<userDetails.length;i++){
    if(userDetails[i].age >= 30){
        console.log(userDetails[i].name);
    }
}