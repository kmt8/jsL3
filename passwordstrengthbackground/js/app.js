// UI
const   background = document.getElementById('background'),
        password = document.getElementById('password'),
        eyeicon = document.getElementById('eye');


// Event Listener
password.addEventListener('input',(e)=>{
    // console.log(e.target);
    // console.log(e.target.value);

    const   input = e.target.value,
            inlength = input.length;
    // console.log(inlength);
    // console.log(20 - inlength * 2);

    const blurvalue = 20 - inlength * 2;

    background.style.filter = `blur(${blurvalue}px)`;
});

eyeicon.addEventListener('click',()=>{
    // console.log('hay');

    if(eyeicon.classList.contains('fa-eye-slash')){
        // console.log('showpassword');

        // Method 1
        // eye.classList.remove('fa-eye-slash');
        // eye.classList.add('fa-eye');

        // Method 2
        eyeicon.classList.replace('fa-eye-slash','fa-eye');

        password.setAttribute("type","text");

    }else{
        // console.log('hidepassword');

        // Method 1
        // eye.classList.add('fa-eye-slash');
        // eye.classList.remove('fa-eye');

        // Method 2
        eyeicon.classList.replace('fa-eye','fa-eye-slash');

        password.setAttribute("type","password");
    }

});