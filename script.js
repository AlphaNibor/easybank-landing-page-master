const menuIcon = document.querySelector('.hamburger-bar');
const navbar = document.querySelector('.links');

menuIcon.addEventListener('click', function(){
    navbar.classList.toggle('show-links');
})