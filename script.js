const gridContainer = document.querySelector(".grid-container");

const btnGridSize = document.querySelector(".btn-gridsize");
const btnColorpick = document.querySelector(".color-picker");
const btnRainbow = document.querySelector(".btn-rainbow");
const btnErase = document.querySelector(".btn-erase");

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

function pickedColor() {
  const gridCells = document.querySelectorAll(".grid-cell");
  btnColorpick.addEventListener("input", (e) => {
      gridCells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
          cell.style.backgroundColor = e.target.value;
      });
    });
  });
}

function rainbowColor() {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      const randomR = Math.floor(Math.random()*156)+100;
      const randomG = Math.floor(Math.random()*156)+50;
      const randomB= Math.floor(Math.random()*156)+50;
      const randomRGB = `rgb(${randomR}, ${randomG}, ${randomB})`;
      cell.style.backgroundColor = randomRGB;
    });
  });
}

function changeGrid() {
    let newSize = prompt("Choose the number of squares per side", "Max. 100");
    if(newSize > 0 && newSize <= 100) {
      gridContainer.textContent = "";
      createGrid(newSize);
    } else {
      alert("Please enter a valid number.");
    };
};

function eraseGrid() {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
  cell.style.backgroundColor = "lightgrey";
  });
}


btnGridSize.addEventListener("click", changeGrid);
btnColorpick.addEventListener("click", pickedColor);
btnRainbow.addEventListener("click", rainbowColor);
btnErase.addEventListener("click", eraseGrid)

createGrid(16);
