$(document).foundation();

$(document).ready(function(){
  $(function(){
    var x = 0;
    setInterval(function(){
      x-=1;
      $('#header').css('background-position', x + 'px 0');
    }, 10);
  });

  $('.sliderLieux').slick({
    autoplay : true,
    autoplaySpeed : 2500,
    dots : true
  });
});
