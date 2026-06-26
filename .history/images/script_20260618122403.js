const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    let searchValue = searchInput.value.toLowerCase();

    let movies = document.querySelectorAll(".movie-card");

    movies.forEach(function(movie){

        let movieName = movie.querySelector("h3").innerText.toLowerCase();

        if(movieName.includes(searchValue)){
            movie.style.display = "block";
        }else{
            movie.style.display = "none";
        }

    });

});

const exploreBtn = document.querySelector(".btn");

exploreBtn.addEventListener("click", function(){

    console.log("User clicked Explore Movies");

});