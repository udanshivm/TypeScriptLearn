# What is an interface -> Describe the strucutre of the object -> We can descripe how the object should look like
Interface can't have a initalizer

interface Person
{
    name:string;
    age:number;

    greet(phrase:string):void;
}

let user1:Person;
user1={
    name:'max',
    age:30,
    greet(phrase:string)
    {
        console.log(phrase + ' '+this.name);
    }
};

user1.greet("hi htere");


# Class can implement as many interface 

interface Greetable
{
    name:string

    greet(phrase:string):void;
}

class Person implements Greetable
{
    name:string;
    constructor(name:string)
    {
        this.name=name;
    }
    greet(phrase:string)
    {
        console.log(phrase+" this is the greet mehid from the Person "+this.name);
    }
}

let user1:Greetable;

user1=new Person("mallikarjun");
user1.greet("welcome");

# Why interface -> We can enforce some kind of the strucutre 


# Readonly interface properties
public private properties not possible but we can add readonly properties

# Extending interfaces

interface Named
{
    readonly name:string;
}

interface Greetable extends Named
{
    greet(phrase:string):void;
}

class Person implements Greetable
{
    name:string;
    age:number=30;
    constructor(name:string)
    {
        this.name=name;
    }
    greet(phrase:string)
    {
        console.log(phrase+" this is the greet mehid from the Person "+this.name);
    }
}

let user1:Greetable;

user1=new Person("mallikarjun");
user1.greet("welcome");
console.log(user1);


# Interface as function type

interface Addfn
{
    (a:number,b:number):number;
}

let add:Addfn;

add=(n1:number,n2:number)=>{
    return n1+n2;
};

# Interfaces for object optiona parameter in interface
interface Named
{
    readonly name?:string;
    outputNmae?:string;
}

class Person implements Greetable
{
    name?:string;


