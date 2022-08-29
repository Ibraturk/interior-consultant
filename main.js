let burguerMenu = document.querySelector('.burguer-menu');
let menuMobile = document.querySelector('.menu-mobile');

burguerMenu.addEventListener('click', toggleMenus);

function toggleMenus() {
    menuMobile.classList.toggle('inactive');
}