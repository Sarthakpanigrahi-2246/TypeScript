
// // //class  is a blueprint of object
// // class Product {
// //  //   // name : string ="sarthak";
// //    // // price : number =40000 ;
// //     //// brand: string = "brahman"; 
// //     name: string;
// //     price: number;
// //     brand: string;

// //     constructor(name: string, price: number, brand: string) {
// //         this.name = name;
// //         this.price = price;
// //         this.brand = brand;
// //     }
// //     getPrice() {
// //         console.log("price is :", this.price)
// //         return this.price;
// //     }
// // }
// // const P1 = new Product("samsund",30000,"SAMSUNG");
// // const P2 = new Product("iphone 17",80000,"APPLE");
// // console.log(P1)
// // console.log(P2.getPrice());

// //ACCESS MODIFIER;
// //FAther
// // class books {
// //     public name: string;
// //     private author: string;
// //     protected price: number;
// //     readonly id: number;

// //     constructor(n: string, a: string, p: number) {
// //         this.name = n;
// //         this.author = a;
// //         this.price = p;
       
// //         this.id = Math.floor(Math.random() * 999)
// //     }
// //     updateprice(price :number =200) {
// //         this.price = price;
   
// //     }
    
// // }
// // ////Ebooks ko books ki saari public aur protected properties mil jayengi.
// // //SON
// // class Ebooks extends books {
// //     discounts: string;
// //     pages: string;
// //     constructor(n: string, a: string, p: number, d: string, pa: string) {
// //         super(n, a, p); // Parent ke constructor ke parameters
// //         this.discounts = d;
// //         this.pages = pa;
// //         console.log("this is price ", this.price);
// //         // console.log("this is author", this.author);
// //     }
// //       updateprice(price: number=400) {
// //         this.price = price;
// //         console.log("price is :",price)
// //         return price;
    
// //     }
// // }

// // const book = new books("ssps", "sartfffffffffffffffhak", 2000);

// // const Ebook = new Ebooks("Sarthak", "Sarthak SP", 50000, "25%", "200pages")
// // let l =Ebook.updateprice();
// // console.log(l)




// // *******        GETTER AND SETTER
// class Books {
//     private _author: string;

//     constructor(author: string) {
//         this._author = author;
//     }

//     get author(): string {
//         return this._author;
//     }

//     set author(value: string) {
//         if (value.length >= 5) {
//             this._author = value;
//             console.log("this is sarthak",value)
//         } else {
//             console.log("Author name too short");
//         }
//     }
// }

// const book = new Books("Sarthak");
// console.log(book.author); // Getter

// book.author = "SP";       // Setter
// // book.author = "Sarthak SP";



// //MEthod OVERIDING
// //GETTER SETTER







// //INHERITANCE
// // Inheritance TypeScript me ek aisa concept hai jisme ek class (child class) doosri class (parent class) ke properties aur methods ko inherit kar sakti hai. Isse code reusability badh jati hai aur hum existing code ko modify kiye bina naye features add kar sakte hain.





























// // TypeScript me error aata hai (especially strictPropertyInitialization enabled ho to) because TypeScript expect karta hai ki class ke properties initialize hon.

// // Error kuch aisa hoga:

// // Property 'name' has no initializer and is not definitely assigned in the constructor.
// // Property 'price' has no initializer and is not definitely assigned in the constructor



// ////ACCESSS Modified

// // Access Modifiers TypeScript me aise keywords hote hain jo decide karte hain ki class ki properties aur methods ko kahan se access kiya ja sakta hai aur kahan se nahi.

// // private
// // Member ko sirf usi class ke andar access kiya ja sakta hai.

// // **protected
// //   Member ko class aur uski child (derived) classes access kar sakti hain.*//