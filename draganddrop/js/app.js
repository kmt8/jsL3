// UI
const picdiv = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');


picdiv.addEventListener('dragstart',dragstart);
picdiv.addEventListener('dragend',dragend);


// Drag Start
function dragstart(){
    // console.log('dragstart is working');

    // this.classList.add('hold');
    this.className += " hold";
}

// Drag End
function dragend(){
    // console.log('dragend is working');

    this.className = "fill";
}