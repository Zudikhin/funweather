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

let item = document.querySelectorAll('.item');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

next.addEventListener("click", () => {
    let lastImgItem = item[item.length - 1].childNodes[0];
    for (let i = 0; i < item.length; i++) { 
        if (i < item.length - 1) {
            let images = item[i].childNodes[0];
            item[i].childNodes[0].remove();
            item[i + 1].append(images);
        } else if (i == item.length - 1) {
            item[0].append(lastImgItem);
        }
    }
});

prev.addEventListener("click", () => {
    let firstImgItem = item[0].childNodes[0];
    for (let i = item.length - 1; i >= 0; i--) {
        if (i > 0) {
            let images = item[i].childNodes[0];
            item[i].childNodes[0].remove();
            item[i - 1].append(images);
        } else if (i == 0) {
            item[item.length - 1].append(firstImgItem);
        }
    }
});

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("touchstart", startTouch);
    item[i].addEventListener("touchmove", moveTouch);
}

let initialX = null;

let currentSlide = 1;

function startTouch(e) {
    initialX = e.touches[0].clientX;
}

function moveTouch(e) {
  if (initialX === null) {
    return;
  }
  let currentX = e.touches[0].clientX;
  let diffX = initialX - currentX;
  if (diffX > 0) {
    moveToSlide(currentSlide + 1);
  } else {
    moveToSlide(currentSlide - 1);
  }
  initialX = null;
  e.preventDefault();
};

function moveToSlide(n) {
    item[currentSlide].className = 'item';
    currentSlide = (n + item.length) % item.length;
    item[currentSlide].className = 'item active';
}




