let movieData = [];
const movieInput = document.getElementById('movie-search');
const dataList = document.getElementById('movie-list');
const recommendBtn = document.getElementById('recommend-btn');
const resultsGrid = document.getElementById('results-grid');

async function init() {
    try {
        const response = await fetch('movies.json');
        movieData = await response.json();
        movieData.forEach(item => {
            const option = document.createElement('option');
            option.value = item.title;
            dataList.appendChild(option);
        });
    } catch (err) {
        console.error("Failed to load movie list", err);
    }
}

recommendBtn.addEventListener('click', async () => {
    const selectedTitle = movieInput.value;
    const selectedMovie = movieData.find(m => m.title === selectedTitle);

    if (!selectedMovie) {
        alert("Please select a movie from the list.");
        return;
    }

    resultsGrid.innerHTML = `<p class="status-msg">Finding movies similar to ${selectedTitle}...</p>`;

    try {

        const response = await fetch(`http://127.0.0.1:8000/recommend/${selectedMovie.index}`);

        if (!response.ok) throw new Error("API Error");

        const recommendations = await response.json();
        renderMovies(recommendations);
    } catch (err) {
        resultsGrid.innerHTML = `<p class="status-msg" style="color:red;">Error connecting to API. Check CORS settings on your Python server.</p>`;
    }
});


function renderMovies(movies) {
    resultsGrid.innerHTML = "";

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.poster_path}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/200x300?text=No+Poster'">
            <p>${movie.title}</p>
        `;
        resultsGrid.appendChild(card);
    });
}

init();