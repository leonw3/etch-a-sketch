// Global variable size
let size = 16;

createGrid(size);
changeGridSize();
resetGrid();
// Modify grid called within createGrid()

function createGrid(size) {
    const container = document.querySelector("#container");
    // Creating rows  
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        // Creating columns within one row
        for (let j = 0; j < size; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            
            const height = 720 / size - 2
            const width = 720 / size - 2
            column.setAttribute("style",`height: ${height}px; width: ${width}px;`);

            row.appendChild(column);
        }
    }
    modifyGridColor(); 
}

function modifyGridColor() {
    const columns = document.querySelectorAll(".column");
    columns.forEach((column) => {
        column.addEventListener("mouseover", () => {
            column.style.backgroundColor = "black";
        });
    });
}

function resetGrid() {
    const resetButton = document.querySelector("#resetBtn");
    resetButton.addEventListener("click", () => {
        removeGrid();
        createGrid(size);
    });
}

function removeGrid() {
    let rows = document.querySelectorAll(".row");
    let columns = document.querySelectorAll(".column");
    rows.forEach(row => {
        row.remove();
    });
    columns.forEach(column => {
        column.remove();
    });
}

function changeGridSize() {
    const newGridButton = document.querySelector("#newGridBtn");
    newGridButton.addEventListener("click", () => {
        const newSize = Number(prompt("How many grids?"));
        if (newSize > 0 && newSize <= 100) {
            size = newSize; // Update the global size
            removeGrid();
            createGrid(size);
        } else {
            alert("Please enter a valid number from 0 to 100.");
        }
    });
}
