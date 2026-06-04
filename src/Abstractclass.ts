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
        public brand: string) {
    }
    abstract getDiscount(discount: number): number;

    printDetails() {
        console.log(`${this.brand} ${this.names} cost is high`)
    }
}
class Mobile extends Product{

    constructor(
        names : string,
        brand : string,
        price : number,
        public os: string,
    ){
            super(names, price, brand);
    }


    getDiscount(discount :number):number {
        const discountprice =this.price * this.price *(discount/10);
          return discountprice;
    }

}


const iphone = new Mobile("iphone 17", "apple", 8000, "ios");
iphone.printDetails()
console.log(iphone.getDiscount(100))

