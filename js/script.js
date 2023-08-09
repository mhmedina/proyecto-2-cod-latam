document.getElementById("darkModeToggle").addEventListener("change", function() {
    if (this.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});

function toggleMobileMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");

    var menuH=document.getElementsByClassName("menu-icon")
    menuH.innerHtml=menu
}
