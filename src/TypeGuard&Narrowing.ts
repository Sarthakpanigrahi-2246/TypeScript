// let num: number = 4;

// let var1: any;
// var1 = 3;
// var1 ="jeej";
// var1 =["hllow",883];
// // console.log(var1.toUpperCase())



// //TYPEGUARD
// let var2 :unknown ;
// var2  =55;
// var2 = "e";

//  if(typeof var2 === 'string'){
//     var2.toUpperCase();
    
//    var2.length;
//    console.log(var2.length);

//  }

//  var2= 55;
//   if(typeof var2 === 'number'){
//     var2.toString()
//     console.log("this is number to string :",var2.toString() )
//   }


 //never
function sum(num1 :number , num2: number):never{
  console.log("h")
  throw new Error;
}

function sum2 (num1 :number, num2 : number ){
  console.log(sum(5,2))
  return sum2;
}

console.log("calling Sum2 Funn", sum2(33,44))
console.log(sum2)
