let canvasDimension = localStorage.getItem("canvasDimension") || 40; // n by n
const canvas = document.querySelector('#canvas');

/*
    draws grid
*/
for(let i=0; i<canvasDimension; i++)
{
    const row = document.createElement('div');
    row.classList.toggle('row');
    canvas.appendChild(row);
    
    for(let i=0; i<canvasDimension; i++)
    {  
        const block = document.createElement('div');
        block.classList.toggle('block');
        row.appendChild(block);
    }
}

/*
    reload canvas size
*/
let gridSizeInput = document.querySelector('#grid-size');
gridSizeInput.value = canvasDimension;
const canvasDimensionLabel = document.querySelector('label[for="grid-size"]');
canvasDimensionLabel.innerText = `${canvasDimension} x ${canvasDimension}`;

gridSizeInput.addEventListener('input', () => {
    let canvasDimensionNew = gridSizeInput.value;
    localStorage.setItem("canvasDimension", canvasDimensionNew);
    canvasDimensionLabel.innerText = `${canvasDimensionNew} x ${canvasDimensionNew}`;
})
document.querySelector('#grid-size-btn').addEventListener('click', () => {
    if(confirm("are you sure you want to reload this window?")) {
        window.location.reload()
    }
})

/*
    clear canvas
*/
const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', () => {
    blocks.forEach(block => {
        block.style.cssText = "background-color: whitesmoke;";
    });
});

/*
    change paint color
*/
const colorBtn = document.querySelector('#color-input');
const controlsBackground = document.querySelector('#controls');
let paintColor = colorBtn.value;
controlsBackground.style.cssText = `background: linear-gradient(45deg, #424ed6, ${paintColor})`;
colorBtn.addEventListener('input', () => {
    paintColor = colorBtn.value;
    controlsBackground.style.cssText = `background: linear-gradient(45deg, #424ed6, ${paintColor})`;
});

/*
    eraser
*/
const eraserBtn = document.querySelector('#eraser-btn');
let isEraserOn = false;
eraserBtn.addEventListener('click', () => {
    if(isEraserOn === false)
    {
        isEraserOn = true;
        paintColor = "whitesmoke";
        eraserBtn.style.cssText = "background-color: #424ed6";
    }
    else {
        isEraserOn = false;
        paintColor = colorBtn.value;
        eraserBtn.style.cssText = "background-color: none";
    }
});

/*
    draw while mouse is pressed.
    stop drawing when mouse is released.
*/
let isDrawing = false;

const blocks = document.querySelectorAll('.block');
blocks.forEach(block => {
    block.addEventListener('mousedown', () => {
        isDrawing = true;
        block.style.cssText = `background-color: ${paintColor};`;
    })
    block.addEventListener('mouseover', (event) => {
        if(isDrawing){
            block.style.cssText = `background-color: ${paintColor};`;
        }
    })
    block.addEventListener('mouseup', () => {
        isDrawing = false; 
    })
})