document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('nav_wrapper').classList.add('fixed-top');
          document.getElementById('nav_wrapper').classList.add('nav-colored');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('#nav').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('nav_wrapper').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 