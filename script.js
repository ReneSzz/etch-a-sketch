let blockSize = 4;
const MAX_SIZE = 816;

const container = document.querySelector('#container');




const content = document.createElement("div");
content.classList.add('content');
content.style.width = "816px";
content.style.height = "816px";
content.style.backgroundColor = "#b5e48c";
content.style.display = "flex";
container.appendChild(content);







let newBlock = 0;

newBlock = MAX_SIZE/(blockSize*blockSize);
console.log(newBlock);
let blocksToCreate = blockSize*blockSize; 
console.log(blocksToCreate)


for (i=0; i <= blockSize*blockSize; i++)
{
    const pixelBlock = document.createElement('div')
    pixelBlock.classList.add('pixelBlock')
    
    pixelBlock.style.width = `${newBlock}px`;
    pixelBlock.style.height = `${newBlock}px`;
    pixelBlock.style.backgroundColor = "black";
    content.appendChild(pixelBlock);
    console.log(pixelBlock);
   
}