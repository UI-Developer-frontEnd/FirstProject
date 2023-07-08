
// classes are used to create a blue print of an object
// "class" key word shall be used to create blue print of an object followed by constructor function

var name;
function carDetails(){
document.getElementById("res").innerHTML =``
}

class vehicle{
    constructor(name,brand,price,colour,milage,year){
        // document.getElementById("carName") = name,
        // document.querySelector("#brand").value = brand,
        // document.querySelector("#price").value = price,
        // document.querySelector("#colour").value= colour,
        // document.querySelector("#milage").value = milage,
        // document.querySelector("#year").value = year
        this.name = name,
        this.brand = brand,
        this.price = price,
        this.colour = colour,
        this.milage = milage,
        this.year=year
    }
}
let hyundai = new vehicle("creta","hyundai",200000,"white","20km/l",2018);
document.querySelector("#res").innerHTML=`this is ${hyundai.name}`