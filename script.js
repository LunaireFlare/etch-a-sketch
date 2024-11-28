const gridContainer = document.querySelector(".grid-container");
const btnGridSize = document.querySelector(".btn-gridsize");

function createGrid(defaultSize) {
  for (let i = 0; i < defaultSize * defaultSize; i++) {
    const cellSize = 100 / defaultSize;
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridContainer.appendChild(gridCell);
    gridCell.style.width = `${cellSize}%`;
    gridCell.style.height = `${cellSize}%`;
  }
  hoverColor()
};

function hoverColor() {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "palevioletred";
    });
  });
};

function changeGrid(defaultSize) {
    let newSize = prompt("Choose the number of squares per side", "Max. 100");
    if(newSize > 0 && newSize <= 100) {
      gridContainer.textContent = "";
      createGrid(newSize);
    } else {
      prompt("Please enter a valid number.");
    };
};


btnGridSize.addEventListener("click", changeGrid);

createGrid(16);
