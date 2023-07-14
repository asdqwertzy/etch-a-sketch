var container = document.querySelector('.container')
container.style.cssText = "grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);"
var divs = []

for (let i = 1; i <= 256; i++) {
    var x = document.createElement("div")
    divs.push(x)
    x.classList.add("grid-item")
    container.appendChild(x)
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function addListeners() {
    divs.forEach(function (x) {
        x.addEventListener('mouseover', function (e) {
            var randomRGB = randomColor();
            x.style.backgroundColor = randomRGB; // RGB challenge, uncomment for basic function
            // x.style.backgroundColor = "black";
        })
    })
}

function createDivs(amount) {
    for (let i = 1; i <= amount ** 2; i++) {
        var x = document.createElement("div")
        x.classList.add("grid-item")
        divs.push(x)
        container.appendChild(x)

    }
}

function new_sketch() {
    var new_Amount;
    while (true) {
        new_Amount = prompt("Enter the size of the grid (e.g., enter 5 for 5x5 grid. Max is 100.):")

        if (!isNaN(new_Amount) && new_Amount > 0 && new_Amount <= 100) {
            container.innerHTML = "";
            divs = []
            container.style.cssText = `grid-template-columns: repeat(${new_Amount}, 1fr); grid-template-rows: repeat(${new_Amount}, 1fr);`
            createDivs(new_Amount);
            addListeners();
            break;
        }
        else {
            alert("Invalid input. Enter a number between 0 - 100.")
        }
    }
}

addListeners()