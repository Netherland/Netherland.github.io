(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready //
})(jQuery); // end of jQuery name space //


// Start Openingstijden Dagen
$(document).ready(function(){
var d = new Date();
var weekday = new Array(7);
weekday[0] = "zondag";
weekday[1] = "maandag";
weekday[2] = "dinsdag";
weekday[3] = "woensdag";
weekday[4] = "donderdag";
weekday[5] = "vrijdag";
weekday[6] = "zaterdag";

var n = weekday[d.getDay()];

$('#'+n).css('background-color','#4caf50');

});
// End Openingstijden Dagen


// Start Google Maps //
var marker;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 53.225846, lng: 6.561585}
  });

 var newMarker =  marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: {lat: 53.225846, lng: 6.561585,
    title:"De Blauwe Lotus"}
  
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    
  }
}
// End Google Maps //
// Start Disable Scroll On Google Maps //
$('.overlay').click(function () {
    $('#map').css("pointer-events", "auto");
});
// End Disable Scroll On Google Maps //
// Start Smooth Anchor Scroll //
$('.ss').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-150
    }, 500);
    return false;
});
// End Smooth Anchor Scroll //

// Start Fade In All Content Except For Parallax
$(document).ready(function(){
    $(".bigcontent").fadeIn("slow");
});
// End Fade In All Content Except For Parallax

// Start Close SideNav on Click
$(document).ready(function(){
$('.sn').onclick = function() { $('.button-collapse').sideNav('hide');}; ;
});
// End Close SideNav on Click

