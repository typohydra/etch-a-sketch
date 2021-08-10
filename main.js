let canvasDimension = document.querySelector('#grid-size').value;// n by n
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
const canvasDimensionLabel = document.querySelector('label[for="grid-size"]');
canvasDimensionLabel.innerText = `${canvasDimension} x ${canvasDimension}`;
document.querySelector('#grid-size').addEventListener('input', () => {
    canvasDimension = document.querySelector('#grid-size').value;
    canvasDimensionLabel.innerText = `${canvasDimension} x ${canvasDimension}`;
})
document.querySelector('#grid-size-btn').addEventListener('click', () => {
    window.location.reload()
})

/*
    clear canvas
*/
const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', () => {
    blocks.forEach(block => {
        block.style.cssText = "background-color: white;";
    });
});

/*
    change paint color
*/
const colorBtn = document.querySelector('#color-input');
let paintColor = colorBtn.value;
colorBtn.addEventListener('input', () => {
    paintColor = colorBtn.value;
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
        paintColor = "white";
    }
    else {
        isEraserOn = false;
        paintColor = "black";
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