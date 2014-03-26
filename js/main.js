var map = L.mapbox.map('map', 'examples.map-9ijuk24y')
    .setView([38, -122], 10);

var $facesList = $('.faces ul li');

$(document).ready(function() {
  $facesList.height($facesList.width());
});

$(window).resize(function() {
  $facesList.height($facesList.width());
});

$('.sign-here a').click(function(e) {
  e.preventDefault()
  $(this).hide();
  $('.signup-form').show().addClass('animated fadeInDown');
});
