var buy = document.querySelectorAll(".price");
var card = document.querySelector(".added");
var cardClose = document.querySelector(".added-btn-close");


buy[0].addEventListener("click", function(event) {
    event.preventDefault();
    card.classList.add("popups-show");
});
buy[1].addEventListener("click", function(event) {
    event.preventDefault();
    card.classList.add("popups-show");
});
buy[2].addEventListener("click", function(event) {
    event.preventDefault();
    card.classList.add("popups-show");
});
buy[3].addEventListener("click", function(event) {
    event.preventDefault();
    card.classList.add("popups-show");
});
buy[4].addEventListener("click", function(event) {
    event.preventDefault();
    card.classList.add("popups-show");
});
buy[5].addEventListener("click", function(event) {
    event.preventDefault();
    card.classList.add("popups-show");
});
buy[6].addEventListener("click", function(event) {
    event.preventDefault();
    card.classList.add("popups-show");
});
buy[7].addEventListener("click", function(event) {
    event.preventDefault();
    card.classList.add("popups-show");
});
buy[8].addEventListener("click", function(event) {
    event.preventDefault();
    card.classList.add("popups-show");
});




cardClose.addEventListener("click", function(event) {
     event.preventDefault();
     card.classList.remove("popups-show");
});
