
let topBar = document.querySelector(".topBar");
let button = document.querySelector(".topBar .blackButton");

window.addEventListener("scroll", function () {
    if (window.scrollY > 550) {
        topBar.classList.add("newTopBar");
        button.classList.add("newButton");
    } else {
        topBar.classList.remove("newTopBar");
        button.classList.remove("newButton");
    }
});
