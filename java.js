var navLinks = document.getElementsByClassName("nav-link");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        var navbarNav = document.querySelector(".navbar-collapse");
        if (navbarNav.classList.contains("show")) { navbarNav.classList.remove("show"); }
    })

}
