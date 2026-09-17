// ================================
// AFTAB AHMED PORTFOLIO
// JAVASCRIPT
// ================================


// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});


// Automatically update copyright year
document.getElementById("year").textContent = new Date().getFullYear();


// LinkedIn link
const linkedinLink = document.getElementById("linkedinLink");

linkedinLink.addEventListener("click", (event) => {
    event.preventDefault();

    alert("LinkedIn profile link will be added here.");
});