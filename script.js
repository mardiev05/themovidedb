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

loadMovies(
    "https://api.themoviedb.org/3/movie/popular?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1",
    row
);
loadMovies(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1",
    freeWatch
);

loadMovies(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=2cf8f0300d87595c63b0fe796e506522",
    trandingRow
);

// popular row
let streaming = document.querySelector(".streaming");
streaming.addEventListener("click", () => {
    loadMovies(
        "https://api.themoviedb.org/3/movie/popular?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1",
        row
    );
});

let onTv = document.querySelector(".onTv");
onTv.addEventListener("click", () =>
    loadMovies(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1",
        row
    )
);

let rent = document.querySelector(".rent");
rent.addEventListener("click", () => {
    loadMovies(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=2cf8f0300d87595c63b0fe796e506522",
        row
    );
});

let theaters = document.querySelector(".theaters");
theaters.addEventListener("click", () => {
    loadMovies(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1",
        row
    );
});

//Free to watch row
let movies = document.querySelector(".movies");
movies.addEventListener("click", () => {
    loadMovies(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1",
        freeWatch
    );
});

let tv = document.querySelector(".tv");
tv.addEventListener("click", () => {
    loadMovies(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1",
        freeWatch
    );
});

//Tranding

let today = document.querySelector(".today");
today.addEventListener("click", () => {
    loadMovies(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=2cf8f0300d87595c63b0fe796e506522",
        trandingRow
    );
});

let thisWeek = document.querySelector(".thisWeek");
thisWeek.addEventListener("click", () => {
    loadMovies(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1",
        trandingRow
    );
});

let stream = document.querySelector(".stream");
let trTv = document.querySelector(".trTv");
let trRent = document.querySelector(".trRent");
let trTheaters = document.querySelector(".trTheaters");

async function trailersPart(link, row) {
    let res = await fetch(`${link}`);
    let data = await res.json();

    row.innerHTML = "<div />";

    for (let img of data.results) {
        let card = `
        <div class="trailers__selector-card">
                    <img src="${imgUrl}${img.poster_path}" alt="${img.name}" />
                    <p class="trailers__selector-text">${img.name}</p>
                    <p class="trailers__selector-date">${img.first_air_date}</p>
                    </div>
        `;
        row.innerHTML += card;
    }
}

trailersPart(
    "https://api.themoviedb.org/3/trending/tv/week?api_key=2cf8f0300d87595c63b0fe796e506522",
    trailers
);
stream.addEventListener("click", () => {
    trailersPart(
        "https://api.themoviedb.org/3/trending/tv/week?api_key=2cf8f0300d87595c63b0fe796e506522",
        trailers
    );
});

trTv.addEventListener("click", () => {
    trailersPart(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1",
        trailers
    );
});

trRent.addEventListener("click", () => {
    trailersPart(
        "https://api.themoviedb.org/3/tv/on_the_air?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1",
        trailers
    );
});

trTheaters.addEventListener("click", () => {
    trailersPart(
        "https://api.themoviedb.org/3/tv/airing_today?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1",
        trailers
    );
});

let searchInput = document.querySelector("#main__sec-input");
let subBtn = document.querySelector("#main__sec-btn");
let searchForm = document.querySelector("#search__form");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let value = searchInput.value;

    window.location.assign("http://127.0.0.1:5500/search.html");
    localStorage.setItem("query", value);
});