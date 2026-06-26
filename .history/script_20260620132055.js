console.log("JS Connected");

// =========================
// MOVIE DATA
// =========================

const movieData = [
    {
        title: "Interstellar",
        rating: 8.7
    },
    {
        title: "Oppenheimer",
        rating: 8.5
    },
    {
        title: "Avatar",
        rating: 8.1
    }
];

console.log("Movie Tracker JS Connected!");
console.log(movieData);

console.log(movieData[0].title);
console.log(movieData[1].rating);

movieData.forEach(function(movie){
    console.log(movie.title);
});


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
// IMAGE SLIDER
// =========================
const images = [
    "images/movie1.jpg",
    "images/movie2.jpg",
    "images/movie3.jpg"
];

const leftImg = document.getElementById("left-img");
const centerImg = document.getElementById("center-img");
const rightImg = document.getElementById("right-img");

let index = 0;

function updateCarousel() {

    leftImg.src =
        images[(index + images.length - 1) % images.length];

    centerImg.src =
        images[index];

    rightImg.src =
        images[(index + 1) % images.length];
}

setInterval(() => {
    index = (index + 1) % images.length;
    updateCarousel();
}, 3000);

updateCarousel();

// =========================
// WATCHLIST
// =========================

let savedMovies =
    JSON.parse(localStorage.getItem("watchlist")) || [];

const watchButtons =
    document.querySelectorAll(".watch-btn");

const watchList =
    document.getElementById("watchlistMovies");

const watchCount =
    document.getElementById("watchCount");

function renderWatchlist() {

    if (!watchList) return;

    watchList.innerHTML = "";

    savedMovies.forEach(function (movie, index) {

        const li = document.createElement("li");

        li.innerHTML = `
            ${movie}
            <button onclick="removeMovie(${index})">
                ❌
            </button>
        `;

        watchList.appendChild(li);

    });

    if (watchCount) {
        watchCount.textContent = savedMovies.length;
    }
}

function removeMovie(index) {

    savedMovies.splice(index, 1);

    localStorage.setItem(
        "watchlist",
        JSON.stringify(savedMovies)
    );

    renderWatchlist();
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

            alert(movieName + " added to Watchlist!");
        }
        else {

            alert("Movie already added!");
        }

    });

});




// =========================
// TOTAL MOVIES COUNTER
// =========================

const totalMovies =
    document.getElementById("totalMovies");

if (totalMovies) {

    totalMovies.textContent =
        movies.length;
}

// =========================
// CHECK LOGIN STATUS
// =========================

const logoutBtn = document.getElementById("logoutBtn");

const loggedUser = localStorage.getItem("name");

if (loggedUser) {

    if(logoutBtn){
        logoutBtn.style.display = "block";
    }
}


function logout() {

    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    alert("Logged Out Successfully");

    window.location.reload();
}
function signup(){

    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Account Created");

    window.location.href = "index.html";
}
function login(){

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");

    if(email === savedEmail && password === savedPassword){

        alert("Login Successful");

        window.location.href = "index.html";

    }else{

        alert("Wrong Email or Password");
    }
}

function showLoginPassword() {

    let password =
        document.getElementById("loginPassword");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

function showSignupPassword() {

    let password =
        document.getElementById("signupPassword");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}
const movies = [
  { img: "images/movie1.jpg", name: "Movie 1" },
  { img: "images/movie2.jpg", name: "Movie 2" },
  { img: "images/movie3.jpg", name: "Movie 3" }
  { img: "images/movie3.jpg", name: "Movie 3" }
  { img: "images/movie4.jpg", name: "Movie 3" }
  { img: "images/movie3.jpg", name: "Movie 3" }
  { img: "images/movie3.jpg", name: "Movie 3" }
  { img: "images/movie3.jpg", name: "Movie 3" }
  { img: "images/movie3.jpg", name: "Movie 3" }
  { img: "images/movie3.jpg", name: "Movie 3" }

  
  








];