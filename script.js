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
content.style.marginRight = "200px";
container.appendChild(content);




const resizeButton = document.querySelector('#resizeButton');



// let newBlock = 0;

// newBlock = MAX_SIZE/blockSize;
// let blocksToCreate = blockSize*blockSize; 


function createBlocks(blockSize) { 

// for loop to create elements.
for (i=0; i < blockSize*blockSize; i++)
{

let newBlock = 0;

newBlock = MAX_SIZE/blockSize;
// let blocksToCreate = blockSize*blockSize; 


    let pixelBlock = document.createElement('div')
    pixelBlock.classList.add('pixelBlock')
    pixelBlock.style.h
    pixelBlock.style.width = `${newBlock}px`;
    pixelBlock.style.height = `${newBlock}px`;
    pixelBlock.style.backgroundColor = "white";
    content.appendChild(pixelBlock);
    console.log(pixelBlock);
   
}

}


createBlocks(blockSize);


let pixelBlocks = document.querySelectorAll(".pixelBlock");



function colorAdder () {

for (let pixelBlock of pixelBlocks){
pixelBlock.addEventListener ('click' && 'mousemove', function(e){
pixelBlock.style.backgroundColor = "black";

});
}

}
colorAdder ();



resizeButton.addEventListener('click', function(e){
blockSize = prompt("Enter how large you want the blocks.")


for  (let i =0; i < pixelBlocks.length; i++)  {
content.removeChild(pixelBlocks[i]);




}
createBlocks(blockSize);
 pixelBlocks = document.querySelectorAll(".pixelBlock");
colorAdder();
});
