"use strict";
let main = document.querySelector(".main");
let headerBtn = document.querySelector(".header__btn");
let headerMenu = document.querySelector(".header__menu");
let headerIcons = document.querySelector(".header__icons");
let headerContent = document.querySelector(".header__content");
let header = document.querySelector(".header");
headerBtn.addEventListener("click", openBurger);

function openBurger() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    headerMenu.classList.remove("active");
    headerIcons.classList.remove("active");
    headerContent.classList.remove("active");
    main.classList.remove("active");
    header.classList.remove("active");
  } else {
    this.classList.add("active");
    headerMenu.classList.add("active");
    headerIcons.classList.add("active");
    headerContent.classList.add("active");
    main.classList.add("active");
    header.classList.add("active");
  }
}

let radius = document.querySelectorAll(".radius");
for (let i = 0; i < radius.length; i++) {
  let item = radius[i];
  item.classList.add("")
  console.log(item);
}
