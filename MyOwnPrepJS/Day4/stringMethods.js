let arr  = '   I am a webDeveloper';
let arr1  = '   I am a webDeveloper';
let arr2 = 'also reactJS Developer'


console.log(arr.length);
console.log(arr.includes('am'));
console.log(arr.indexOf('web'));
console.log(arr.slice(2,10));
// console.log(arr.pop())
console.log(arr.startsWith('I'));
console.log(arr1)
console.log(arr1.trim());
console.log(arr.replace(/webdeveloper/i,'ReactJs Developer'));// here we are making case insensetive of the match case
console.log(arr.concat(arr1+' '+arr2));