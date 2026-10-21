// Coin Flip Game

const button = document.getElementById("btn");

let heading2 = document.getElementById('heading2');


button.addEventListener("click", ()=> {
  let coinFlip  = Math.floor((Math.random()*2));
  // console.log(coinFlip);
  if(coinFlip===1){
     heading2.textContent = `Its A : Head`
  } else{ 
    heading2.textContent = `Its A : Tail`
  }
  
})







