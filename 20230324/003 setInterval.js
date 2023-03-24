const hi = document.querySelector("#hi");
const btn = document.querySelector("#btn")
function changeColor () {
    setInterval(function () {
        let red = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let blue= Math.floor(Math.random()*255);
        hi.style.backgroundColor = "#"+red.toString(16)+green.toString(16)+blue.toString(16)
    }, 1000)
}
btn.addEventListener("click", changeColor)
// changeColor();









