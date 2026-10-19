// generate number from 1 to 10

const button = document.getElementById("btn");
let heading2 = document.getElementById('heading2');


button.addEventListener("click", ()=> {

 let randomNumber  = Math.floor((Math.random()*10)+1);
    console.log(randomNumber);
    heading2.textContent = `Random Number : ${randomNumber}`;

})





// number generator from 1 to 100
//  let randomNumber  = Math.floor((Math.random()*100)+1);


// number generator from 1 to 1000
//  let randomNumber  = Math.floor((Math.random()*1000)+1);
