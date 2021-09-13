const shape4 = document.querySelector('.shape4 img');
const rightImg = document.querySelector('.about__section-right');
const rightImg1 = document.querySelector('.about__section-right img');
const aboutLeft = document.querySelector('.about__section-left');
const navBar = document.querySelector('.main__header');

window.addEventListener('scroll',()=> {
    const scrollTop = window.scrollY;
    if (scrollTop + window.innerHeight > shape4.offsetTop) {
        shape4.style.transform = `translateY(${scrollTop * .8}px) `;
        rightImg.style.transform = `translateY(${scrollTop * .60 }px)`;
        aboutLeft.style.transform = `translateY(${scrollTop * -.80 }px) `;
        rightImg1.style.width = (700 + scrollTop / 2) + 'px';

    }
    
})



const closBtn = document.querySelector('.nav__bar__close');
const nav = document.querySelector('.nav__bar-items');
const menuBtn = document.querySelector('.nav__bar__menu');

menuBtn.addEventListener("click", () => {
    if (menuBtn) {
        nav.classList.add("active__menu")
    }
})
closBtn.addEventListener("click", () => {
    if (closBtn) {
        nav.classList.remove("active__menu")
    }
})

// TODO: CUSTOM PROGRESS BAR HEIGHT SCRIPT----------------------------

const progressBar = document.querySelector('.progressbar__line');

window.addEventListener('scroll', () => {
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    let progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.height = progress + '%';
})

// TODO: SERVICE BOX PARALLAX EFFECT-------------------

const serviceSection = document.querySelector('.service')
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');



let scrollAmount = 0;
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    if (scrollTop + window.innerHeight > serviceSection.offsetTop) {
        scrollAmount++;
        // box1.style.transform = `translateY(${scrollAmount * .015}px)`;
        // console.log('scroll');
    }
})




// TODO: FAQ SECTION TOGGLER SCRIPT----------------

const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach((accordion) => {
    const accordionHeader = accordion.querySelector('.accordion__header');

    accordionHeader.addEventListener('click', () => {
        const openItems = document.querySelector('.accordion__open');
        toggleItem(accordion)
        if (openItems && openItems !== accordion) {
            toggleItem(openItems)
        }
    })
})

function toggleItem(item) {
    const accordionContent = item.querySelector('.accordion__content');

    if (item.classList.contains('accordion__open')) {
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion__open');
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion__open')
    }


}



// TODO: BUTTON PARALLAX EFFECT----------------------------------------
const team = document.querySelector(".team__section__item");
console.log(team);
const allBtn = document.querySelectorAll('.down__btn');
allBtn.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
        const pos = btn.getBoundingClientRect();
        
        const xAxis = e.clientX - pos.left - pos.width / 2;
        const yAxis = e.clientY - pos.top - pos.height / 2;
    
        btn.style.transform = `translate(${+xAxis * 0.5}px, ${yAxis}px)`
        btn.style.transform = `translate3d(${+yAxis * 0.5}px, ${yAxis}px, 12deg)`
        btn.style.transition = `all .3s`
        
    })

    btn.addEventListener(('mouseleave'), () => {
 
        btn.style.transform = `translate(0,0)`;
   }

    )
})

// TODO: MESSAGE BOX HEIGHT SCRIPT------------------------

const textAria = document.querySelector('textarea');
textAria.addEventListener('keyup', (e) => {
    let height = e.target.scrollHeight;
    textAria.style.height = '50px';
    textAria.style.height = `${height}px`;
})




// TODO: CLICK TO SCROLL TOP SCRIPT---------------------

const scrollTopBtn = document.querySelector('.scrolltop__btn');
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 600) {
        scrollTopBtn.classList.add('btn__active');
    } else {
        scrollTopBtn.classList.remove('btn__active')
        
    }
})

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 150) {
        navBar.classList.add("sticky");
        navBar.style.transition = `all .5s ease`
    } else {
        navBar.classList.remove('sticky');
    }
})