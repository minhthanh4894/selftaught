document.addEventListener("DOMContentLoaded", function() {
  var navbtn = document.querySelector("#nav");
  var navItems = document.querySelectorAll(".navigation__item");
  var navLinks = document.querySelectorAll(".navigation__item");
  var navCheckbox = document.querySelector(".navigation__checkbox");
  // Tạo hiệu ứng fadeInRight cho navItems khi click nút menu
  navbtn.addEventListener("click", () => {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.toggle("fadeInRight");
    }
  });
  // END Tạo hiệu ứng fadeInRight cho navItems khi click nút menu

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
      navCheckbox.checked = false;
    });
  }
});
