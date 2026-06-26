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

let watchCount = 0;

const watchButtons = document.querySelectorAll(".watch-btn");
const watchCountText = document.getElementById("watchCount");
const watchList = document.getElementById("watchlistMovies");

watchButtons.forEach(function(btn){

    btn.addEventListener("click", function(){

        const movieCard = btn.parentElement;
        const movieName = movieCard.querySelector("h3").textContent;

        // add to list
        const li = document.createElement("li");
        li.textContent = movieName;
        watchList.appendChild(li);

        // update count
        watchCount++;
        watchCountText.textContent = watchCount;

        alert(movieName + " added to watchlist!");
    });

});


// =========================
// DARK MODE
// =========================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

});