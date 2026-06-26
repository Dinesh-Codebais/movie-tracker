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



// =========================
// DARK MODE
// =========================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

});