window.addEventListener('scroll', reveal)

function reveal() {
    var reveals =document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;

         var revealtop = reveals[i].getBoundingClientRect().top;

         var revealpoint = 400;

         if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
         }
         else {
            reveals[i].classList.remove('active');
         }
    }
}

window.addEventListener('scroll', show)

function show() {
    var shows =document.querySelectorAll('.show');

    for(var i = 0; i < shows.length; i++){

        var windowheight = window.innerHeight;

         var showtop = shows[i].getBoundingClientRect().top;

         var showpoint = 400;

         if(showtop < windowheight - showpoint){
            shows[i].classList.add('active');
         }
         else {
            shows[i].classList.remove('active');
         }
    }
}

window.addEventListener('scroll', visable)

function visable() {
    var visables =document.querySelectorAll('.visable');

    for(var i = 0; i < visables.length; i++){

        var windowheight = window.innerHeight;

         var visabletop = visables[i].getBoundingClientRect().top;

         var visablepoint = 500;

         if(visabletop < windowheight - visablepoint){
            visables[i].classList.add('active');
         }
         else {
            visables[i].classList.remove('active');
         }
    }
}


window.addEventListener('scroll', block)

function block() {
    var blocks =document.querySelectorAll('.block');

    for(var i = 0; i < blocks.length; i++){

        var windowheight = window.innerHeight;

         var blocktop = blocks[i].getBoundingClientRect().top;

         var blockpoint = 10;

         if(blocktop < windowheight - blockpoint){
            blocks[i].classList.add('active');
         }
         else {
            blocks[i].classList.remove('active');
         }
    }
}



