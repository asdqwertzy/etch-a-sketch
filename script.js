var container = document.querySelector('.container')
container.style.cssText = "grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);"
var divs = []

for (let i = 0; i <= 256; i++)
{
    var x = document.createElement("div")
    divs.push(x)
    container.appendChild(x)
}