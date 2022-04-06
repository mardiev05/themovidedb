let search = document.querySelector("#search__inp");
let row = document.querySelector(".row");
let imgUrl = "https://image.tmdb.org/t/p/w500/";

// header logo
let headerLogo = document.querySelector(".header__links-logo");

headerLogo.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("http://127.0.0.1:5500/main.html");
});
// ===

window.addEventListener("load", (e) => {
    let query = localStorage.getItem("query");
    search.value = query;
    searchMovies(query);
});

search.addEventListener("change", () => {
    let searchValue = search.value;
    console.log(searchValue);
    searchMovies(searchValue);
});

function searchMovies(query) {
    (async() => {
        try {
            let res = await fetch(
                "https://api.themoviedb.org/3/search/movie?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&query=" +
                query +
                "&page=1&include_adult=false"
            );
            let data = await res.json();

            row.innerHTML = "<div />";

            for (let result of data.results) {
                let card = `
                <div class="card">
                <img src="${imgUrl}${result.poster_path}" alt="${result.name}" />
                <div class="card__content">
                    <h3 class="card__title">${result.title}</h3>
                    <p class="card__date">${result.release_date}</p>
                    <p class="card__text">${result.overview}</p>
                </div>
            </div>
                `;
                row.innerHTML += card;
            }
        } catch (err) {
            console.log(err);
        }
    })();
}