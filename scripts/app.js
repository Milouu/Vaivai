
$(".emptyDiv").animate({"top": "-100%"},1000);
setTimeout('$(".loadingTree").fadeOut(300);',700);


$(document).foundation();

$(document).ready(function(){
  $(function(){
    var x = 0;
    setInterval(function(){
      x-=1;
      $('#header').css('background-position', x + 'px 0');
    }, 14);
  });
  $('.sliderLieux').slick({
    autoplay : true,
    autoplaySpeed : 3000,
    dots : true
  });
  $('.sliderProduits').slick({
    autoplay : true,
    autoplaySpeed : 2500,
    dots : true,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
});

var isSlickLoaded = (typeof $.fn.Slick !== 'undefined');
console.log(isSlickLoaded);
