console.log("Movie Tracker JS Connected!");

// =========================
// SEARCH FUNCTION
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
// WATCHLIST FUNCTION
// =========================

let savedMovies = JSON.parse(localStorage.getItem("watchlist")) || [];

const watchList = document.getElementById("watchlistMovies");
const watchCountText = document.getElementById("watchCount");

// show saved list
function renderWatchlist() {
    watchList.innerHTML = "";

    savedMovies.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = movie;
        watchList.appendChild(li);
    });

    watchCountText.textContent = savedMovies.length;
}

renderWatchlist();

const watchButtons = document.querySelectorAll(".watch-btn");

watchButtons.forEach(btn => {
    btn.addEventListener("click", function () {

        const movieName = btn.parentElement.querySelector("h3").textContent;

        if (!savedMovies.includes(movieName)) {
            savedMovies.push(movieName);
            localStorage.setItem("watchlist", JSON.stringify(savedMovies));
        }

        renderWatchlist();
        alert(movieName + " added!");
    });
});

// =========================
// DARK MODE
// =========================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

});