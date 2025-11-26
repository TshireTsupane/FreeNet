function loadLibrary() {
    const user = localStorage.getItem("loggedInUser");
    const library = JSON.parse(localStorage.getItem(user + "_library")) || [];

    const container = document.getElementById("libraryContainer");
    container.innerHTML = "";

    library.forEach(movie => {
        const img = document.createElement("img");
        img.src = movie.poster;
        img.onclick = () => {
            window.location.href = `details.html?id=${movie.id}`;
        };
        container.appendChild(img);
    });
}

loadLibrary();