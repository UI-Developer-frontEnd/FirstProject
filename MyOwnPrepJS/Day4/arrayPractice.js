let newArray = ['ReactJs','AngularJs','MangoDB','ExpressJs']
// console.log(newArray);
let oldArray = []
let arrFlag = false;
for(let i=0;i<newArray.length;i++){
    if(newArray[i] == 'AngularJss'){
        arrFlag = true;
        oldArray.push(newArray[i].replace('Angular','Python'))
        console.log(oldArray);
    }
}
if(arrFlag != true){
    console.log('Record not found in the DataBase');
}