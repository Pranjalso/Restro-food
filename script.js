let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let searchIcon = document.querySelector("#search-icon");
let searchForm = document.querySelector("#search-form");
searchIcon.addEventListener("click",function(){
searchForm.classList.toggle('active')
});

let close = document.querySelector("#close");
close.addEventListener("click",function(){
searchForm.classList.remove('active')
});


var swiper = new Swiper(".home-slider", {
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });



  var swiper = new Swiper(".review-slider ", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    
   loop:true,
   breakpoints: {
    0:{
      slidePerView :1,
    },
    640 : {
      slidesPerView:2,
    },
    768: {
  slidesPerView:2,
},
     1024: {
  slidePerView:3,
},
}, 
  });




  
