// Generate Random Color for hex code


let alpha = ['a', 'b', 'c', 'd', 'e', 'f'];

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const button = document.getElementById("btn");

let body = document.querySelector('body');
let heading2 = document.getElementById('heading2');




button.addEventListener("click", ()=> {
  
    let randomColor = "#" +
  Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, "0");


 heading2.textContent = `Color Code Is: hex ${randomColor} `
  body.style.backgroundColor = randomColor;
   console.log(randomColor);

})



















// -----*****************-----------



// button.addEventListener("click", ()=> {

    //   let randomNumber  = Math.floor((Math.random()*numbers.length));

//   let randomalpha  = Math.floor((Math.random()*alpha.length));


//   let newNumber = `#${numbers[randomNumber]}${alpha[randomalpha]}${alpha[randomalpha]}${numbers[randomNumber]}${numbers[randomNumber]}${alpha[randomalpha]}`;



//   body.style.backgroundColor = newNumber;
//    console.log(newNumber);

// })