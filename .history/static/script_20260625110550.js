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

if(searchInput){

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

}


// =========================
// IMAGE SLIDER
// =========================
const images = [
    "/static/images/movie1.jpg",
    "/static/images/movie2.jpg",
    "/static/images/movie3.jpg",
    "/static/images/movie4.jpg",
    "/static/images/movie5.jpg",
    "/static/images/movie6.jpg",
    "/static/images/movie7.jpg",
    "/static/images/movie8.jpg",
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
// =========================
// CHECK LOGIN UI STATUS
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const logoutBtn = document.getElementById("logoutBtn");
    const userInfo = document.getElementById("userInfo");
    const loginNav = document.getElementById("loginNav");
    const signupNav = document.getElementById("signupNav");
    const accountMenu = document.getElementById("accountMenu");

    const currentUser = localStorage.getItem("name");

    if (currentUser) {

        if (userInfo) userInfo.innerText = currentUser;

        if (accountMenu) accountMenu.style.display = "block";

        if (loginNav) loginNav.style.display = "none";

        if (signupNav) signupNav.style.display = "none";

        if (logoutBtn) logoutBtn.style.display = "block";

    } else {

        if (accountMenu) accountMenu.style.display = "none";

        if (logoutBtn) logoutBtn.style.display = "none";
    }
});


// =========================
// LOGOUT
// =========================

function logout() {

    localStorage.removeItem("name");

    location.replace("/");
}


// =========================
// SIGNUP
// =========================

async function signup() {

    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    let response = await fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
    });

    let data = await response.json();

    alert(data.message);

    window.location.href = "/login";
}


// =========================
// LOGIN
// =========================

async function login() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let response = await fetch("/login-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    let data = await response.json();

    if (data.success) {

        localStorage.setItem("name", data.name);

        alert("Login Successful");

        window.location.href = "/";

    } else {
        alert(data.message);
    }
}


// =========================
// SHOW PASSWORD (SIGNUP)
// =========================

function showSignupPassword() {

    let password = document.getElementById("signupPassword");

    password.type = (password.type === "password") ? "text" : "password";
}


// =========================
// SHOW PASSWORD (LOGIN)
// =========================

function showLoginPassword() {

    let password = document.getElementById("loginPassword");

    password.type = (password.type === "password") ? "text" : "password";
}

// =====================
// Add movie
// ======================
function addMovie() {

    let title = document.getElementById("movieTitle").value;
    let rating = document.getElementById("movieRating").value;

    fetch("/movies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            rating: rating
        })
    })
    .then(response => response.json())
    .then(data => {

        alert(data.message);

        document.getElementById("movieTitle").value = "";
        document.getElementById("movieRating").value = "";
    })
    .catch(error => {
        console.log(error);
    });
}