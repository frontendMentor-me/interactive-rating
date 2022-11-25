
let startContent = document.getElementsByClassName("start")[0]
let endContent = document.getElementsByClassName("end")[0]
let btnSubmit = document.getElementById("submit")
let numbers = document.getElementsByClassName("number")
let selected = document.getElementById("selected")
let numberSelected;

btnSubmit.addEventListener("click", () => {
    if (numberSelected != undefined) {
        startContent.classList.add("hide")
        endContent.classList.remove("hide")

        selected.textContent = numberSelected;
    }
})

Array.prototype.forEach.call(numbers, function (element) {
    element.addEventListener("click", () => {
        clearColor();
        element.classList.add("selected")
        numberSelected = element.textContent;
    })
})

function clearColor() {
    [].forEach.call(numbers, function (element) {
        element.classList.remove("selected")
    })
}