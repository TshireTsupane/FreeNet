const movies = {
    trending: [
        "assets/posters/movie1.jpg",
        "assets/posters/movie2.jpg",
        "assets/posters/movie3.jpg"
    ],
    action: [
        "assets/posters/action1.jpg",
        "assets/posters/action2.jpg"
    ],
    drama: [
        "assets/posters/drama1.jpg",
        "assets/posters/drama2.jpg"
    ]
};

function loadRow(id, list) {
    const container = document.getElementById(id);
    list.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        container.appendChild(img);
    });
}

loadRow("trending", movies.trending);
loadRow("action", movies.action);
loadRow("drama", movies.drama);