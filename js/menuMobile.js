const menuButao = document.querySelector('.cabecalho___menu__butao');

const menuMobile = document.querySelector('.cabecalho__menu__mobile');
let menuAberto = false;

menuButao.addEventListener('click', function () {

    menuAberto
        ? menuMobile.classList.add('invisivel')
        : menuMobile.classList.remove('invisivel');


    menuAberto
        ? menuButao.children[0].setAttribute('src', '../assets/menu.svg')
        : menuButao.children[0].setAttribute('src', '../assets/closeMenu.svg');

        menuAberto = !menuAberto;
});