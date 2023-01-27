//How To Use .map(), . forEach, .filter(), .find, .sort()
//--These Functions are completely based on Array.

//1.Let's learn .map()

/*let array = [1,2,3,4,5];
let newArray = [];
for(let i=0; i<array.length;i++){
    newArray[i] = array[i]*array[i];
}
console.log(newArray);*/

//for every element of an array we are doing some computation and storing it to newarray at the same index.


//.map() array gives you new array on the bases of an old array. it asks you to write some computation(Logic).
//.map() -- it takes functional parameter in javascript , a function is also js object so we can pass the function as an object.
//The argument is going to take in this function is function.
let array = [5,10,15,20];
function functionForMap(element){
    return element*element;
}
let newArray = array.map(functionForMap);
console.log(newArray);
// we are storing the entire variable in functionForMap and passing this variable into array.map();

//let array = [5,10,15,20];
//let newArray = array.map((element)=> element*element);
//console.log(newArray);

//-- we can also write in different way--
//let newarray = array.map((element,index)=>{
   // console.log(index);
    //return element*element;
//});
//console.log(newArray);


//2. .forEach()
let array1 = [1,2,3,4,5];
array1.forEach((element,index)=>{
console.log(element);
});
//it do the pre and post calculation of each element of an array.
//.forEach() does not return anything , only perform an action 
//does not retun an array.
let array2 = [1,2,3,4,5];
array2.forEach((element,index)=>{
    element*=element;
    console.log(element);
});
console.log("Array is: ", array2);


//3. .filter()
//let array = [10,20,30,40,50]
//wewant to keep only element in this array which is greater than 30.
//First we need to find the number of element which are greater than 30.

//in java--we want to find greater than 30.
//list<Integer>list = newArrayList<>();
//for(int i = 0; i<array.length;i++){
//if(array[i]>=30){
//list.add(array[i]);
//} 
//}

let array3 = [10,20,30,40,50];
let newArray3 = array3.filter((element)=>{
    return element >=30;
});
//.filter will give the boolean expression true or false if true then element added to the array.

//we can write the above expression in this way also--
let array4 = [10,20,30,40,50];
let newArray4 = array4.filter((element)=>element>=30);
console.log(newArray4);
//in java we can write--
//int[]  newArray = array.stream().filter(element->{
//return element>=30;
//}).toArray(int[]::new);

//4. .find() -- find certain type of value in your array.
//Return the value of forst element in the array where predicate is true and undefined otherwise.
//array.find() is also going to run a "for loop"
//if it gives true then it will stop and it return the array value into the temp.

let array5 = [10,20,30,40,50];
let temp = array.find((value)=>{
    return value >20;
});
console.log(temp);

//5. .sort()
let array6 = [50,40,30,20,10];
let sortedArray6 = array6.sort();
//always going to return a new array.
console.log(sortedArray6);

//in javascript, it sort the array according to their sorting array.
//it is sorting according to their lexico graphical order.
//What we do to getting sorting in integer fashion.
//---in that case we have to use comparators(it is an interface in java which help to calculate or create an comparison into any linear data structure or to sort the values.)

let array7 = [50,40,111,30,20,10];
let sortedArray7 = array7.sort((el1,el2)=>{
    el1 = Number(el1);
    el2 = Number(el2);
    return el1-el2;
});
console.log(sortedArray7);

//Object Destructuring--way to destructure an object(to make program easier.)
let myObject = {
    name:"Alex",
    age:24,
    address: {
        street : "Brooklyn",
        city : "New York",
        state: "NY",
        country: "USA",
        passportDetails :{
            passportNumber : "ABCD1234"
        }
    }
}
console.log(details.address.passportDetails.passportNumber);
//also we can write-->reading the value from an object.
//let passportNumber = details.address.passportDetails.passportNumber)
//console.log(passportNumber);


//if we want to read -> name and age from this object , so we can destructure the name and age from the object.
 let myName = details.name;//Here we cant write nmae because we can't redeclare the variable under block scoped.
 let age = details.age;
 console.log(myName,age);
//another way of destructuring--
// let{name,age}=details;
//let{name:myName,age};

//ARRAY MATCHING--
//Condition for Array Matching-
//1. length of array should be same.
//2. if they pointing towards the same reference
//3. if(array1 == array2)
//4. run for loop


// OBJECT MATCHING--
/*let obj1 = {name: "Kanu"};
let obj2 = {nmae: "Priya"};
function areEqual(obj1,obj2){
    if(obj1==obj2){
        return true;
    }
    if(object.keys(obj1).length != object.keys(obj2).length){
        return false;
    }
}for(let key of object.keys(obj1)){
    if(type obj2[key]=="undefined"){
        return false;
    }
    obj2[key]= obj1[key]{
        return false;
    }
}
return true;
}
console.log(areEqual(obj1,obj2));*/

//MAP AND SET--->
let map = mewMap();
map.set(1,"Kanu");
map.set(2,"Alex");
console.log(map);

let set = newSet();
set.add(1);
set.add(-1);
console.log(set);

//CLASS-->
//in javascript we can not create constructor.
//in javascript we have no concept of public or private.
/*class Animal{
    noOfLegs;
    color;
    family;
    sound;
    this.noOfLegs = noOfLegs;
    this.color = color;
    this.family = family;
    this.sound = sound;
    }
    let animal = new Animal(4,"brown","rodent","something");
    console.log(animal);*/









