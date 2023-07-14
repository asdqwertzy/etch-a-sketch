var container = document.querySelector('.container')
container.style.cssText = "grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);"
var divs = []

for (let i = 1; i <= 256; i++) {
    var x = document.createElement("div")
    divs.push(x)
    x.classList.add("grid-item")
    container.appendChild(x)
}

divs.forEach(function (x) {
    x.addEventListener('mouseover', function (e) {
        x.style.backgroundColor = "black";
    })
})