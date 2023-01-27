function addNum(num1,num2){
  return new Promise((fulfilled, notfulfilled) => {
      setTimeout(() =>{
          console.log("Inside setTimeout");
          fulfilled(num1+num2);

      }, 3000);
      notfulfilled(new Error ("An error occurred!"));
  });
      
}   
addNum(15,3)
.then(() => {
  

  console.log("promise was fulfilled");
})
.catch(() => {
  console.log("Promise was not fulfilled");
});