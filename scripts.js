const container = document.querySelector(".container");
const eraseGridButton = document.querySelector("#erase");

const generateRandomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${blue}, ${green})`;
}
const setRandomHighlight = (e) => {
    const color = generateRandomRGB();
    e.target.style.backgroundColor =  color;
};

const highlightSquare = (e) => {
    e.target.classList.add("highlight");
}

const eraseGrid = () => {
    container.innerHTML = "";
    let size = parseInt(prompt('Enter one number for pixel size of your new Etch-a-Sketch (Ex. Enter 16 for a 16X16 grid.):'));
    while (size === NaN
        || size < 1
        || size > 100
    ) size = parseInt(prompt('Please enter a whole number between 1 and 100:'));
    let color = parseInt(prompt('Chose your line color. Enter 0 for black or 1 for random colors.'));
    while( color == NaN
        || color < 0
        || color > 1
    ) color = prompt('Please enter a valid selection. Pick either 0 (black) or 1 (random colors):');
    createGrid(size, color);
}

const createGrid = (size,color = 0) => {
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
        if (color === 0) square.addEventListener("mouseover", highlightSquare);
        if (color === 1) square.addEventListener("mouseover", setRandomHighlight);
    })
}

createGrid(16);
eraseGridButton.addEventListener("click", eraseGrid);