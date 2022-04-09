
const button = document.querySelector('button');

function greet() {
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to see you...`);
}
button.addEventListener('click', greet);

let txt = "Find god bro I swear to god himself lol";
let length = txt.length;
document.getElementById("text").innerHTML = txt;
document.getElementById("demo").innerHTML = txt.length;