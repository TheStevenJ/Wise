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