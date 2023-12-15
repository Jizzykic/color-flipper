const colors = ["blue", "purple", "rgba(133,122,200)", "red", "gold", "orange", "yellow", "rgba(92,12,214)", "silver", "green"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = haveRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function haveRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}