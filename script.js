
const container = document.getElementById("container")
const resetButton = document.querySelector(".changeSize")
resetButton.addEventListener("click", askUser);

//create grid of divs and append to container div
function createDivs(cellNum) {
  for (let i = 0; i < cellNum; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell")
    container.appendChild(cell)
    cell.addEventListener("mouseover", changeColor);
  }
}

//create rows and columns
function makeRows(numRow, numCol) {
  container.style.setProperty("--numRows", numRow);
  container.style.setProperty("--numCols", numCol);
  for (let i = 0; i < numRow; i++) {
    createDivs(numCol);
  }
}

function askUser() {
  let newSize = prompt("Enter grid size");
  if (newSize > 67 || Number.isNaN(newSize)) {
    alert("Number must be less than 67!")
    askUser();
  } else {
    resetGrid();
    makeRows(newSize, newSize)
    createDivs(newSize);
  }
}

function changeColor(e) {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
}

function resetGrid() {
  const gridArray = Array.from(container.childNodes);
  gridArray.forEach((x) => {
    container.removeChild(x);
  })
}

askUser();