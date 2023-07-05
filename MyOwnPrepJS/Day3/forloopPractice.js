// let fruites =['Apple','Mango','Pine-Apple','sapota'];
// for(let i = 0;i<fruites.length;i++){
//     // console.log(fruites[i]);
// }

let vegies = ['Potato','brinjal','ladies-finger',
    {
        suger:'Asirwad',
        turmaric:'Aachi',
        refinedOil:'Sunflower'
    }
];
let flag = false;
// let dupVegies=[];
for(let i =0;i<vegies.length;i++){
    if(vegies[i].suger == 'Asirwad'){
        flag =true;
        console.log(`The data ${vegies[i].suger} exist in the array`);
    }
}
if(flag!=true){
    console.log(`The data doesn't exist in the array`);
}

const arrObj = ['Cloths','Accessories','Shoes','Fragnance',
{
    shoeBrand:'Adidas',
    price:20000,
    year:'2022',
    waranty:'12 months'
}];
let objFlag = false;
// console.log(arrObj[4].shoeBrand);
for(let i = 0;i<arrObj.length;i++){
    // console.log(arrObj[i].price);
    if(arrObj[i].year == '2023'){
        objFlag= true;
        console.log(arrObj[i].year);
    }
}
if(objFlag!=true){
    console.log("The data doesn't exist");
}




let user = ['Hemanth',22,'Banglore',
{
    name:'Bobby',
    age:26,
    location:'Madanapalle'
}];
for(let i = 0;i<user.length;i++){
    if(user[i].name == 'Bobby'){
        console.log(user[i].location);
    }
}