
function openChats(elem) {
    let chats = document.getElementById("chats");
    if(chats.style.display == "block") {
        chats.style.display = "none";
        elem.classList.remove("active");
    } else {
        chats.style.display = "block";
        elem.classList.add("active");
    }
}