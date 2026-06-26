
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
const form = document.querySelector(".newsletter-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let email =
    document.getElementById("emailInput").value;

    alert("Subscribed Successfully : " + email);

});
const categories =
document.querySelectorAll(".category-card");

categories.forEach(function(category){

    category.addEventListener("click", function(){

        alert("Category Selected : " +
              category.innerText);

    });

});
const totalMovies =
document.querySelectorAll(".movie-card").length;

console.log("Total Movies : " + totalMovies);
const movieCards =
document.querySelectorAll(".movie-card");

movieCards.forEach(function(card){

    card.addEventListener("mouseenter", function(){

        let movieName =
        card.querySelector("h3").innerText;

        console.log(movieName);

    });

});