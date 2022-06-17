



// test variable decleration
let blockSize = 32;
const MAX_SIZE = 816;
let testSize =0;


//creation container variable.
const container = document.querySelector('#container');



//creation of content element which will house all the pixelBlocks.
const content = document.createElement("div");
content.classList.add('content');
content.style.width = "816px";
content.style.height = "816px";
content.style.display = "flex";
content.style.flexWrap = "wrap";
content.style.marginRight = "200px";
container.appendChild(content);



//creation of reszie button.
const resizeButton = document.querySelector('#resizeButton');

const eraserButton = document.querySelector('#eraserButton');


const colorChanger = document.querySelector('#colourChanger');





function createBlocks(blockSize) { 

// for loop to create the pixel blocks for etch a sketch
for (i=0; i < blockSize*blockSize; i++)
{

let newBlock = 0;
//creating new div block elements which will be drawn on.
newBlock = MAX_SIZE/blockSize;


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

//creating blocks.
createBlocks(blockSize);

// creating array to house all of the pixelBlock divs
let pixelBlocks = document.querySelectorAll(".pixelBlock");


// function that allows for coloring the white blocks.
function colorAdder () {
// loops through and adds event to all pixel blocks.
for (let pixelBlock of pixelBlocks){
pixelBlock.addEventListener ('click' && 'mousemove', function(e){
pixelBlock.style.backgroundColor = "black";

});
}

}

// calling function.
colorAdder ();

function eraser () {
    // loops through and adds event to all pixel blocks.
    for (let pixelBlock of pixelBlocks){
    pixelBlock.addEventListener ('click' && 'mousemove', function(e){
    pixelBlock.style.backgroundColor = "white";
    
    });
    }
    
    }


// Deletes current art and resizes to new value. 

resizeButton.addEventListener('click', function(e){

blockSize = prompt("Enter how large you want the blocks.")



// removes all pixelBlocks.
for  (let i =0; i < pixelBlocks.length; i++)  {
content.removeChild(pixelBlocks[i]);




}
//creates new blocks to new size and adds back functionality.
createBlocks(blockSize);
 pixelBlocks = document.querySelectorAll(".pixelBlock");
colorAdder();
});




eraserButton.addEventListener('click', function(e){
    eraser();
});




colorChanger.addEventListener('click', function(e){
   
    colorAdder();
});


