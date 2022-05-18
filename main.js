let rightSide = document.querySelector('.right_side');
let bmwh1 = document.querySelector('.bmw_h1');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', ({target}) => {
        if(target.value == 'red'){
            rightSide.style.backgroundImage = "url('/images/lambobg-removebg-preview.png')";
            rightSide.style.backgroundSize = "1080px 600px";
          
        }
        if(target.value == 'blue'){
            rightSide.style.backgroundImage = "url('/images/lambo1-removebg-preview.png')";
            rightSide.style.backgroundSize = "1080px 600px";
        }
        if(target.value == 'black'){
            rightSide.style.backgroundImage = "url('/images/lambo2-removebg-preview.png')";
            rightSide.style.backgroundSize = "1080px 600px";
        }
    }) 
})