
// get current year
const currentDate = new Date;
const currentYear = document.getElementById('current-year');
currentYear.innerHTML = currentDate.getFullYear();


// change bg color when navbar scrolls
const navbar = document.querySelector('.navbar');
const mobileMenu = document.querySelector('.mobile-menu'); 
const navbarMobile = document.querySelector('.navbar-mobile');
const cancelBtn = document.querySelector('.cancel-btn') 
const navbarMobileBtns = document.querySelectorAll('.navbar-mobile__links')

window.onscroll = function(){
    var scrollPos = window.scrollY;
    if (scrollPos > 100){
        navbar.classList.add('active');
    }
    else {
        navbar.classList.remove('active');
    }
}

mobileMenu.addEventListener('click', function(){
    navbarMobile.classList.toggle('show-navbar-mobile');
    console.log('ss')
})




//closes the navbar when the link clicked
navbarMobileBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        navbarMobile.classList.remove('show-navbar-mobile');
    })
})




//if window width >= 700px hide navbar mobile
window.addEventListener("resize", function() {
    var newWidth = window.innerWidth;
    if (newWidth >= "700"){
      navbarMobile.classList.remove('show-navbar-mobile');
    }
  });





//ACCORDION
var accordions = document.querySelectorAll(".accordion");




accordions.forEach(function(accordion){
    accordion.addEventListener('click', function(){

        //sibling of accordion element w/c is the accordion-content
        let content = this.nextElementSibling;

       if(content.style.maxHeight){
        // accordion is open, we need to close it
        content.style.maxHeight = null;
       } else {
        // accordion is closed,  so open it
        content.style.maxHeight = content.scrollHeight + "px";
        
       }
    });

 
});
