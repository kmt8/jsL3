// UI
const   checkbox = document.getElementById('toggle'),
        slider = document.getElementById('slider');

const   basic = document.querySelector('.basic'),
        pro = document.querySelector('.pro'),
        master = document.querySelector('.master');


// Event Listener
slider.addEventListener('click',()=>{
    // console.log('hay');

    if(!checkbox.checked){
        basic.innerHTML = 110;
        pro.innerHTML = 230;
        master.innerHTML = 350;
    }else{
        [basic.textContent,pro.textContent,master.textContent] = [9.99,19.99,29.99];
    }
});