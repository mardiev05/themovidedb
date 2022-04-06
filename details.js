let moviesUrl = "https://api.themoviedb.org/3/movie/";
let imgUrl = "https://image.tmdb.org/t/p/w500/";
let about = document.querySelector(".about");
let bgImg = document.querySelector(".bgImg");

(async() => {
        let getItem = localStorage.getItem("id");

        let res = await fetch(
            "https://api.themoviedb.org/3/movie/" +
            getItem +
            "?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US"
        );
        let detailes = await res.json();
        console.log(detailes);

        // for (let detailes of data) {

        let bgImage = `${imgUrl}${detailes.backdrop_path}`;
        bgImg.style.backgroundImage = "url(" + bgImage + ")";

        let ab = `
        <div class="about__img">
            <img class="about__main-img" src="${imgUrl}${
    detailes.poster_path
  }" alt="${detailes.title}" />
            <div class="about__img-detail">
                <img src="https://www.themoviedb.org/t/p/original/peURlLlr8jggOwK53fJ5wdQl05y.jpg" alt="" />
                <p>
                    Now Streaming <br />
                    <span>Watch Now</span>
                </p>
            </div>
        </div>

        <div class="about__content">
            <h1 class="about__content-title">
                <a href="#">${detailes.original_title} ${
    detailes.release_date
  }</a>
            </h1>
            <ul class="about__dates">
                <li class="about__date">${detailes.release_date} (US)</li>
                <li>
                    ${detailes.genres.map((item) => {
                      return `<a class="about__type" href="#">
                          ${item.name}
                        </a>`;
                    })}
                </li>
                <li class="about__hour">${detailes.runtime}</li>
            </ul>

            <ul class="about__icons">
                <li>User Score</li>
                <li class="icon"><i class="fa-solid fa-chart-bar"></i></li>
                <li class="icon"><i class="fa-solid fa-heart"></i></li>
                <li class="icon"><i class="fa-solid fa-bookmark"></i></li>
                <li class="icon"><i class="fa-solid fa-star"></i></li>
                <li class="play">Play Trailer</li>
            </ul>
            <h4 class="about__slogan">${detailes.tagline}</h4>
            <div class="overview">
                <h3 class="overview__title">Overview</h3>
                <p class="overview__text">
                ${detailes.overview}
                </p>
                <div class="overvieww__row">
                    ${detailes.production_companies.map(
                      (item) =>
                        `<div class="overview__card">
                            <div class="overview__img">
                                <img src="${imgUrl}${item.logo_path}" style=" width:50px">
                            </div>
                            <p class="overview__pos">${item.name}</p>
                        </div>`
                    )}
                </div>
            </div>
        </div>
        `;
  about.innerHTML = ab;
})();

// header logo
let headerLogo = document.querySelector(".header__links-logo");

headerLogo.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.assign("http://127.0.0.1:5500/main.html");
});