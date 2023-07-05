// Objects are unordered collection of data

// we can declare a object using obhect literal method ObjectName{}

var cars = {
    brand : 'Audi',
    price : '200k',
    colour : 'red',
    year : 2023,

    specifications:{
        speed: '200km/h',
        tarq: '2500BHP',
        horsePower: '200vhk'
    },
    similarcars:['Mercides','bentley','Polories','Amaze']
}
// console.log(cars);
console.log(cars.specifications.speed);