
document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");

    const sideMenu = document.getElementById("sideMenu");



    menuButton.addEventListener("click", function () {

        menuButton.classList.toggle("active");

        sideMenu.classList.toggle("open");

    });

});