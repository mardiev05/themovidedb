// const apiKey = "2cf8f0300d87595c63b0fe796e506522";
// let imgUrl = "https://image.tmdb.org/t/p/w500/";
// let row = document.querySelector(".popular__selector-row");
// let freeWatch = document.querySelector(".freeWatch__selector-row");
// let trailers = document.querySelector(".trailers__selector-row");
// let trandingRow = document.querySelector(".tranding__selector-row");

// (async function() {
//     try {
//         // Popular
//         let movies = await fetch(
//             "https://api.themoviedb.org/3/movie/popular?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1"
//         );
//         let resMovies = await movies.json();

//         for (let movie of resMovies.results) {
//             let card = `
//             <div class="popular__selector-card">
//             <img
//             src="${imgUrl}${movie.poster_path}" alt="${movie.name}"/>
//             <p class="popular__selector-text">${movie.title}</p>
//             <p class="popular__selector-date">${movie.release_date}</p>
//             </div>
//             `;
//             row.innerHTML += card;
//         }

//         // Top Rated
//         let rated = await fetch(
//             "https://api.themoviedb.org/3/movie/top_rated?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1"
//         );
//         let data = await rated.json();

//         for (let top of data.results) {
//             let cards = `
//                     <div class="freeWatch__selector-card">
//                     <img src="${imgUrl}${top.poster_path}" alt="${top.name}" />
//                     <p class="freeWatch__selector-text">
//                         ${top.title}
//                     </p>
//                     <p class="freeWatch__selector-date">${top.release_date}</p>
//                 </div>`;
//             freeWatch.innerHTML += cards;
//         }

//         // latest
//         let latest = await fetch(
//             "https://api.themoviedb.org/3/trending/movie/day?api_key=2cf8f0300d87595c63b0fe796e506522"
//         );
//         let resLatest = await latest.json();

//         for (let letests of resLatest.results) {
//             let cards = `
//                 <div class="trailers__selector-card">
//                     <img src="${imgUrl}${letests.poster_path}" alt="${letests.name}" />
//                     <p class="trailers__selector-text">${letests.title}</p>
//                     <p class="trailers__selector-date">${letests.release_date}</p>
//                 </div>
//                 `;
//             trailers.innerHTML += cards;
//         }

//         //tranding
//         let tranding = await fetch(
//             "https://api.themoviedb.org/3/trending/tv/week?api_key=2cf8f0300d87595c63b0fe796e506522"
//         );
//         let resTranding = await tranding.json();

//         for (let trand of resTranding.results) {
//             let cards = `
//             <div class="tranding__selector-card">
//             <img src="${imgUrl}${trand.poster_path}" alt="${trand.name}" />
//             <p class="tranding__selector-text">${trand.original_name}</p>
//             <p class="tranding__selector-date">${trand.first_air_date}</p>
//         </div>
//             `;
//             trandingRow.innerHTML += cards;
//         }
//     } catch (err) {
//         console.log(err);
//     }
// })();

// let onTv = document.querySelector(".onTv");

// onTv.addEventListener("click", function onTv() {
//     (async function() {
//         let res = await fetch(
//             "https://api.themoviedb.org/3/movie/top_rated?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US&page=1"
//         );
//         let data = await res.json();

//         row.innerHTML = "<div />";

//         for (let img of data.results) {
//             let cards = `
//             <div class="popular__selector-card">
//             <img
//             src="${imgUrl}${img.poster_path}" alt="${img.name}"/>
//             <p class="popular__selector-text">${img.title}</p>
//             <p class="popular__selector-date">${img.release_date}</p>
//             </div>
//             `;
//             row.innerHTML += cards;
//         }

//         console.log(data);
//     })();
// });

// let searchInput = document.querySelector("#main__sec-input");
// let subBtn = document.querySelector("#main__sec-btn");

// let stor = (value) => {
//     localStorage.setItem("value", value);
// };
// let a = searchInput.value;

// subBtn.addEventListener("click", stor(a));

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
    "https://api.themoviedb.org/3/trending/tv/week?api_key=2cf8f0300d87595c63b0fe796e506522",
    trailers
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

let searchInput = document.querySelector("#main__sec-input");
let subBtn = document.querySelector("#main__sec-btn");