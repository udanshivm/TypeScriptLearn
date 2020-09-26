console.log("Learning Genrics");
const arr:Array<boolean>=[];
console.log(arr[0]);

function merge<T,U>(objeA:T,obbjB:U){
    return Object.assign(objeA,obbjB);
}

// const mergeObj=merge({name:"mazx",hobbies:['max','te']},{age:"30"});
// console.log(mergeObj);

interface lenthy
{
    length:number;
}

function countandDescribe<T extends lenthy>(elem:T):[T,string]
{
    let descriptiom="Got no val";
    if(elem.length==1)
    {
        descriptiom="Got 1 elemetn"
    }
    else if(elem.length>1)
    {
        descriptiom=`Got`+elem.length+`Elements`;
    }
    return [elem,descriptiom]
}

console.log(countandDescribe("fsdf"));

// function countandPrint<T>(element:T):T
// {
//     console.log(element);
//     return element;
// }

// countandPrint("test");
// countandPrint(['re','redd']);


function Extractandconvert<T extends object,U extends keyof T>(obj:T,key:U)
{
    return 'value'+obj[key];
}

Extractandconvert({name:'sdf'},'name');

// Generic classed

class DataStorage<T>
{
    private data:T[]=[];
    addItem(item:T)
    {
        this.data.push(item);
    }

    removeItem(item:T)
    {
        this.data.splice(this.data.indexOf(item),1);
    }

    getItem()
    {
        return [...this.data];
    }

}

///For the text data storage
const textstroage=new DataStorage<string>();
textstroage.addItem("Max");
textstroage.addItem("Mannu");
console.log(textstroage.getItem());
console.log(textstroage);

textstroage.removeItem("Max");
console.log(textstroage.getItem());

///For the number data storage
const nostroage=new DataStorage<number>();
nostroage.addItem(3);
nostroage.addItem(4);
console.log(nostroage.getItem());
console.log(nostroage);

nostroage.removeItem(4);
console.log(nostroage.getItem());
