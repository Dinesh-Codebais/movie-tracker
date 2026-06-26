console.log("JS Connected");


// =========================
// SEARCH FEATURE
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
// WATCHLIST FEATURE (FINAL FIXED)
// =========================
let watchlist = [];

const watchCount = document.getElementById("watchCount");

function updateWatchButtons() {

    const buttons = document.querySelectorAll(".watch-btn");

    buttons.forEach(function(button){

        button.onclick = function(){

            const movieCard = button.closest(".movie-card");
            const movieName = movieCard.querySelector("h3").textContent;

            watchlist.push(movieName);

            watchCount.textContent = watchlist.length;

            console.log("Watchlist:", watchlist);
        };

    });

}

// initial buttons
updateWatchButtons();


// =========================
// SLIDER
// =========================
const sliderImage = document.getElementById("slider-img");

const images = [
    "images/movie1.jpg",
    "images/movie2.jpg",
    "images/movie3.jpg"
];

let i = 0;

setInterval(function(){

    i++;

    if(i === images.length){
        i = 0;
    }

    if(sliderImage){
        sliderImage.src = images[i];
    }

}, 3000);


// =========================
// ADD MOVIE FEATURE
// =========================
const movieInput = document.getElementById("movieNameInput");
const addBtn = document.getElementById("addMovieBtn");
const movieGrid = document.querySelector(".movie-grid");

if(addBtn){

    addBtn.addEventListener("click", function () {

        const name = movieInput.value.trim();

        if(name === ""){
            alert("Please enter movie name");
            return;
        }

        const div = document.createElement("div");
        div.classList.add("movie-card");

        div.innerHTML = `
            <img src="images/movie1.jpg" alt="movie">
            <h3>${name}</h3>
            <p>⭐ New</p>
            <button class="watch-btn">Add To Watchlist</button>
        `;

        movieGrid.appendChild(div);

        movieInput.value = "";

        updateWatchButtons(); // important fix

        alert("Movie Added ✔");

    });

}


// =========================
// DARK MODE (optional safe)
// =========================
const darkBtn = document.getElementById("darkModeBtn");

if(darkBtn){
    darkBtn.addEventListener("click", function(){
        document.body.classList.toggle("dark");
    });
}