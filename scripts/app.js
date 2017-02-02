// ANIMATION CHARGEMENT
$(".emptyDiv").animate({"top": "-100%"},1000);
setTimeout('$(".loadingTree").fadeOut(300);',900);

$(document).foundation();

// QUIZZ
var solutions = [true, true, false, true, false, false];
var bonnesReponses = 0;
function checkReponse(i, reponseQuestion) {
  if (reponseQuestion == solutions[i]) {
    $('#bonneReponse'+i).toggleClass('cache');
    bonnesReponses++;
  } else {
    $('#mauvaiseReponse'+i).toggleClass('cache');
  }
  $('#reponse'+i).toggleClass('cache');
  $('#question'+i).toggleClass('cache');
  $('#imageQuizz'+i).toggleClass('cache');
  $('.boutonQuizz'+i).toggleClass('cache');
  if (bonnesReponses < 3) {
    $('#resultatQuizz > p').text(bonnesReponses + " bonnes réponses... Vous n'êtes pas encore un <span class='hashtag'>#CocoAddict</span>");
  }
}

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
  max: 2500,
  title: "Atteignons l'objectif de tweets !",
  titleFontColor: "#001623",
  titleFontFamily: "dosis",
  valueFontColor: "#001623",
  valueFontFamily: "dosis",
  gaugeColor: "#90cbb0",
  levelColors: ["#001623"],
  relativeGaugeSize: true,
  titlePosition: "above"

});
