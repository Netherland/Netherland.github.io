//Start Document Ready
$(document).ready(function () {
    checkBrowser();
    setColorAccordingToTime();
    $('.toast').addClass('z-depth-3');
//End Document Ready

//Start Functions

//End Functions

//Start Filter List
    var options = {
  valueNames: [ 'nummer', 'naam', 'catogorie', 'prijs' ]
};

var menukaart = new List('menukaart', options);
});
//End Filter List
//Start Internet Explorer Fix
function checkBrowser(){  
    if(isIE() && isIE () < 10) {
        alert('Deze pagina werkt niet in uw huidige browser\nU wordt nu doorgestuurd naar www.bestellen.blauwe-lotus.nl.');
        window.location = "http://bestellen.blauwe-lotus.nl";
    }
    else {
        setup();
        $(".bigcontent").fadeIn("slow");
    }
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

function setup(){
    $('.parallax').parallax();
    $('.button-collapse').sideNav({
        menuWidth: 240, 
        edge: 'left', 
        closeOnClick: true 
    }); 
}


//End Internet Explorer Fix

// Start Openingstijden Dagen
function setColorAccordingToTime() {
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

    var currentTime = d.getHours() + '' + d.getMinutes();

    var openingTimeHTML = $('#' + n + '-tijden')[0].innerHTML;

    var openingTime = openingTimeHTML.substring(0, 2) + openingTimeHTML.substring(3, 5);
    var closingTime = openingTimeHTML.substring(8, 10) + openingTimeHTML.substring(11);

    var isOpen = false;

    if (currentTime >= openingTime && currentTime <= closingTime) {
        isOpen = true;
    }

    if (isOpen) {
        $('#' + n).css('background-color', 'rgba(76,175,80,0.5)');
        showOpenStatusToast('De Blauwe Lotus is nu open!', 7500);
        $(".geopend").show();
        $(".gesloten").hide();
    } else {
        $('#' + n).css('background-color', 'rgba(244,67,54,0.5)');
        showOpenStatusToast('De Blauwe Lotus is momenteel gesloten', 7500);
        $('.toast').addClass('closed');
        $(".geopend").hide();
        $(".gesloten").show();
    }
}

function showOpenStatusToast(text, duration) {
    Materialize.toast(text, duration);
}
// End Openingstijden Dagen


// Start Google Maps //
var marker;
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: {lat: 53.225846, lng: 6.561585}
    });

    var newMarker = marker = new google.maps.Marker({
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: {lat: 53.225846, lng: 6.561585,
            title: "De Blauwe Lotus"}

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
$('.ss').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 150
    }, 500);
    return false;
});
// End Smooth Anchor Scroll //

// Start Close SideNav on Click
function closeSideNav() {
    setTimeout(function(){ $('.button-collapse').sideNav('hide'); }, 500);
       
}
// End Close SideNav on Click