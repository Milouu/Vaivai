/* Animation cocotier
$(".emptyDiv").animate({"margin-top": "-=100vh"},1000);
setTimeout('$(".loadingTree").fadeOut(600);',1000);
*/

$(document).foundation();

var isSlickLoaded = (typeof $.fn.Slick !== 'undefined');
console.log(isSlickLoaded);

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
    autoplay : true,
    autoplaySpeed : 2500,
    dots : true,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
});
