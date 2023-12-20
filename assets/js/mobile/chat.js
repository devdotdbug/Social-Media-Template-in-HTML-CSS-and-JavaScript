
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
function openMessage() {
    let msg = document.getElementById("message");
    if(msg.style.display == "block") {
        msg.style.display = "none";
    } else {
        msg.style.display = "block";
    }
}
function hideMessage() {
    let msg = document.getElementById("message");
    msg.style.display = "none";
}