// Load Profile Data
window.onload = () => {
    const user = localStorage.getItem("loggedInUser");

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    document.getElementById("usernameDisplay").textContent = user;

    const savedPic = localStorage.getItem(user + "_profilePic");

    if (savedPic) {
        document.getElementById("profilePic").src = savedPic;
    } else {
        document.getElementById("profilePic").src = "assets/default_profile.png";
    }
};

// Trigger file chooser
function choosePic() {
    document.getElementById("uploadPic").click();
}

// Save Picture
document.getElementById("uploadPic").addEventListener("change", function() {
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const user = localStorage.getItem("loggedInUser");
        localStorage.setItem(user + "_profilePic", event.target.result);
        document.getElementById("profilePic").src = event.target.result;
        alert("Profile picture updated!");
    };

    reader.readAsDataURL(file);
});