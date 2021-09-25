// UI
const panel = document.querySelector('#panel');
const ratingcontainer = document.querySelector('.rating-container');
const ratings = document.querySelectorAll('.rating');
const sendbtn = document.querySelector('#send');


let selectedrating = "Satisfied";

ratingcontainer.addEventListener('click',(e)=>{
    // console.log(e.target);

    if(e.target.parentNode.classList.contains("rating")){
        // console.log(e.target);
        removeactive();

        e.target.parentNode.classList.add('active');

        selectedrating = e.target.parentNode.lastElementChild.textContent;
        // console.log(selectedrating);
    }else if(e.target.classList.contains('rating')){
        removeactive();
        e.target.classList.add('active');
        selectedrating = e.target.lastElementChild.textContent;
    }
});

function removeactive(){
    for(let i=0; i < ratings.length; i++){
        ratings[i].classList.remove('active');
    }
}


sendbtn.addEventListener('click',()=>{
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <strong>Feedback : ${selectedrating}</strong>
        <p>We will use your feedback to improve our customer support.</p>
    `;
});