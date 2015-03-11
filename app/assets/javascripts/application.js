// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function (){
  var myLatlng = new google.maps.LatLng(29.960324, -90.065602)

   function initialize() {
     var mapOptions = {
     center:myLatlng,
     zoom: 8,
     scrollwheel: false
     };

     var map = new google.maps.Map(document.getElementById('map-canvas'),
               mapOptions);

     var marker = new google.maps.Marker({
     position: myLatlng,
     map: map,
     title: 'Hello Nola!'
     });

   }


   google.maps.event.addDomListener(window, 'load', initialize);
});