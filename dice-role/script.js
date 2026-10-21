// DICE ROLE Game

const button = document.getElementById("btn");
let heading2 = document.getElementById('heading2');

button.addEventListener("click", ()=> {
  let diceRoll  = Math.floor((Math.random()*6 + 1));
  // console.log(diceRoll);
   heading2.textContent = `It's A : ${diceRoll} `
  
})







