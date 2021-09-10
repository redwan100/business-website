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



