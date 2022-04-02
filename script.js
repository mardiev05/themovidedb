const apiKey = "2cf8f0300d87595c63b0fe796e506522";
let imgUrl = "https://image.tmdb.org/t/p/w500/";
let row = document.querySelector(".popular__selector-row");
let freeWatch = document.querySelector(".freeWatch__selector-row");
let trailers = document.querySelector(".trailers__selector-row");
let trandingRow = document.querySelector(".tranding__selector-row");

(async function() {
    try {
        let movies = await fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1"
        );
        let resMovies = await movies.json();

        // Popular
        for (let movie of resMovies.results) {
            let card = `
            <div class="popular__selector-card">
            <img
            src="${imgUrl}${movie.poster_path}" alt="${movie.name}"/>
            <p class="popular__selector-text">${movie.title}</p>
            <p class="popular__selector-date">${movie.title}</p>
            </div>
            `;
            row.innerHTML += card;
        }

        // Top Rated
        let rated = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1"
        );
        let data = await rated.json();

        for (let top of data.results) {
            let cards = `
                    <div class="freeWatch__selector-card">
                    <img src="${imgUrl}${top.poster_path}" alt="${top.name}" />
                    <p class="freeWatch__selector-text">
                        ${top.title}
                    </p>
                    <p class="freeWatch__selector-date">${top.title}</p>
                </div>`;
            freeWatch.innerHTML += cards;
        }

        // latest
        let latest = await fetch(
            "https://api.themoviedb.org/3/trending/movie/day?api_key=2cf8f0300d87595c63b0fe796e506522"
        );
        let resLatest = await latest.json();

        for (let letests of resLatest.results) {
            let cards = `
                <div class="trailers__selector-card">
                    <img src="${imgUrl}${letests.poster_path}" alt="${letests.name}" />
                    <p class="trailers__selector-text">${letests.title}</p>
                    <p class="trailers__selector-date">${letests.title}</p>
                </div>
                `;
            trailers.innerHTML += cards;
        }

        //tranding
        let tranding = await fetch(
            "https://api.themoviedb.org/3/trending/tv/week?api_key=2cf8f0300d87595c63b0fe796e506522"
        );
        let resTranding = await tranding.json();

        for (let trand of resTranding.results) {
            let cards = `
            <div class="tranding__selector-card">
            <img src="${imgUrl}${trand.poster_path}" alt="${trand.name}" />
            <p class="tranding__selector-text">${trand.title}</p>
            <p class="tranding__selector-date">${trand.title}</p>
        </div>
            `;
            trandingRow.innerHTML += cards;
        }
    } catch (err) {
        console.log(err);
    }
})();
let onTv = document.querySelector(".onTv");

onTv.addEventListener("click", function onTv() {
    (async function() {
        let res = await fetch(
            "https://api.themoviedb.org/3/tv/on_the_air?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1"
        );
        let data = await res.json();

        for (let img of data.results) {
            let cards = `
            <div class="popular__selector-card">
            <img
            src="${imgUrl}${img.poster_path}" alt="${img.name}"/>
            <p class="popular__selector-text">${img.title}</p>
            <p class="popular__selector-date">${img.title}</p>
            </div>
            `;
            row.innerHTML += cards;
        }

        console.log(data);
    })();
});