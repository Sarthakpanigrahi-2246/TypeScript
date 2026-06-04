//Inference in TS

// let arr : number[] = [2,5,6,8,9,3];
// let arr1: any = [2,5,6,8,9,3,"djhdks",{},undefined, null];
let str2: string[] = ["bcbc", "cdcd"]
let str: Array<string> = ["adad", "dsada"]
// // arr.push("adsdsd") //not allowed to push string

// arr.push(2.4)
// console.log



//TUPPLE ==> tupple is also a array but is have fixed length
// let coordinate : readonly [number,number] = [1234,22454];

// coordinate.push(3);
// console.log(coordinate)


//OBJECT


////object ===> {}
// let user:object ={
//     name:"sarthak",
//     email :"sp@gmail.com"
// }

let user: {
    name: string;
    email: string;
    age?: number; //question ? means its is a optional
} = {
    name: "sarthak",
    email: "sp@gmail.com",
    age :23
};



let users:{
    name: string;
    email: string;
    age?: number; //question ? means its is a optional
}[]= [user,user]


console.log(typeof users);
console.log("user are",users);