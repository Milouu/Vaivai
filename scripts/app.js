/* Animation cocotier
$(".emptyDiv").animate({"margin-top": "-=100vh"},1000);
setTimeout('$(".loadingTree").fadeOut(600);',1000);
*/

$(document).foundation();

$(document).ready(function(){
  $(function(){
    var x = 0;
    setInterval(function(){
      x-=1;
      $('#header').css('background-position', x + 'px 0');
    }, 10);
  });

  $('.monSlider').slick({
    autoplay : true,
    autoplaySpeed : 2500,
    dots : true
  });
});
