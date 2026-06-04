// let num = 5;
// let num2 =50 ;
// let sum =num+num2;

// console.log(sum);


 
// let isvalid = true;

// function hello(name : string){
//     console.log("hiii",name)
// }
// hello("sarthak")
// // hello(324)

function combine(val1: number | string , val2: number){
    if(typeof val1 === "number" || typeof val2 === "number"){
        return val1.toString() + val2.toString()
    }
    return val1 + val2;
}

let result = combine(2, 5);
console.log(typeof result);