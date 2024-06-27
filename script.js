// script.js
function build(number) {
    const leftSide = document.getElementById('leftSide');
    const rightSide = document.getElementById('rightSide');

    // Clear previous blocks
    leftSide.innerHTML = '';
    rightSide.innerHTML = '';

    // Generate blocks for both sides
    for (let i = 0; i < number; i++) {
        const leftBlock = document.createElement('div');
        leftBlock.className = 'block';
        leftBlock.textContent = '?';
        leftSide.appendChild(leftBlock);

        const rightBlock = document.createElement('div');
        rightBlock.className = 'block';
        rightBlock.textContent = '?';
        rightSide.appendChild(rightBlock);
    }
}

function generateBlocks() {
    const blockCount = document.getElementById('blockCount').value;
    
    // Validate the input
    if (blockCount < 1 || blockCount > 8) {
        alert('Please enter a number between 1 and 8');
        return;
    }
    
    build(parseInt(blockCount));
}
