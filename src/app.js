import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");


};

let excuses = {
  who: ['The dog', 'My grandma', 'The mailman', 'My bird'],
  action: ['ate', 'peed', 'crushed', 'broke'],
  what: ['my homework', 'my phone', 'the car'],
  when: ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'],
}

function excusegenerator() {

  let rndmnum = [];

  let excuse = [];

  for (const val in excuses) {

    let datalength = excuses[val];

    let num = Math.floor(Math.random() * datalength.length);

    rndmnum.push(num);

    excuse.push(datalength[num])






  }

  let excusesentence = excuse.join(' ')

  document.getElementById("excuse").innerText = excusesentence;


  return console.log(excusesentence);


}
window.excusegenerator = excusegenerator;