const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getUTCFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav ul");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "X";
    }

    else {
        menuButton.textContent = "☰";
    }
});