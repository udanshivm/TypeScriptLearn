# Advanced Typing Concepts
### intersetion types
 ##### Intersection types allow us to combine other types

                              console.log("this is advanced tyoe of typescript");
                             type Admin={
                                 name:string;
                                 previlage:string[];
                             };

                             type GeneralEmp={
                                 name:string;
                                 startDate:Date;
                             };

                             type EleVatedEmp= Admin & GeneralEmp;

                             const e1:EleVatedEmp={
                                 name:"max",
                                 previlage:['create-server'],
                                 startDate:new Date()
                             } 

                             console.log(e1);

                             type combinavble=string | number;
                             type numric=number | boolean;
                             type Univeral= combinavble & numric;


 
  ### Type guards
  

                               type Admin={
                                   name:string;
                                   previlage:string[];
                               };

                               type GeneralEmp={
                                   name:string;
                                   startDate:Date;
                               };

                               type UnknowEmp= Admin | GeneralEmp;

                               function printEmpInfo(emp:UnknowEmp)
                               {
                                   console.log(emp.name);
                                   if("previlage" in emp)
                                   {
                                       console.log(emp.previlage);
                                   }
                                   if("startDate" in emp)
                                   {
                                       console.log(emp.startDate);
                                   }

                               }

                               type EleVatedEmp= Admin & GeneralEmp;

                               const e1:EleVatedEmp={
                                   name:"max",
                                   previlage:['create-server'],
                                   startDate:new Date()
                               } 

                               printEmpInfo(e1);
                               printEmpInfo({name:"malliakrjun",startDate:new Date()});

                               type combinavble=string | number;
                               type numric=number | boolean;
                               type Univeral= combinavble & numric;

                               function add(a:combinavble,b:combinavble)
                               {
                                   if(typeof a == "string" || typeof b =="string")
                                   {
                                       return a.toString() + b.toString();
                                   }

                                   return a+b;
                               }


                               console.log(add("3",5));

                               class Car
                               {
                                   drive()
                                   {
                                       console.log("driving car");
                                   }
                               }

                               class Truck
                               {
                                   drive()
                                   {
                                       console.log("Driving truck");
                                   }

                                   loadCardgo(amount:number)
                                   {
                                       console.log(`loading cardo amoin ${amount}`);
                                   }
                               }

                               type Vechical = Car | Truck;

                               const v1=new Car();
                               const v2=new Truck();

                               function userVehical(vehical:Vechical)
                               {
                                   vehical.drive();
                                   // if("loadCardgo" in vehical)
                                   if(vehical instanceof Truck)
                                   {
                                       vehical.loadCardgo(50);
                                   }
                               }

                               userVehical(v2);


  ### Discriminated Unions
                                 interface Bird{
                                   type:"bird";
                                   flyingSpeed:number;
                               }

                               interface Horse
                               {
                                   type:"horse";
                                   runningSpeed:number;
                               }

                               type Animal=Bird | Horse;

                               function movingAnimal(animal : Animal)
                               {
                                   let speed;
                                       switch(animal.type)
                                       {

                                           case 'bird':
                                               speed=animal.flyingSpeed;
                                               break;
                                           case 'horse':
                                               speed=animal.runningSpeed;
                                               break; 
                                       }
                                       console.log("moving at speed"+speed);
                               }

                               movingAnimal({type:'bird',flyingSpeed:40});

  ### Type casting
                              // const getUserInput=<HTMLInputElement>document.getElementById("user-input")!;
                              // const getUserInput=document.getElementById('user-input')! as HTMLInputElement;

                              const getUserInput=document.getElementById('user-input');
                              if(getUserInput)
                              {
                                  (getUserInput as HTMLInputElement).value='test';

                              }

    
  ### Function Overload
                             function add(a:number,b:number):number
                             function add(a:number,b:string):string
                             function add(a:string,b:number):string
                             function add(a:combinavble,b:combinavble)
                             {
                                 if(typeof a == "string" || typeof b =="string")
                                 {
                                     return a.toString() + b.toString();
                                 }

                                 return a+b;
                             }

                             console.log(add("3",5));
  
  
