value = document.getElementById('value');
increase = document.getElementById('inc');
decrease = document.getElementById('dec');
reset = document.getElementById('reset');

let digit = 0

increase.addEventListener('click', ()=>{
    digit ++;
    value.innerText = digit;
    if(digit > 0){
        value.style.color = 'white';
    }
});


reset.addEventListener('click', ()=>{
    digit = 0;
    value.innerText = digit;
    value.style.color = 'black';
})


decrease.addEventListener('click', ()=>{
    digit--
    value.innerText = digit;
    if(digit < 1){
        value.style.color = 'red';
    }
});
