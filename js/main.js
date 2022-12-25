// carousel

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 2,
    },

    400: {
      items: 3,
    },

    600: {
      items: 4,
    },

    800: {
      items: 5,
    },

    1000: {
      items: 7,
    },

    1300: {
      items: 8,
    },
  },
});

// menu mobile
var menu = document.querySelector(".menu-button");
var menuList = document.querySelector(".menu-list");

document.addEventListener("click", () => {
  menuList.classList.remove("show");
});

menu.addEventListener("click", (event) => {
  event.stopPropagation();
  menuList.classList.toggle("show");
});
