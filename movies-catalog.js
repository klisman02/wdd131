// Movie list
const movies = [
    { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, poster: "images/inception.webp" },
    { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6, poster: "images/interstellar.webp" },
    { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0, poster: "images/dark-night.jpg" },
    { title: "Parasite", year: 2019, genre: "Drama", rating: 8.6, poster: "images/parasite.jpg" },
    { title: "Get Out", year: 2017, genre: "Horror", rating: 7.7, poster: "images/get-out.jpg" },
    { title: "The Matrix", year: 1999, genre: "Sci-Fi", rating: 8.7, poster: "images/matrix.jpg" },
    { title: "Pulp Fiction", year: 1994, genre: "Drama", rating: 8.9, poster: "images/pulp-fiction.jpg" },
    { title: "Forrest Gump", year: 1994, genre: "Drama", rating: 8.8, poster: "images/forrest-gump.jpg" },
    { title: "Gladiator", year: 2000, genre: "Action", rating: 8.5, poster: "images/gladiator.jpg" },
    { title: "The Shawshank Redemption", year: 1994, genre: "Drama", rating: 9.3, poster: "images/shawshank.jpg" }
];

// DOM elements
const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("search");
const genreSelect = document.getElementById("genre");
const yearSelect = document.getElementById("year");

// Year ranges for filtering decades
const yearRanges = {
    "2020s": [2020, 2029],
    "2010s": [2010, 2019],
    "2000s": [2000, 2009],
    "1990s": [1990, 1999],
    "1980s": [1980, 1989],
};

// Function to display movies
function displayMovies(list) {
    movieGrid.innerHTML = "";
    if (list.length === 0) {
        movieGrid.innerHTML = "<p>No movies found.</p>";
        return;
    }

    list.forEach(movie => {
        const card = document.createElement("article");
        card.classList.add("movie-card");
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title} Poster" loading="lazy">
            <h2>${movie.title}</h2>
            <p class="year">${movie.year}</p>
            <p class="rating">⭐ ${movie.rating}</p>
        `;
        movieGrid.appendChild(card);
    });
}

// Function to filter movies
function filterMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedGenre = genreSelect.value;
    const selectedYear = yearSelect.value;

    const filtered = movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm);
        const matchesGenre = selectedGenre ? movie.genre === selectedGenre : true;
        const matchesYear = selectedYear
            ? (movie.year >= yearRanges[selectedYear][0] && movie.year <= yearRanges[selectedYear][1])
            : true;

        return matchesSearch && matchesGenre && matchesYear;
    });

    displayMovies(filtered);
}

// Debounce function to limit input event firing
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Adds unique genre and year options to the selects
function populateFilters() {
    // Add genre options
    const genres = [...new Set(movies.map(movie => movie.genre))];
    genres.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre;
        option.textContent = genre.charAt(0).toUpperCase() + genre.slice(1);
        genreSelect.appendChild(option);
    });

    // Add year (decade) options
    Object.keys(yearRanges).forEach(decade => {
        const option = document.createElement("option");
        option.value = decade;
        option.textContent = decade;
        yearSelect.appendChild(option);
    });
}

// Event listeners
searchInput.addEventListener("input", debounce(filterMovies, 300));
genreSelect.addEventListener("change", () => {
    localStorage.setItem('lastGenre', genreSelect.value);
    filterMovies();
});
yearSelect.addEventListener("change", filterMovies);

// Initialization on page load
window.addEventListener('load', () => {
    populateFilters();
    const lastGenre = localStorage.getItem('lastGenre');
    if (lastGenre) {
        genreSelect.value = lastGenre;
    }
    filterMovies();
});