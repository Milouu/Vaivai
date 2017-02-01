// ANIMATIONS CHARGEMENT
$(".emptyDiv").animate({"top": "-100%"},1000);
setTimeout('$(".loadingTree").fadeOut(300);',700);

$(document).foundation();

$(document).ready(function(){
  // DÉFILEMENT HEADER
  $(function(){
    var x = 0;
    setInterval(function(){
      x-=1;
      $('#header').css('background-position', x + 'px 0');
    }, 14);
  });
  // SLIDERS
  $('.sliderLieux').slick({
    autoplay : true,
    autoplaySpeed : 3000,
    dots : true
  });
  $('.sliderProduits').slick({
    autoplay : true,
    autoplaySpeed : 2500,
    dots : true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
  // BOUTON TWITTER
  window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };
    return t;
  }(document, "script", "twitter-wjs"));
});

// JAUGE
var g1 = new JustGage({
  id: "g1",
  value: Math.floor(Math.random()*1000),
  min: 0,
  max: 1000,
  title: "Aidez nous à atteindre l'objectif de tweet !",
  titleFontColor: "#001623",
  titleFontFamily: "dosis",
  valueFontColor: "#001623",
  valueFontFamily: "dosis",
  gaugeColor: "#90cbb0",
  levelColors: ["#001623"],
  relativeGaugeSize: true,
  titlePosition: "above"

});