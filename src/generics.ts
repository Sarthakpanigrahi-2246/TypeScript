////normal FUNCTION
// function getArray(arr:any){
//   return arr[0]
// }

// const res = getArray([2,4,6,8,10]);
// const res2 = getArray(['a','b','c','d','eeewkfoe'])
// console.log(res,res2);

//Generics
//****** */ Generics allow you to write reusable code that works with different data types while maintaining type safety.
// ****** T automatically becomes string, number, or boolean.

////function getArray(arr:number[]|string[]| boolean[]){

////GENERICS IN function
// function getArray<T>(arr:T[]){
//   return arr[1]
// }

// const res = typeof getArray<number>([2,4,6,8,10]);
// const res2 = getArray(['a','b','c','d','eeewkfoe'])
// const res3 = getArray([true, false])
// console.log(res,res2,res3);




//2 example 
// function getlength<T extends {length :number}>(item:T){
//   console.log(item.length)
//   return item.length;
// }


// getlength("hellw")
// getlength([2,3,4,5,6,7,8,6]);

//3 example
// function getproperty <T extends object  , U extends keyof T >(obj:T ,key:U){

//    console.log(obj[key])
// }
// getproperty({name:"sarthak", age:20,address :"pernepahata dooms"},"age")


//*****      ADVANCE GENERICS          *****/

class ItemStorage{
  private items: string[] = [];

  additem(item:string) {
    this.items.push(item)
  }

  removeitem(item : string){
    this.items = this.items.filter((i)=>{i !== item})
  }

  getAllitem(){
    console.log(this.items)
  }
}

const storage = new ItemStorage();

storage.additem("gandu");
storage.additem("pandu");
storage.additem("gandu");
// storage.removeitem("gandu")
storage.getAllitem()


const numberstore = new ItemStorage();
numberstore.additem(33);
