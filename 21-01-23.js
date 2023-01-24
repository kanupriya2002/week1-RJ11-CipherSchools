//Node JS
//node.js is an open source,cross platform,back-end javascript runtime envoirment that runs on the v8engine and executes javascript outside a web-browser.
//In javascript we can declare a variable in 3 ways.
//1. by using var
//2. by using const
//3. by using let

//just normal example--
//var myName = "Kanu";
//console.log(myName);

//In javascript if we want to print something we use console.log();

const myName ="John";
console.log("myName");
//myName = "Alex";
//myName is already declared . myNmae is assign to john.so it referring to the john.that is why it shows the error.
//How to resolve thi problem?

//const myName = [];//this creating an empty array and assinging in the memory of the computer.
//console.log(myName);
//myName.push("john");//we try to modify in same memory allocation so myName is referring to the same memory that is why it is not giving the error.
//console.log(myName);
//In const we can not re-declare the variable again also not in the other programming language.

let myNaam = "john";
console.log(myNaam);
myNaam = "Alex";
console.log(myNaam);
//In let we can reassign the variable.shows- noError.
//In let we can not re-declare the variable it will definitley shows the error.

var meraName = "john";
console.log(meraName);
meraName = 5;
console.log(meraName);
var meraName = "Taylor";
console.log(meraName);
//In var we can reassign or re-declare the variable.
//var -- globally scopped - present entire js file.
//let,const -- blocked scoped -- in react we will use mostly them.

//STRING INTERPOLATION ---
// let's create a string 
let firstName = "Kanu";
let lastName = " Priya";
console.log (firstName+" " +lastName);
//we can also write --
// let fullName = firstName +" "+ lastName

//["kanu"]["priya"][" "]["kanu"][" kanu priya"][][][][][][][][[][][][][]
//extra space in the memory so we have some advance level javascript syntax to eliminate this problem.

let fullName = '$(firstName) $(lastName)';
console.log(fullName);

//DEFAULT PARAMS ---
//we can write function in two arrays.
//Normal Function--

/*function addTwoNumbers(num1, num2){
    return num1 + num2;
}
console.log(addTwoNumber(1,2));*/

let addTwoNumber = (num1, num2)=>{
    return num1 + num2 ;
};
console.log(addTwoNumber(1,2));

//In arrow function it is possible to remove this blocks as now.
//Arrow Function--
let addNumbers = (num1, num2) => {
    console.log(num1);
    console.log(num2);
    return num1 + num2;
};
console.log(addNumbers(1,2));

/*another way of writing--
 let addTwoNumbers = (num1, num2)=>{num1 + num2;
 }
 console.log(addTwoNumber(1,2));

 if we give only one argument inside function then the second argument will be undefined.
 undefined- it is also a data type inside a javascript.
 output will also undefined.
 to resolve this problem-- we provide default value.*/

//REST & SPREAD Operators-
// rest and spread operators are applicable in arrays and object in javascripts.
//Rest & Spread both are denoted with three dots (...)

/*SPREAD-- 
 [5,10,15,20]
 console.og(...array);
 By this we can take out all the element from the array.
- contiguous memory loction
- breaking the boundary of an array
*/
let array = [5,10,15,20,25];
let newArray = [...array];//here we can also add the element from the start or from last.
console.log(array);
// This process is deep clonning.
// sometime we thaought-
// let newarray = " array "; is also work but it will not work. it is not copying the array . 
//for copying the array we will use spread operators.

//REST OPERATORS -- used in function
let tesFunction = (...args)=>{
    console.log(args);
};

//Spread operators for an object-
let object = {
    name: "john",
    age: "24",
    city: "NewYork",
};
let object2 = {...object};//copying all the value of object inside object2 .
// it is a clonning of object.
// we can add the value or more information inside ...object.
//overridding also possible.

//SHALLOW Clonning -- not everything copied only higher value thing copied.

//FOR EXAMPLE ---















