function addMovie() {
    const title = document.getElementById("movieTitle").value;
    const desc = document.getElementById("movieDesc").value;
    const cat = document.getElementById("movieCategory").value;
    const link = document.getElementById("movieURL").value;
    const posterFile = document.getElementById("moviePoster").files[0];

    if (!title || !desc || !cat || !link || !posterFile) {
        alert("Please fill all fields and select a poster.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        const posterBase64 = event.target.result;

        let movies = JSON.parse(localStorage.getItem("movies") || "[]");

        movies.push({
            id: Date.now(),
            title: title,
            description: desc,
            category: cat,
            poster: posterBase64,
            url: link
        });

        localStorage.setItem("movies", JSON.stringify(movies));

        alert("Movie added!");
        loadMovies();
    };

    reader.readAsDataURL(posterFile);
}

function loadMovies() {
    let movies = JSON.parse(localStorage.getItem("movies") || "[]");
    const list = document.getElementById("movieList");
    list.innerHTML = "";

    movies.forEach(movie => {
        const item = document.createElement("div");
        item.className = "movie-item";

        item.innerHTML = `
            <img src="${movie.poster}">
            <div style="margin-left:12px;">
                <strong>${movie.title}</strong><br>
                <small>${movie.category}</small>
            </div>
            <button class="delete-btn" onclick="deleteMovie(${movie.id})">Delete</button>
        `;

        list.appendChild(item);
    });
}

function deleteMovie(id) {
    let movies = JSON.parse(localStorage.getItem("movies") || "[]");

    movies = movies.filter(m => m.id !== id);

    localStorage.setItem("movies", JSON.stringify(movies));

    loadMovies();
}

window.onload = loadMovies;