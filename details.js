(async() => {
    let getItem = localStorage.getItem("id");

    let res = await fetch(
        "https://api.themoviedb.org/3/movie/" +
        getItem +
        "?api_key=2cf8f0300d87595c63b0fe796e506522&language=en-US"
    );
    let data = await res.json();
    console.log(data);
})();