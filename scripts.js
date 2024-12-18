const container = document.querySelector(".container");
const eraseGridButton = document.querySelector("#erase");

const highlightSquare = (e) => {
    e.target.classList.add("highlight");
}

const eraseGrid = () => {
    container.innerHTML = "";
    let size = parseInt(prompt('Enter one number for the width and height of your new Etch-a-Sketch:'));
    while (size === NaN
        || size < 1
        || size > 100
    ) size = parseInt(prompt('Please enter a whole number between 1 and 100:'));
    createGrid(size);
}

const createGrid = (size) => {
    let newSquares = '';
    const widthAndHeight = 100 / size;
    for (let i = 0; i < size * size; i++) {
        newSquares += `<div class="square" id="square-${i}"></div>`;
    }
    container.innerHTML = newSquares;
    const gridSquares = document.querySelectorAll(".square");
    gridSquares.forEach(square => {
        square.style.height = `${widthAndHeight}%`;
        square.style.width = `${widthAndHeight}%`;
        square.addEventListener("mouseover", highlightSquare);
    })
}

createGrid(16);
eraseGridButton.addEventListener("click", eraseGrid);