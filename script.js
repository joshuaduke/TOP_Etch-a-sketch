


function generateLayout(numDivs){
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

function main(){
   generateLayout(16);
   let myDivs = document.querySelectorAll('.myDiv');

   myDivs.forEach(element =>{
       element.addEventListener('mouseover', (e)=>{
        element.style.backgroundColor = 'red';
       })
   })
}

main()