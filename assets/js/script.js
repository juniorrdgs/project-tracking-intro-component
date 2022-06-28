let menuHamb = document.querySelector('.menu--icon');
let menuClose = document.querySelector('.menu--close');
let navArea = document.querySelector('nav');

menuHamb.addEventListener('click', () => {
    navArea.style.display = 'block';
    menuHamb.style.display = 'none';
    menuClose.style.display = 'block';
    setTimeout(() => {
        navArea.style.opacity = '1';
    }, 200);
})

menuClose.addEventListener('click', () => {
    setTimeout(() => {
        navArea.style.opacity = '0';
        navArea.style.display = 'none';
        menuHamb.style.display = 'block';
        menuClose.style.display = 'none';
    }, 500);
});