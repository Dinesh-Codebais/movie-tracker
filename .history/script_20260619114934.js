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

const sliderImage = document.getElementById("slider-img");

if (sliderImage) {

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
}


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
// DARK MODE
// =========================

const darkModeBtn =
    document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener(
        "click",
        function () {

            document.body.classList.toggle("dark");

        }
    );
}


// =========================
// TOTAL MOVIES COUNTER
// =========================

const totalMovies =
    document.getElementById("totalMovies");

if (totalMovies) {

    totalMovies.textContent =
        movies.length;
}
// CHECK LOGIN STATUS

const userInfo = document.getElementById("userInfo");
const userName = document.getElementById("userName");
const logoutBtn = document.getElementById("logoutBtn");

const loggedUser = localStorage.getItem("name");

if (loggedUser) {

    if(userInfo) userInfo.style.display = "block";
    if(userName) userName.textContent = loggedUser;
    if(logoutBtn) logoutBtn.style.display = "block";
}

// LOGOUT

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