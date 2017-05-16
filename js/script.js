var link = document.querySelector(".hotel-search");
var popup = document.querySelector(".hotel-reservation");

var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
var adult = popup.querySelector("[name=adult]");
var children = popup.querySelector("[name=children]");

popup.classList.add("hotel-reservation-hidden");

link.addEventListener("click", function(event) {
  event.preventDefault();
  if (popup.classList.contains("hotel-reservation-hidden")) {
    popup.classList.remove("hotel-reservation-hidden");
    popup.classList.remove("hotel-reservation-error");
  } else {
    popup.classList.add("hotel-reservation-hidden");
    arrival.focus();
  }
});

form.addEventListener("submit", function(event) {
  if (!arrival.value || !departure.value || !adult.value || !children.value) {
    event.preventDefault();
    popup.classList.remove("hotel-reservation-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("hotel-reservation-error");
    console.log("Нужно ввести информацию для бронирования");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (!popup.classList.contains("hotel-reservation-hidden")) {
      popup.classList.add("hotel-reservation-hidden");
      popup.classList.remove("hotel-reservation-error");
    }
  }
});

function initMap() {
  var ulura = {lat: 34.75924831, lng: -111.7369896};
  var uluru = {lat: 34.8697395, lng: -111.7609896};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: ulura
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
