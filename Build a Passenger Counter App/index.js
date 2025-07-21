let countEL = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");

let count = 0;
function increment() {
  count += 1;
  countEL.textContent = count;
}

function save() {
  let saveCount = count + " - ";
  saveEL.textContent += saveCount;
  count = 0;
  countEL.textContent = count;
}
