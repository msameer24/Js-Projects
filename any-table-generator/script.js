// Even Odd Number Checker

let form = document.querySelector('form')
let heading2 = document.getElementById('pre');


form.addEventListener("submit", (e)=> {
  e.preventDefault();
  let inputNumber = document.getElementById('inputnumber');
  let userInputValue = inputNumber.value;
  console.log(userInputValue);
heading2.textContent = `You Enter ${userInputValue}
  Table Of ${userInputValue} is 
  ${userInputValue} X 1 = ${userInputValue *1}
  ${userInputValue} X 2 = ${userInputValue *2}
  ${userInputValue} X 3 = ${userInputValue *3}
  ${userInputValue} X 4 = ${userInputValue *4}
  ${userInputValue} X 5 = ${userInputValue *5}
  ${userInputValue} X 6 = ${userInputValue *6}
  ${userInputValue} X 7 = ${userInputValue *7}
  ${userInputValue} X 8 = ${userInputValue *8}
  ${userInputValue} X 9 = ${userInputValue *9}
  ${userInputValue} X 10 = ${userInputValue *10}
  
   
   `

   
  form.reset();
  
});




