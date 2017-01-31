$(document).foundation();

$(document).ready(function(){
  $(function(){
    var x = 0;
    setInterval(function(){
      x-=0.5;
      $('#header').css('background-position', x + 'px 0');
    }, 10);
  });

  $('.monSlider').slick({
    autoplay : true,
    autoplaySpeed : 1500,
    dots : true
  });
});
