const burger = document.querySelector(".burger i");
const nav = document.querySelector(".nav");
console.log(burger);

function showHamburger() {
    console.log("clicked")
//   burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active");
}