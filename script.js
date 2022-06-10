// test variable decleration
let blockSize = 32;
const MAX_SIZE = 816;




const container = document.querySelector('#container');



//creation of content element which will house all the pixelBlocks.
const content = document.createElement("div");
content.classList.add('content');
content.style.width = "816px";
content.style.height = "816px";
content.style.backgroundColor = "#b5e48c";
content.style.display = "flex";
content.style.flexWrap = "wrap";
container.appendChild(content);







let newBlock = 0;

newBlock = MAX_SIZE/blockSize;
console.log(newBlock);
let blocksToCreate = blockSize*blockSize; 
console.log(blocksToCreate)



// for loop to create elements.
for (i=0; i < blockSize*blockSize; i++)
{
    const pixelBlock = document.createElement('div')
    pixelBlock.classList.add('pixelBlock')
    pixelBlock.style.h
    pixelBlock.style.width = `${newBlock}px`;
    pixelBlock.style.height = `${newBlock}px`;
    pixelBlock.style.backgroundColor = "white";
    content.appendChild(pixelBlock);
    console.log(pixelBlock);
   
}
const pixelBlocks = document.querySelectorAll(".pixelBlock");

// pixelBlocks[0].addEventListener('click', function(e){
   
//     });
// allows the boxes to be clickable. :) 

// need to add variable function to change color of pixels.
for (const pixelBlock of pixelBlocks){
pixelBlock.addEventListener ('click' && 'mousemove', function(e){
pixelBlock.style.backgroundColor = "black";

});
}
