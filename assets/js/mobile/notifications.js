
function notifications(elem) {
    let noteRoot = document.getElementById("notifications");
    if(noteRoot.style.display == "block") {
        noteRoot.style.display = "none";
        elem.classList.remove("active");
    } else {
        noteRoot.style.display = "block";
        elem.classList.add("active");
    }
}