const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
    navMenu.classList.add('active'); // Open the menu
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active'); // Close the menu
});
