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
