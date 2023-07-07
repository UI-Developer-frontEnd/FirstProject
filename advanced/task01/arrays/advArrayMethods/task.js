const emp =[
    {
        fname:"Hemanth",
        lname:"kumar",
        age:26,
        des:"Associate Solution Engineer",
        salary:1000000
    },
    {
        fname:"Ram",
        lname:"kumar",
        age:27,
        des:"Syatem Enginner",
        salary:800000
    },
    {
        fname:"Daniel",
        lname:"Anish",
        age:24,
        des:"Software Engineer",
        salary:600000
    }
]
let arr = emp.filter((employee)=>{
    if(employee.salary > 600000){
        // let empname= employee.fname + " " + employee.lname
        console.table(employee.fname+" "+employee.lname);
    }
})
