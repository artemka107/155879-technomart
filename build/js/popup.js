var popup = document.querySelector(".feedback");
var btnShow= document.querySelector(".popup-btn");
var btnClose= document.querySelector(".popup-close-btn");
var mapShow = document.querySelector(".map-popup-show");
var mapClose = document.querySelector(".map-btn-close");
var map = document.querySelector(".map-content");


btnShow.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-show");
});

btnClose.addEventListener("click", function(event) {
     event.preventDefault();
     popup.classList.remove("modal-show");
});

mapShow.addEventListener("click", function(event) {
    event.preventDefault();
    map.classList.add("popups-show");
});

mapClose.addEventListener("click", function(event) {
     event.preventDefault();
     map.classList.remove("popups-show");
});
