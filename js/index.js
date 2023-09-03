//SWIPER

const swiper1 = new Swiper('.swiper-1', {
    speed: 400,
    slidesPerView: 2,
    spaceBetween: 60,
    grabCursor:true,
    loop:true,
    pagination: {
      el: '.swiper-pagination', 
      clickable: true, 
  },
  breakpoints: {
    320:{
      slidesPerView: 1,
    },
    550:{
      slidesPerView: 2,
    },
    868:{
      slidesPerView: 3,
    },
    1320: {
      slidesPerView: 4,
    },

    1800: {
        slidesPerView: 6,
    }, 
},
  });

const swiper2 = new Swiper('.swiper-2', {
    speed: 400,
    slidesPerView: 2,
    spaceBetween: 15,
    grabCursor:true,
    loop:true,
    pagination: {
      el: '.swiper-pagination', 
      clickable: true,  
  },

  breakpoints: {

    320: {
        slidesPerView: 1,
    },
    818: {
      slidesPerView: 2,
    },

},
  });

//GET IT GOOGLE PLAY 
const urlParams = new URLSearchParams(window.location.search);
const appOfferLink = urlParams.get('app_offer_link');

const googlePlayLinks = document.querySelectorAll('.google');

googlePlayLinks.forEach(link => {
    link.href = appOfferLink ? appOfferLink : 'https://www.google.com/';
  });

//FEEDBACK FORM
  document.getElementById("btn").addEventListener("click",(e) => {
    e.preventDefault(); 


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            


  
    if( name && email && message ){

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
      }

      console.log("Name: " + name);
      console.log("Email: " + email);
      console.log("Message: " + message);
    } else{
      alert('Please fill all options')

    }

});


//BURGER
const burgerMenu = document.querySelector('.header__burger');

if(burgerMenu){
    const menuBody = document.querySelector('.menu__body');
    burgerMenu.addEventListener('click',function(e){
        document.body.classList.toggle('_lock')
        burgerMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    });
}

//GET YEAR

const currentYear = new Date().getFullYear();

const yearElement = document.getElementById("currentYear");

yearElement.textContent = "©" + currentYear + " Name | ALL RIGHTS RESERVED";