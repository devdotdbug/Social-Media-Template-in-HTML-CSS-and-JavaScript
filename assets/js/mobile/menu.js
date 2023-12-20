function exMenu(elem) {
    let buttons = document.getElementsByClassName("ex-buttons");
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
        elem.classList.add("active");
    }
}
function openMenu(elem) {
    let menu = document.getElementById("menu");
    if(menu.style.display == "block") {
        menu.style.display = "none";
        elem.classList.remove("active");
    } else {
        menu.style.display = "block";
        elem.classList.add("active");
    }
}