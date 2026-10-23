// Number Guessing Game 

let form = document.querySelector('form')
let heading2 = document.getElementById('heading2');


form.addEventListener("submit", (e)=> {
  e.preventDefault();
  let inputNumber = document.getElementById('inputnumber');
  let userInputValue = inputNumber.value;
  let randomNumber  = Math.floor((Math.random()*11));
  heading2.textContent = `You Enter ${userInputValue} & Random Number Is ${randomNumber}`
  form.reset();
  
});

