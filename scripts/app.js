$(document).foundation();

$(document).ready(function(){
  $(function(){
    var x = 0;
    setInterval(function(){
      x-=1;
      $('#header').css('background-position', x + 'px 0');
    }, 15);
  });
  $('.sliderLieux').slick({
    autoplay : true,
    autoplaySpeed : 3000,
    dots : true
  });
  $('.sliderProduits').slick({
    autoplay : false,
    autoplaySpeed : 2500,
    dots : true,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
});
