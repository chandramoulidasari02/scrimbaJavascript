// function increment() {
//   count = 0
//   console.log("The button was clicked");
//   count += 1;
//   console.log(count);
// }

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let countEL = document.getElementById("count-el");

let count = 0;
function increment() {
  count += 1;
  countEL.innerText = count;
}

function save() {
  console.log(count);
}

