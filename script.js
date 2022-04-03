const apiKey = "2cf8f0300d87595c63b0fe796e506522";
let moviesUrl = "https://api.themoviedb.org/3/movie/";
let imgUrl = "https://image.tmdb.org/t/p/w500/";
let row = document.querySelector(".popular__selector-row");
let freeWatch = document.querySelector(".freeWatch__selector-row");
let trailers = document.querySelector(".trailers__selector-row");
let trandingRow = document.querySelector(".tranding__selector-row");

async function loadMovies(endpoint, container) {
    let res = await fetch(`${endpoint}`);
    let data = await res.json();

    container.innerHTML = "<div />";

    for (let img of data.results) {
        let cards = `
        <div class="popular__selector-card">
            <img src="${imgUrl}${img.poster_path}" alt="${img.name}"/>
            <p class="popular__selector-text">${img.title}</p>
            <p class="popular__selector-date">${img.release_date}</p>
        </div>
        `;
        container.innerHTML += cards;
    }
}

loadMovies('https://api.themoviedb.org/3/movie/popular?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1', row);
loadMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1', freeWatch);
loadMovies('https://api.themoviedb.org/3/trending/movie/day?api_key=2cf8f0300d87595c63b0fe796e506522', trailers);
loadMovies('https://api.themoviedb.org/3/trending/tv/week?api_key=2cf8f0300d87595c63b0fe796e506522', trandingRow);

let onTv = document.querySelector(".onTv");

onTv.addEventListener("click",
    () => loadMovies(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1',
        row
    )
);

let searchInput = document.querySelector("#main__sec-input");
let subBtn = document.querySelector("#main__sec-btn");
