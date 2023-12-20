function profile(elem = null) {
    let profile = document.getElementById("userProfilePage");
    let body = document.getElementsByTagName("body")[0];
    let html = document.getElementsByTagName("html")[0];
    if(profile.style.display == "block") {
        profile.style.display = "none";        
        body.style.overflowY = "auto";
        html.style.overflowY = "auto";
        try {
            elem.classList.remove("active");
        } catch(e) {
            console.log(e);
        }
    } else {
        profile.style.display = "block";
        body.style.overflowY = "hidden";
        html.style.overflowY = "hidden";
        try {
            elem.classList.add("active");
        } catch(e) {
            console.log(e);
        }
    }
}
function hideProfile() {
    let profile = document.getElementById("userProfilePage");
    let body = document.getElementsByTagName("body")[0];
    let html = document.getElementsByTagName("html")[0];
    profile.style.display = "none";
    body.style.overflowY = "auto";
    html.style.overflowY = "auto";
}