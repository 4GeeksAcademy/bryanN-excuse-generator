import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");


  console.log('Bryan');


  let excuses = {
    who: ['The dog', 'My grandma', 'The mailman', 'My bird'],
    action: ['ate', 'peed', 'crushed', 'broke'],
    what: ['my homework', 'my phone', 'the car'],
    when: ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'],
  }



  function uno() {
    console.log('por favor');

  }

  let ex_length = Object.keys(excuses);

  for (const property in excuses) {
    console.log('Hello');
    console.log(excuses.property);
    console.log(`${property}: ${excuses[property]}`);


  }




  window.uno = uno;




};
