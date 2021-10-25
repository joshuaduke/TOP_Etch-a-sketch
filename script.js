

let clearBtn = document.querySelector('.clearGrid');

clearBtn.addEventListener('click', clearGrid);

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
    let dimensions = +prompt(`Please Enter new Dimensions`);
    console.log(`Dimension ${typeof dimensions}`)
    generateLayout(dimensions);
    changeColor();
}

function main(){
   generateLayout(10);
   changeColor();
}

function changeColor(){
    let myDivs = document.querySelectorAll('.myDiv');

    myDivs.forEach(element =>{
        element.addEventListener('mouseover', (e)=>{
         element.style.backgroundColor = 'red';
        })
    })
}

main()