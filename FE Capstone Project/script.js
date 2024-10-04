const API_KEY = 'eb72e8f8'; // Use only the API key, not the full URL

document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    if (query) {
        fetchMovies(query);
    }
});

async function fetchMovies(query) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.Response === 'True') {
            displayMovies(data.Search);
        } else {
            displayNoResults();
        }
    } catch (error) {
        console.error('Fetch error:', error);
        displayError();
    }
}

function displayMovies(movies) {
    const resultsContainer = document.getElementById('movie-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300'}" alt="${movie.Title} Poster">
            <div class="movie-info">
                <span class="movie-title">${movie.Title}</span>
                <span class="movie-year">${movie.Year}</span>
            </div>
        `;
        movieElement.addEventListener('click', () => fetchMovieDetail(movie.imdbID));
        resultsContainer.appendChild(movieElement);
    });
}

function displayNoResults() {
    const resultsContainer = document.getElementById('movie-results');
    resultsContainer.innerHTML = '<p>No movies found.</p>';
}

function displayError() {
    const resultsContainer = document.getElementById('movie-results');
    resultsContainer.innerHTML = '<p>There was an error fetching the movies. Please try again.</p>';
}

async function fetchMovieDetail(imdbID) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const movieDetail = await response.json();
        displayMovieDetail(movieDetail);
    } catch (error) {
        console.error('Fetch error:', error);
        displayError();
    }
}

function displayMovieDetail(movie) {
    const detailContainer = document.getElementById('movie-detail');
    detailContainer.innerHTML = '';

    if (movie.Response === 'True') {
        detailContainer.style.display = 'block';
        detailContainer.innerHTML = `
            <h2>${movie.Title} (${movie.Year})</h2>
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600'}" alt="${movie.Title} Poster">
            <p><strong>Director:</strong> ${movie.Director}</p>
            <p><strong>Actors:</strong> ${movie.Actors}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <p><strong>Rating:</strong> ${movie.imdbRating}</p>
            <p><strong>Runtime:</strong> ${movie.Runtime}</p>
            <p><strong>Genre:</strong> ${movie.Genre}</p>
            <button id="download-button">Download</button>
        `;

        document.getElementById('download-button').addEventListener('click', () => {
            alert('Download feature is not implemented yet.');
        });
    } else {
        detailContainer.innerHTML = '<p>No details found.</p>';
    }
}
