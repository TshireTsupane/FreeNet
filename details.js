const moviesInfo = {
    1: {
        title: "Example Movie",
        description: "A movie about something interesting.",
        poster: "assets/posters/movie1.jpg",
        link: "#"
    },
    2: {
        title: "Action Blast",
        description: "Explosive action from start to finish.",
        poster: "assets/posters/action1.jpg",
        link: "#"
    },
    3: {
        title: "Drama Queen",
        description: "A dramatic story full of emotions.",
        poster: "assets/posters/drama1.jpg",
        link: "#"
    }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const movie = moviesInfo[id];

document.getElementById("poster").src = movie.poster;
document.getElementById("title").textContent = movie.title;
document.getElementById("description").textContent = movie.description;

document.getElementById("watchBtn").onclick = () => {
    window.location.href = movie.link;
};
document.getElementById("saveBtn").onclick = () => {
    const user = localStorage.getItem("loggedInUser");
    let library = JSON.parse(localStorage.getItem(user + "_library")) || [];
    function toggleWatchLater(id) {
    let list = JSON.parse(localStorage.getItem("watchLater") || "[]");

    if (list.includes(id)) {
        // Remove movie
        list = list.filter(m => m !== id);
        alert("Removed from Watch Later");
    } else {
        // Add movie
        list.push(id);
        alert("Added to Watch Later");
    }

    localStorage.setItem("watchLater", JSON.stringify(list));
}
    
    // avoid duplicates
    if (!library.find(m => m.id == id)) {
        library.push({
            id: id,
            title: movie.title,
            poster: movie.poster
        });
        localStorage.setItem(user + "_library", JSON.stringify(library));
        alert("Saved to your library!");
    } else {
        alert("Already saved!");
    }
};
function loadSeasons(movie) {
    document.getElementById("seriesBox").style.display = "block";
    const seasonSelect = document.getElementById("seasonSelect");

    movie.seasons.forEach(s => {
        const option = document.createElement("option");
        option.value = s.season;
        option.textContent = "Season " + s.season;
        seasonSelect.appendChild(option);
    });

    showEpisodes(movie, 1); // default: Season 1
}

function changeSeason() {
    const selectedSeason = parseInt(document.getElementById("seasonSelect").value);
    showEpisodes(movie, selectedSeason);
}

function showEpisodes(movie, seasonNumber) {
    const epBox = document.getElementById("episodeList");
    epBox.innerHTML = "";

    const season = movie.seasons.find(s => s.season === seasonNumber);

    season.episodes.forEach(ep => {
        epBox.innerHTML += `
            <div class="episode-card" onclick="playEpisode('${ep.link}')">
                <p><strong>Episode ${ep.number}:</strong> ${ep.title}</p>
            </div>
        `;
    });
}

function playEpisode(link) {
    localStorage.setItem("episodeLink", link);
    window.location.href = "player.html";
}