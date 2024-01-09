// mobile menu js
const bar = document.getElementById('bar');
const closE = document.getElementById('closE');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (closE) {
    closE.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// portfolia
let filteritems = document.querySelectorAll('.portfolio_filters li');

function activePortfolio() {
    filteritems.forEach(el => {
        el.classList.remove('filter-active');
        this.classList.add('filter-active');
    })
}

filteritems.forEach(el => {
    el.addEventListener('click', activePortfolio);
})

 // ==== blog html



let slides = document.querySelectorAll('.home .slide-container .slide');
let index = 0;
 function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
 }

 function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
 }

// === DarkMode
//  let themeBtn = document.querySelector('#theme-btn');

//  themeBtn.classList.toggle('fa-sun');

//  if(themeBtn.classList.contains('fa-sun')){
//     document.body.classList.add('active');
//  }else{
//     document.body.classList.remove('active')
//  }



// ==== mixiup filter portfolio
let mixerPortfolio = mixitup('.portfolio_wrap-container', {
    selectors: {
        target: '.portfolio_item'
    },
    animation: {
        duration: 300
    }
})





// java script swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   slider js
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

// lightGallery
let lightGallery = document.querySelector(".projects .boks-container");




