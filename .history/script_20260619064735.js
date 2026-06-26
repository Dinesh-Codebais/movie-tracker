
console.log("Movie Tracker JS Connected!");

// =========================
// SEARCH
// =========================

const searchInput = document.getElementById("searchInput");
const movies = document.querySelectorAll(".movie-card");

searchInput.addEventListener("keyup", function () {

    const value = searchInput.value.toLowerCase();

    movies.forEach(function (movie) {

        const movieName = movie
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (movieName.includes(value)) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }

    });

});


// =========================
// SLIDER
// =========================

const sliderImage = document.getElementById("slider-img");

const images = [
    "images/movie1.jpg",
    "images/movie2.jpg",
    "images/movie3.jpg"
];

let currentIndex = 0;

setInterval(function () {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    sliderImage.src = images[currentIndex];

}, 3000);


// =========================
// WATCHLIST + LOCAL STORAGE
// =========================

let savedMovies =
    JSON.parse(localStorage.getItem("watchlist"))
    || [];

const watchButtons =
    document.querySelectorAll(".watch-btn");

const watchList =
    document.getElementById("watchlistMovies");

const watchCount =
    document.getElementById("watchCount");

function renderWatchlist() {

    watchList.innerHTML = "";

    savedMovies.forEach(function (movie) {

        const li =
            document.createElement("li");

        li.textContent = movie;

        watchList.appendChild(li);

    });

    watchCount.textContent =
        savedMovies.length;
}

renderWatchlist();

watchButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const movieCard =
            button.parentElement;

        const movieName =
            movieCard.querySelector("h3")
            .textContent;

        if (!savedMovies.includes(movieName)) {

            savedMovies.push(movieName);

            localStorage.setItem(
                "watchlist",
                JSON.stringify(savedMovies)
            );

            renderWatchlist();

            alert(movieName + " added!");
        }

    });

});


// =========================
// DARK MODE
// =========================

const darkModeBtn =
    document.getElementById("darkModeBtn");

darkModeBtn.addEventListener(
    "click",
    function () {

        document.body.classList.toggle("dark");

    }
);