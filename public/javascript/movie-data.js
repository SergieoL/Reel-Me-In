//imdb api key
const imdbKey = 'k_wgnnz7cy';
const movieTitle = document.getElementById('movieTitle').innerHTML;

// fetch imdb for movie data
const searchMovie = function (movieTitle) {
    apiUrl = "https://imdb-api.com/en/API/Search/" + imdbKey + "/" + movieTitle;


    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            movieData = data.results[0];
            console.log('success');
            console.log(movieData);

            document.getElementById("moviePoster").innerHTML = `<img src="${movieData.image}" width=300px>`;
            document.getElementById("movieYear").innerHTML = movieData.description;
            

        })
    })
}
searchMovie(movieTitle);
