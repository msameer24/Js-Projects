// Palindrome Checker

let form = document.querySelector('form')
let heading2 = document.getElementById('heading2');


form.addEventListener("submit", (e)=> {
  e.preventDefault();
  let inputtext = document.getElementById('inputnumber');
  let userInputValue = inputtext.value;
  console.log(userInputValue);

  heading2.textContent = `Your enter: ${userInputValue}`


  let reverseValueIs = userInputValue.split("").reverse().join("");

if(userInputValue === reverseValueIs){
    // console.log("yes its Palindrome");
     heading2.textContent = `Your enter: ${userInputValue} and yes its Palindrome `;
    
} else{
    // console.log("its not Palindrome");
     heading2.textContent = `Your enter: ${userInputValue} and it's not Palindrome `;
    
}

form.reset();
  
});

