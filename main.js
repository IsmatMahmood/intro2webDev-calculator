const calculator = document.querySelector(".calculator_container");

calculator.addEventListener("click", (e) => getClickValue(e));

function getClickValue(event) {
    console.log(event.target.innerText);
    return event.target.innerText;
}