$(document).ready(function(){
    new WOW().init();
    let birth = new Date('1997-07-12');
    let ini = new Date('2017-09-12');
    let age = new Date(new Date() - birth).getFullYear()-1970;
    let exp = new Date(new Date() - ini).getFullYear()-1970;
    let span_age = document.getElementById("age");
    let span_age2 = document.getElementById("age2");
    let span_exp = document.getElementById("exp");
    span_age.innerHTML=age;
    span_age2.innerHTML=age;
    span_exp.innerHTML=exp;
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