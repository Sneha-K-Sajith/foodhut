let nav = document.getElementById("nav");
let logo = document.getElementById("logo");
let brand_text = document.getElementById("brand_text");
let menu = document.getElementById("menu_btn");
let list1 = document.getElementById("nav_list1").children;
let list2 = document.getElementById("nav_list2").children;

window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 0);
  logo.classList.toggle("hide", window.scrollY > 0);
  brand_text.classList.toggle("show", window.scrollY > 0);
});

menu.addEventListener("click", function handleClick() {
  nav.classList.toggle("hid_nav");
  menu.classList.toggle("active");
  for (let i = 0; i <= list1.length - 1; i++) {
    list1[i].classList.toggle("list_nav");
  }
  for (let i = 0; i <= list2.length - 1; i++) {
    list2[i].classList.toggle("list_nav");
  }
});
