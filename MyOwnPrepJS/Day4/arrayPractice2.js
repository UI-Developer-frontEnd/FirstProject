let arr =[12,22,34,41,11,19,1,3];
// console.log(arr.min());
let min = arr[0];
let max = arr[0];

for(let i=0;i<arr.length;i++){
    if(arr[i]>max)
        max = arr[i];
    if(arr[i]< min)
        min = arr[i];

}
console.log(`maximum value is: ${max}`);
console.log(`minimum value is: ${min}`);

// let brr = [12,22,35,24,64,76,14]
// let mini = Math.min.apply(null,brr);
// let maxi = Math.max.apply(null,brr)
// console.log(mini);
// console.log(maxi);