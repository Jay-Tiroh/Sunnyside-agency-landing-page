const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-bar-links");

updateMenuVisibility();

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

window.addEventListener("resize", updateMenuVisibility);

function updateMenuVisibility() {
  if (window.innerWidth <= 950) {
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
    }
  } else {
    menu.classList.remove("hidden");
  }
}

// function toggleMenu() {
//   if (menu.classList.contains("hidden")) menu.classList.remove("hidden");
//   else {
//     menu.classList.add("hidden");
//   }
// }

// function checkScreenWidth() {
//   return window.innerWidth <= 750;
// }

// if (checkScreenWidth()) {
//   //   menu.classList.add("hidden");
//   menuBtn.addEventListener("click", toggleMenu);
// } else {
//   menu.classList.remove(".hidden");
// }
