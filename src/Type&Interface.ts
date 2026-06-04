// type hello = {
//     name :string; 
//     email:string;
//     password : number | string;
// }

// type StringOrNumber =number | string;


// let id : StringOrNumber = 2323;
// id = "hellow id";

// // TYPEALLIAS
// type sarthak = number;
// let val : sarthak = 2235;



// type StringOrNumber =number |string; //primtive

// type StringOrBoolean = string |boolean;

// type Newtype = StringOrNumber & StringOrBoolean;//intersetion

// type Newtype1= StringOrNumber | StringOrBoolean;//union

// const val: Newtype ="true";
// const val1: Newtype1 =true 




// //Object
// type User= {
//     name :string;
//     age:number;
//     readonly email:string;
//     phone? :number; //optional question mark.
// }

// type Student = User & {
//     enrolledCoursed :string[]
// } ;


// const User : User ={
//     name : "sarthak",
//     age : 20,
//     email: "sp@gmail.com"
// }

// let User2 :User={
//     name :"Pradeep",
//     age :30,
//     email :"pradeep@gmail.com",
//     phone :233433432
// }


// //ALL need in Object
// const student : Student={
//    age :33, 
//    name:"sarthak",
//    email:"hellow@gmaik.com",
//    phone:33333333333333,
//    enrolledCoursed: ["math","physics", "chemistry"]
// }
// console.log(student)




// type Sum = (num1:number, num2 :number) =>
//     number;

// const sum :Sum = (num1:number, num2 :number) => num1 +num2;

// let res = sum(13,222)
// console.log(res)


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//****************************************************************************************************** */


//merge both product
interface Product {
    name : string;
    brand: string;
    readonly price : number;
    rating? : number;
}
interface Product {
    name : string;
    brand: string;
    readonly price : number;
    rating? : number;
    discount :string;
    desc:string;
}



class Mobile implements Product{
 name = "iPhone";
    brand = "Apple";
    readonly price = 100000;
    discount = "10%";
    desc = "Latest iPhone";
    
}






////if we not add in student object then in=ts give error
/*** name:"sarthak",
   email:"hellow@gmaik.com",
   phone:33333333333333,
   enrolledCoursed: ["math","physics", "chemistry"] 
   **/

/***
 Student ko User ki saari properties + enrolledCoursed property rakhni hogi.

Matlab TypeScript internally isko aise samajhta hai:

type Student = {
    name: string;
    age: number;
    readonly email: string;
    phone?: number;
    enrolledCoursed: string[];
}
Aapne kya diya hai
const student: Student = {
   age: 33,
}

Yahan sirf age hai.

Lekin Student ko chahiye:

✅ age
❌ name
❌ email
❌ enrolledCoursed

Isliye TypeScript error deta hai:
 */





















//type primitives, union types, intersection types, tuples, and more. They are a powerful way to create new types based on existing ones, and they can be used to improve code readability and maintainability.
//why use type alias instead of interface?
//1. Type aliases can represent more complex types, such as union types, intersection types, and tuples, which interfaces cannot.
//2. Type aliases can be used to create a new name for any type, including primitive types, whereas interfaces are primarily used to define the shape of objects.
//3. Type aliases can be used to create recursive types, while interfaces cannot directly reference themselves.
//4. Type aliases can be used with mapped types and conditional types, providing more flexibility in type manipulation compared to interfaces.//

