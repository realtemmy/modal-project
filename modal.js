openModalbtn = document.getElementById('open-modal-btn');
closeModalbtn = document.getElementById('close-modal-btn');
modalContent = document.querySelector('.modal-content');

openModalbtn.addEventListener('click', ()=>{
    modalContent.classList.add('show');
    document.body.style.backgroundColor = 'rgb(160, 160, 211)';
});
closeModalbtn.addEventListener('click', ()=>{
    modalContent.classList.remove('show');
    document.body.style.backgroundColor = 'bisque';

});