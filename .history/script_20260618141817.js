console.log("JavaScript Connected");

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    const searchValue = searchInput.value.toLowerCase();

    const movies = document.querySelectorAll(".movie-card");

    movies.forEach(function(movie) {

        const movieName = movie
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (movieName.includes(searchValue)) {
            movie.style.display = "";
        } else {
            movie.style.display = "none";
        }

    });

});


const sliderImage = document.getElementById("slider-img");

const images = [
    "images/movie1.jpg",
    "images/movie2.jpg",
    "images/movie3.jpg"
];

let currentIndex = 0;

setInterval(function(){

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    sliderImage.src = images[currentIndex];

}, 3000);