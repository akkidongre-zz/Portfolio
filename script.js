const navToggleButton = document.querySelector('.navbar-toggler');
const hamburgerIcon = document.getElementById('hamburger');
const closeIcon = document.getElementById('close');
const projectsDribbleBtn = document.querySelector('.projects-dribble-btn');

navToggleButton.addEventListener("click", (e) => {
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

projectsDribbleBtn.addEventListener("click", (e) => {
    window.open("https://dribbble.com/akkidongre");
});