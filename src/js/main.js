var button = document.querySelector('#button')
var modal = document.querySelector('modal')


button.addEventListener('click' , function(){
    modal.classList.remove('modal_active');
});

close.addEventListener('click' , function(){
    modal.classList.remove('modal_active');
});