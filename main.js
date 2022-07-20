const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const testimonials = document.querySelector('#testimonials');

for(const elements of toggle){
    elements.addEventListener('click', () => {
        nav.classList.toggle('show');
    })
}

const links = document.querySelectorAll('nav ul li a');

for (const el of links) {
    el.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}

function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}

// testimonials slider

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767:{
            slidesPerView: 2,
            setWrapperSize: true,
        }
    }
  });

// scrollReview

// const scrollReveal = ScrollReveal({
//     origin: 'top', 
//     distance: '30px',
//     duration: 500,
//     reset: true
// })

// scrollReveal.reveal(
//     `#home .text, #home .image,
//     #about .image, #about .text,
//     #services header, #services .card,
//     #testimonials header, #testimonials .testimonials
//     #contact .text, #contact .links,
//     footer .brand, footer .social
// `, {interval: 100})

// back to top

function backToTop(){
    const backToTopButton = document.querySelector('.back-to-top')

    if(window.scrollY >= 560){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( const section of sections){
        const sectionTop = section.offsetTop 
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop 
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active');
        }else{
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active');
        }
    }
}

window.addEventListener('scroll', () => {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})