// DOM elements
const container = document.getElementById('container');
const sizeButton = document.getElementById('size-btn');

// Default grid size
let gridSize = 16;

// Function to create the grid
function createGrid(size) {
    // Clear any existing grid
    container.innerHTML = '';
    
    // Calculate the size of each square
    const squareSize = 960 / size;
    
    // Create the specified number of squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        // Add hover effect
        square.addEventListener('mouseover', function() {
            this.classList.add('hovered');
        });
        
        container.appendChild(square);
    }
}

// Function to change the grid size
function changeGridSize() {
    let newSize = prompt('Enter the number of squares per side (maximum 100):');
    
    // Validate input
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1) {
        alert('Please enter a valid number!');
        return;
    }
    
    if (newSize > 100) {
        alert('Maximum size is 100!');
        newSize = 100;
    }
    
    gridSize = newSize;
    createGrid(gridSize);
}

// Event listener for the size button
sizeButton.addEventListener('click', changeGridSize);

// Initialize the grid when the page loads
window.onload = function() {
    createGrid(gridSize);
};