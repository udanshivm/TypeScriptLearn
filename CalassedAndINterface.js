//Learn about classes, inheritance, abstaract class, getter and setter proprties and methods, Abstract constructor singletone method etc.


 abstract class Department{

    static fiscalyear=2020;
    //  name:string;
    // age:number;
   protected employees:string[]=[];

    constructor(protected Id:string,public name:string){
        // this.name=n;
        // this.age=a;
    }

    static createEmployee(name:string)
    {
        return {name:name};
    }

 getDepartmentName()
 {
     return this.name;
 }

 abstract describe(this:Department):void;

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

    describe()
    {

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
    private lastrport:string;
    private static instance:AccountingDepartment;

    reports:string[];
    private constructor(id:string,reports:string[])
    {
        super(id,"Accounting");
        this.reports=reports;
        this.lastrport=reports[0];
    }
    get mostRecentReport()
    {
        if(this.lastrport)
        {
            return this.lastrport;
        }
         throw new Error("No report Found");    
    }

    set mostRecentReport(value:string)
    {
        if(!value)
        {
            throw new Error(" Please pass in the valid value");
            
        }
        this.addReports(value);
    }



    static getInstance()
    {
        if(AccountingDepartment.instance)
        {
            return this.instance
        }
        this.instance=new AccountingDepartment('d2',[]);

    }

    describe()
    {
        console.log(`Accounting Department : ${this.Id}`)
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
        this.lastrport=repo;
    }

    getReport()
    {
        console.log(this.reports);
    }
}

console.log(Department.createEmployee("newemp"));
console.log(Department.fiscalyear);

var it=new ITDepartment("IT",["max"]);
it.describe();
it.getItDepart();
it.addEmployee("mallikarjun");
it.addEmployee("Preeti");
it.addAdmin("keadr");
it.printEmpInformation();       
console.log(it);

// var acc=new AccountingDepartment("accDept",["test"]);
const acc=AccountingDepartment.getInstance();
const acc1=AccountingDepartment.getInstance();
console.log(acc,acc1);

// console.log(acc.mostRecentReport);
// acc.mostRecentReport='Year end report';
// var emplist=["devraj","sumit","Max","max"];
// emplist.forEach(element => {
//     acc.addEmployee(element);
// });

// console.log(acc); 






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



