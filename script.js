let clearBtn = document.querySelector('.clearGrid');
clearBtn.addEventListener('click', clearGrid);

let radios = document.querySelectorAll('input');

radios.forEach(radio => {
    radio.addEventListener('click', ()=>{
        changeColor()
    })
})

function generateLayout(numDivs){
    console.log(numDivs)
    let container = document.querySelector('.container');
    container.style.cssText = `
    display: grid;
    grid-template-columns: repeat(${numDivs}, 1fr);
    `
    let div;

    for(let i = 0; i < numDivs * numDivs; i++){
        div =  document.createElement("div");
        div.classList.add('myDiv');
        div.style.width
        container.appendChild(div);
    }

    return div;
}


function clearGrid(){
    let myDivs = document.querySelectorAll('.myDiv');

    myDivs.forEach(element => {
        element.parentNode.removeChild(element);
    })

    return generateNewDimensions();
}

function generateNewDimensions(){
    let dimensions;
   do {
    dimensions = +prompt(`Please Enter new Dimensions`);
   } while (dimensions > 100 || dimensions == ''); 
     
    console.log(`Dimension ${typeof dimensions}`)
    generateLayout(dimensions);
    changeColor();
}

function changeColor(){
    let myDivs = document.querySelectorAll('.myDiv');
    let radioColor = document.querySelector('color');

    if(document.querySelector('#color').checked){
        myDivs.forEach(element =>{
            element.addEventListener('mouseover', (e)=>{
             element.style.backgroundColor = `#${getRandomColor()}`;
            })
        })
    } else if(document.querySelector('#monochrome').checked){
        myDivs.forEach(element =>{
            element.addEventListener('mouseover', (e)=>{
             element.style.backgroundColor = 'black';
            })
        })
    }
}

function getRandomColor(){
    return Math.floor(Math.random()*16777215).toString(16); 
}

// function main(){
//    generateLayout(10);
//    changeColor();
// }

generateLayout(10);
changeColor();

// main()