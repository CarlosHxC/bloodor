$(document).ready(function() {

   /*Disque scroll 
   REVISAR
   */ $('a[href*=#]').bind('click',function(event){
        var $anchor = $(this);
 
        /*
        if you don't want to use the easing effects:
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        */
        $('html, body').stop().animate({
           scrollTop: $($anchor.attr('href')).offset().top
        }, 2000,'easeInOutExpo');
   
        event.preventDefault();
    });
    
    $('.frase1').flowtype({
        minimum: 500,
        maximum: 1200,
        minFont: 14,
        maxFont: 35,
        fontRatio: 30
    });
    
   $('.sel-form-sangre').click( function () {
      $('.active').removeClass('active');
      $(this).addClass('active');
    });
    
     $('.form-sel-button').click( function () {
      $('.form-sel-button').removeClass('active-reg');
      $(this).addClass('active-reg');
    });
    
});