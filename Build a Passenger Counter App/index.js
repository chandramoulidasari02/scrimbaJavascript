
let count = 0;

function increment() {
    count += 1;
    document.getElementById("count").textContent = count;
}

function save() {
    console.log(count);
    // You can add more save functionality here
}
