$(function(){
  $('img').click(function(event) {
    var imge = $(this).attr('src');
    $('body').append('<div id="darkphon"></div><div id="zoomout"><img src="'+imge+'"><div id="closed"><i></i></div></div>'); //чтобы все div грузились
    $('#zoomout').css({
     left: ($(document).width() - $('#zoomout').outerWidth())/2,
            top: ($(window).height() - $('#zoomout').outerHeight())/2 //картинка размещается по центру
   });
    $('#darkphon, #zoomout').fadeIn('fast'); //показывает картинку
  });
  
  $('body').on('click', '#closed, #darkphon', function(event) {
    event.preventDefault();
    $('#darkphon, #zoomout').fadeOut('fast', function() { //скрывает картинку
      $('#closed, #zoomout, #darkphon').remove(); //удаляет 
    });
  });
});
