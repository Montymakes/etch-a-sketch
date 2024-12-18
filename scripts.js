const container = document.querySelector(".container");

const createGrid = (size) => {
    let newSquares = '';
    const widthAndHeight = 100 / size;
    for (let i = 0; i < size * size; i++) {
        newSquares += `<div class="square" id="square-${i}"></div>`;
    }
    container.innerHTML = newSquares;
    const gridSquares = document.querySelectorAll(".square");
    gridSquares.forEach(square => {
        square.style.height = `${widthAndHeight}vh`;
        square.style.width = `${widthAndHeight}vw`;
    })
}

createGrid(16);