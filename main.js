const canvasDimension = 10;// n by n
const canvas = document.querySelector('#canvas');

//draws grid
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