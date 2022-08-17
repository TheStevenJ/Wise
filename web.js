window.addEventListener('scroll', view)

function view() {
    var views =document.querySelectorAll('.view');

    for(var i = 0; i < views.length; i++){

        var windowheight = window.innerHeight;

         var viewtop = views[i].getBoundingClientRect().top;

         var viewpoint = 100;

         if(viewtop < windowheight - viewpoint){
            views[i].classList.add('active');
         }
         else {
            views[i].classList.remove('active');
         }
    }
}

window.addEventListener('scroll', one)

function one() {
    var ones =document.querySelectorAll('.one');

    for(var i = 0; i < ones.length; i++){

        var windowheight = window.innerHeight;

         var onetop = ones[i].getBoundingClientRect().top;

         var onepoint = 300;

         if(onetop < windowheight - onepoint){
            ones[i].classList.add('active');
         }
         else {
            ones[i].classList.remove('active');
         }
    }
}

window.addEventListener('scroll', two)

function two() {
    var twos =document.querySelectorAll('.two');

    for(var i = 0; i < twos.length; i++){

        var windowheight = window.innerHeight;

         var twotop = twos[i].getBoundingClientRect().top;

         var twopoint = 300;

         if(twotop < windowheight - twopoint){
            twos[i].classList.add('active');
         }
         else {
            twos[i].classList.remove('active');
         }
    }
}

window.addEventListener('scroll', three)

function three() {
    var threes =document.querySelectorAll('.three');

    for(var i = 0; i < threes.length; i++){

        var windowheight = window.innerHeight;

         var threetop = threes[i].getBoundingClientRect().top;

         var threepoint = 300;

         if(threetop < windowheight - threepoint){
            threes[i].classList.add('active');
         }
         else {
            threes[i].classList.remove('active');
         }
    }
}

window.addEventListener('scroll', four)

function four() {
    var fours =document.querySelectorAll('.four');

    for(var i = 0; i < fours.length; i++){

        var windowheight = window.innerHeight;

         var fourtop = fours[i].getBoundingClientRect().top;

         var fourpoint = 300;

         if(fourtop < windowheight - fourpoint){
            fours[i].classList.add('active');
         }
         else {
            fours[i].classList.remove('active');
         }
    }
}