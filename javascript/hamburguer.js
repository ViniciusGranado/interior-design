const hamburguerBtn = document.querySelector('.hamburguer-button');
const mobileBtn = document.querySelector('.mobile-button');
const menuLinkList = document.querySelectorAll('.menu-link');
const sideBar = document.querySelector('.side-bar');

hamburguerBtn.addEventListener('click', openMenu);
mobileBtn.addEventListener('click', closeMenu);
menuLinkList.forEach((link) => {
  link.addEventListener('click', closeMenu);
})

function openMenu () {
  sideBar.classList.add('active');
}

function closeMenu () {
  sideBar.classList.remove('active');
}
