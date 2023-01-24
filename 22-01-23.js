//for object--

let object = { 
    name: "john";
    age:24,
    address: {
        city:"new york",
        state:"NY",
        country:"USA",
    }
};
let object2 ={...object};
object2.address.city="Network";
console.log(object2)
