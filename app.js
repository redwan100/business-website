const shape4 = document.querySelector('.shape4 img');
const rightImg = document.querySelector('.about__section-right');
const rightImg1 = document.querySelector('.about__section-right img');
const aboutLeft = document.querySelector('.about__section-left');
const navBar = document.querySelector('.main__header')


window.addEventListener('scroll',()=> {
    const scrollTop = window.scrollY;
    if (scrollTop + window.innerHeight > shape4.offsetTop) {
        shape4.style.transform = `translateY(${scrollTop * 1.2}px) `;
        rightImg.style.transform = `translateY(${scrollTop * .60 }px)`;
        aboutLeft.style.transform = `translateY(${scrollTop * -.80 }px) `;
        navBar.style.transform = `translateY(${scrollTop * 0.77}px) `;
        rightImg1.style.width = (700 + scrollTop / 2) + 'px';

    }
    
})



// TODO: SERVICE BOX PARALLAX EFFECT-------------------
const serviceSection = document.querySelector('.service')
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');



window.addEventListener("scroll", () => {
    const pos = serviceSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;
    const value = window.scrollY / 2;
    if (screenPos > pos ) {

    }
})