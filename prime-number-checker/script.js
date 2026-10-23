// Even Odd Number Checker

let form = document.querySelector('form')
let heading2 = document.getElementById('heading2');


form.addEventListener("submit", (e)=> {
  e.preventDefault();
  let inputNumber = document.getElementById('inputnumber');
  let userInputValue = inputNumber.value;
  console.log(userInputValue);


  //  heading2.textContent = `You Enter ${userInputValue}`


  // if(userInputValue%1 || userInputValue%userInputValue === 0){
  //     heading2.textContent = `You Enter Prime number which is ${userInputValue}`
  // } else{
  //   heading2.textContent = `It's not a number which is ${userInputValue}`
  // }


  
 let isPrime = true;
  
if(userInputValue > 1){
 
  // here we can also use the for loop with n <= Math.sqrt(userInputValue) to find square root of the number to make it short for the loop to find its divisors to not give load 
// for(let n = 2; n <= Math.sqrt(userInputValue); n++)
// for(let n = 2; n<= userInputValue-1; n++) and can use this also till the user input number -1 

  for(let n = 2; n <= Math.sqrt(userInputValue); n++){
    if(userInputValue%n === 0){
     isPrime = false;
     break;
    }
  }
      if(isPrime  === true){
        heading2.textContent = `You Enter Prime number which is ${userInputValue}`
      }

      else{
        heading2.textContent = `It's not a number which is ${userInputValue}`
      }

}
else{
   heading2.textContent = `It's not a number which is ${userInputValue}`
}

form.reset();
  
});

