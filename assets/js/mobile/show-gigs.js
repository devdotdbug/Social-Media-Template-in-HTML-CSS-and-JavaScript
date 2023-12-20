function shoeGigs(giger) {
    let gigs = giger.previouseElementSibling;
    if(gigs.style.display == "block") {
        gigs.style.display = "none";
    } else {
        gigs.style.display = "inline-block";
    }
}