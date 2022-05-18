//imdb api key
const imdbKey = 'k_wgnnz7cy';

// cosnt movieTitle = document.queryselector

// fetch imdb for title key
const searchMovie = function (movieTitle) {
    apiUrl = "https://imdb-api.com/en/API/Search/" + imdbKey + "/" + 'inception';


    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            return data.results[0].id;
            console.log(data.results[0].id);
        })
    })
}

// const titleId = searchMovie(movieTitle);

// const movieInfo = function (titleId) {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
//             'X-RapidAPI-Key': 'e2707c2a80msh09017139922bd35p15039ajsn117faeae8a36'
//         }
//     };
    
//     fetch('https://movie-database-alternative.p.rapidapi.com/?r=json&i=' + titleId +  options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }
