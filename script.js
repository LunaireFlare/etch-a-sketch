const gridContainer = document.querySelector(".grid-container");

const maximumSize = 100;
const userSize = 16;


function createGrid() {
  const cellSize = maximumSize / userSize; 

  for (let i = 0; i < userSize * userSize; i++) {
    const gridCell = document.createElement("div");
    gridCell.style.width = `${cellSize}%`;
    gridCell.style.height = `${cellSize}%`;
    gridCell.classList.add("grid-cell");
    gridContainer.appendChild(gridCell);
  }
}

function hoverColor() {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "coral";
    });
  });
}

createGrid();
hoverColor();