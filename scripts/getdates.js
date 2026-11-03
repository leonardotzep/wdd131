const currentYear = document.getElementById("currentyear");

currentYear.textContent = new Date().getUTCFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
