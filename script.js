const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode"); 
});

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.add("dark-mode");
} else {
    body.classList.add("light-mode"); 
}