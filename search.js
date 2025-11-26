const moviesDB = [
    { title: "Example Movie", poster: "assets/posters/movie1.jpg", id: 1 },
    { title: "Action Blast", poster: "assets/posters/action1.jpg", id: 2 },
    { title: "Drama Queen", poster: "assets/posters/drama1.jpg", id: 3 }
];

const searchBox = document.getElementById("searchBox");
const results = document.getElementById("searchResults");

searchBox.addEventListener("input", () => {
    const text = searchBox.value.toLowerCase();
    results.innerHTML = "";

    const filtered = moviesDB.filter(movie =>
        movie.title.toLowerCase().includes(text)
    );

    filtered.forEach(movie => {
        const img = document.createElement("img");
        img.src = movie.poster;
        img.onclick = () => {
            window.location.href = `details.html?id=${movie.id}`;
        };
        results.appendChild(img);
    });
});