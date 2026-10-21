// Generate Random Color

const button = document.getElementById("btn");
let body = document.querySelector('body');
let heading2 = document.getElementById('heading2');


button.addEventListener("click", ()=> {
  let redNum  = Math.floor((Math.random()*256));
  let greenNum  = Math.floor((Math.random()*256));
  let blueNum  = Math.floor((Math.random()*256));

  heading2.textContent = `Color Code Is: rgb(${redNum}, ${greenNum}, ${blueNum}) `
  body.style.backgroundColor = `rgb(${redNum}, ${greenNum}, ${blueNum})`



})







