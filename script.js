const Menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

Menu.addEventListener('click' , () => toggleMenu())

function toggleMenu() {
  Menu.classList.toggle('ativo');
  NavMenu.classList.toggle('ativo'); 
}
galerySwitch()
window.addEventListener("resize", () => galerySwitch())

function galerySwitch() {
  if (window.matchMedia("(max-width: 785px)").matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}


var targetDate = new Date("2023/10/10 00:00:01").getTime();
var countdown = setInterval(function() {

  var now = new Date().getTime();

  
  var distance = targetDate - now;

 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Tempo expirado";
  }
}, 1000);


document.addEventListener("DOMContentLoaded", function() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});