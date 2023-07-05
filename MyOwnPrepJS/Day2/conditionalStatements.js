// The conditional statements in javascript are:
/**
 * if()
 * else if()
 * else
 */

// Print if number is even or odd


var num1 = 19;
if(num1 % 2 == 0){
    console.log(`The number ${num1} is even`);
}
else{
    console.log(`The number ${num1} is odd`);
}

// App to provide access for manager,teamlead,developer,tester,user

let person ='tester';

if(person =='Manager'){
    let login;
    console.log('You have access for all project');
    if(login == true){
        console.log('You have successfullu loged in');
    }else{
        console.log('Create an account');
    }
}else if(person == 'teamlead'){
    console.log('You have access for development and testing')
}else if(person == 'developer'){
    console.log('You ahave acces for development');
}else if(person == 'tester'){
    console.log('you have acces for testing');
}else if(person == 'user'){
    console.log('You are readonly mode as you are a user');
}else{
    console.log('You are not an employee');
}
