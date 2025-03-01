document.addEventListener("DOMContentLoaded", function () {
    // Select the active nav item
    const activeNavItem = document.querySelector(".md-nav__item--active");

    if (activeNavItem) {
        activeNavItem.style.background = "none";
        activeNavItem.style.backgroundColor = "transparent";
        activeNavItem.style.boxShadow = "none";
    }
});
