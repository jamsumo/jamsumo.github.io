  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCdGLR10XIqc9SzBAIqqxaWrG3ijsKc5vM",
    authDomain: "reservation-site-79335.firebaseapp.com",
    databaseURL: "https://reservation-site-79335.firebaseio.com",
    projectId: "reservation-site-79335",
    storageBucket: "reservation-site-79335.appspot.com",
    messagingSenderId: "765591353685"
  };
 firebase.initializeApp(config);
var database = firebase.database();

//just some fun
$('h1').on('click', function(e){
	e.preventDefault();
	$('h1').slideUp('slow');
})
$('h3').on('click', function(){
	$('h3').fadeToggle();
})
//fun ended


var reservationData = {};

$('.reservation-day li').on('click', function(e){
	reservationData.day = $(this).text();
})

$('.reservations').on('submit',function(e){
	e.preventDefault();
	reservationData.name = $('.reservation-name').val();
})

var reservationsReference = database.ref('reservations');
reservationsReference.push(reservationData);


function getReservations (){
	database.ref('reservations').on('value',function(results){
		var allReservations = results.val();
	})
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 10,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: {lat: 40.8054491, lng: -73.9654415},
    map: map,
    title: 'Monks Café'
  });
}
