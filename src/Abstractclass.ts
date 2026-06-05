//ABSTRACT CLASS
//abstarct vs interface
//ABStract ==>abstract class ek blueprint hoti hai. Iska object directly create nahi kar sakte.


// class Product {
//     constructor (public Name:string){

//     }
// }
// new Product("iphone");

abstract class Product {
    constructor(
        public names: string,
        public price: number,
        public brand: string
    ) {
    }

    abstract getDiscount(discount: number): number;

    printDetails() {
        console.log(`${this.brand} ${this.names} cost is high`)
    }
}

class Mobile extends Product {

    constructor(
        names: string,
        brand: string,
        price: number,
        public os: string,
    ) {
        super(names, price, brand);
    }

    getDiscount(discount: number): number {
        const discountprice = this.price * this.price * (discount / 10);
        return discountprice;
    }

}


const iphone = new Mobile("iphone 17", "apple", 8000, "ios");
iphone.printDetails()
console.log(iphone.getDiscount(100))




//**************      Exmaple 2             ******************** */

// interface User1 {
//     name: string;
//     age: number;
//      //getDiscount() : void ////no initialized alllowed
// }

// class User implements User1 {
//     constructor(public name: string, public age: number)
//      {

//      }

//     //  getDiscount(){
//     //     console.log(this.name)
//     //  }
// }

// abstract class User2{
//     constructor(public name: string, public age: number){

//     }
// }

// class User3 extends User2 {
//     constructor(public name: string, public age: number)
//      {
//         super(name,age)
//      }
// }



/// ****************/EXAMPLE 3

// //static ka matlab:
//// Property ya method class se belong karta hai, object (instance) se nahi.

// interface User1 {
//     name: string;
//     age: number;
// }

// class User implements User1{
//     static count :number = 0;

//     constructor (public name:string , public age : number){
//             User.count++;
//     }
// }

// console.log(User.count)

// new User("sarthak", 22)
// new User("sarthak", Math.floor(Math.random()*99));
// new User("sarthak", Math.floor(Math.random()*99));
// new User("sarthak", Math.floor(Math.random()*99));



// Interface → Sirf rules/contract define karta hai, implementation nahi deta.
// Abstract Class → Rules + common implementation (code) dono de sakti hai.

// Interface defines "what a class must have", while an Abstract Class defines "what a class is" and can also provide shared implementation.


// Class extends Class → Jab ek class dusri class ka code (methods/properties) inherit karti hai.
// Class extends Abstract Class → Jab ek class abstract class ka common code inherit karti hai aur abstract methods implement karti hai.
// Class implements Interface → Jab ek class interface ke rules/contract ko follow karti hai.
// Interface extends Interface → Jab ek interface dusre interface ke properties aur method signatures inherit karta hai.

// Memory Trick
// extends = "Code inherit karna hai"
// implements = "Rules follow karne hain"