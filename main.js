document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay:500 });
ScrollReveal().reveal('.cards-banner-one', { delay:500 });
ScrollReveal().reveal('.cards-baner-two', { delay:500 });


window.scrollTo({
    top: 0,
    behavior: 'smooth'
})

