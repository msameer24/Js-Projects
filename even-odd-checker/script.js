// Even Odd Number Checker

let form = document.querySelector('form')
let heading2 = document.getElementById('heading2');


form.addEventListener("submit", (e)=> {
  e.preventDefault();
  let inputNumber = document.getElementById('inputnumber');
  let userInputValue = inputNumber.value;
  // console.log(userInputValue);


  if(userInputValue%2  === 0){
      heading2.textContent = `It's Even !! number is ${userInputValue}`
  } else{
    heading2.textContent = `It's Odd !! number is ${userInputValue}`
  }
   
  form.reset();
  
});

