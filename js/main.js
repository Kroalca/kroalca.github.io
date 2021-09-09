$(document).ready(function(){
    new WOW().init();
    let birth = new Date('1997-07-12');
    let age = new Date(new Date() - birth).getFullYear()-1970;
    let span_age = document.getElementById("age");
    span_age.innerHTML=age;
});

const typed = new Typed('.typed', {
    // strings: ['Web Developer', 'Frontend', 'Backend', 'Fullstack'],
    stringsElement: '#cadena-texto',
    smartBackspace: false,
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html'
});

$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });