console.log("JS Connected");

// =========================
// SEARCH (BASIC)
// =========================

const searchInput = document.getElementById("searchInput");
const movies = document.querySelectorAll(".movie-card");

searchInput.addEventListener("keyup", function () {

    const value = searchInput.value.toLowerCase();

    movies.forEach(function(movie){

        const name = movie.querySelector("h3").textContent.toLowerCase();

        if(name.includes(value)){
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }

    });

});


// =========================
// WATCHLIST (BASIC)
// =========================

let count = 0;

const watchCount = document.getElementById("watchCount");
const buttons = document.querySelectorAll(".watch-btn");

buttons.forEach(function(btn){

    btn.addEventListener("click", function(){

        count = count + 1;

        watchCount.textContent = count;

        alert("Movie added to watchlist ✔");

    });

});


// =========================
// SLIDER (BASIC)
// =========================

const sliderImage = document.getElementById("slider-img");

const images = [
    "images/movie1.jpg",
    "images/movie2.jpg",
    "images/movie3.jpg"
];

let i = 0;

setInterval(function(){

    i = i + 1;

    if(i == images.length){
        i = 0;
    }

    sliderImage.src = images[i];

}, 3000);