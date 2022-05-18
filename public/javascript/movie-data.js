//imdb api key
const imdbKey = 'k_wgnnz7cy';

// fetch imdb for movie data
const searchMovie = function (movieTitle) {
    apiUrl = "https://imdb-api.com/en/API/Search/" + imdbKey + "/" + 'inception';


    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            return data.results[0];
        })
    })
}



const addMovieData = function() {

    // get move title for search from 'single
    var movieTitle = document.getElementById('movieTitle').value.trim();

    movieData = searchMovie(movieTitle);

    // Adding html code to review page
    document.getElementById("movie-poster").innerHTML = `<img src="${movieData.image}" width=300px>`
    document.getElementById("year").innerHTML = movieData.description;

}

addMovieData();