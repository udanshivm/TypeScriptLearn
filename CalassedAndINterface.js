
class Department{
    //  name:string;
    // age:number;
   protected employees:string[]=[];

    constructor(private Id:string,public name:string){
        // this.name=n;
        // this.age=a;
    }

 getDepartmentName()
 {
     return this.name;
 }

 addEmployee(empname:string)
 {
     this.employees.push(empname);
 }

 printEmpInformation()
 {
     console.log(this.employees.length);
     console.log(this.Id);
     console.log(`Department : ${this.name}`);
 }

}

class ITDepartment extends Department
{
    admins:string[];
    constructor(id:string, admins:string[])
    {
        super(id,"IT");
        this.admins=admins;
    }

    addAdmin(text:string)
    {
        this.admins.push(text);
    }

    getAdmin()
    {
        console.log(this.admins);
    }

    getItDepart()
    {
        console.log("this is an IT department");
    }

}


class AccountingDepartment extends Department
{
    reports:string[];
    constructor(id:string,report:string[])
    {
        super(id,"Accounting");
        this.reports=report;
    }

    addEmployee(name:string)
    {
        if(name==="Max")
        {
            return;
        }
        this.employees.push(name);
    }

    addReports(repo:string)
    {
        this.reports.push(repo);
    }

    getReport()
    {
        console.log(this.reports);
    }
}


var it=new ITDepartment("IT",["max"]);
it.getItDepart();
it.addEmployee("mallikarjun");
it.addEmployee("Preeti");
it.addAdmin("keadr");
it.printEmpInformation();       
console.log(it);

var acc=new AccountingDepartment("accDept",["Sharereport","newerpor"]);
var emplist=["devraj","sumit","Max","max"];
emplist.forEach(element => {
    acc.addEmployee(element);
});

console.log(acc); 





























// class Product
// {
//     // title:string;
//     // price:number;
//     // private isListed:boolean;
    
//     constructor(public title:string,public price:number,private isListed:boolean)
//     {

//     }

//     printProduct()
//     {
//         console.log("Bike Detils ");
//         console.log(`Bike Name :${this.title} \n Bike Price :${this.price} \n Isliste: ${this.isListed} `);
//     }
// }

// const bike=new Product("honda",40000,false);
// bike.printProduct();
// bike.title="New Honda version";
// bike.price=50000;
// bike.printProduct();



