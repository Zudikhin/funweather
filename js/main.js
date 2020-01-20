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

let sliderBullets = document.querySelector('.slider__bullets');

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("touchstart", startTouch, false);
    item[i].addEventListener("touchmove", moveTouch, false);
    let bullet = document.createElement('a');
    bullet.href = '#';
    sliderBullets.appendChild(bullet);
}

let initialX = null;
let initialY = null;

let currentSlide = 1;

function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
}

function moveTouch(e) {

    if (initialX === null) {
        return;
    }
    if (initialY === null) {
        return;
    }

    let currentY = e.touches[0].clientY;
    let currentX = e.touches[0].clientX;
    let diffY = initialY - currentY;
    let diffX = initialX - currentX;
    console.log(diffX);
    console.log(diffY);
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 8) {
            moveToSlide(currentSlide + 1);
        } else if(diffX < -8) {
            moveToSlide(currentSlide - 1);
        }
    }
    initialX = null;
    initialY = null;
    e.preventDefault();
};

let bullets = document.querySelectorAll('.slider__bullets>a');
bullets[currentSlide].classList.add("active");

function moveToSlide(n) {
    item[currentSlide].className = 'item';
    bullets[currentSlide].classList.remove("active");
    currentSlide = (n + item.length) % item.length;
    item[currentSlide].className = 'item active';
    bullets[currentSlide].classList.add("active");
}

for (let i = 0; i < bullets.length; i++) {
    bullets[i].addEventListener("click", (event) => {
        event.preventDefault();
        moveToSlide(i);
    });
}

let imgs = document.querySelectorAll(".img");
let current;

imgs.forEach(function(elem) {
    elem.addEventListener("dragstart", function(event) {
        current = this;
    });
});

item.forEach(function(item) {
    item.addEventListener("dragover", function(event) {
        event.preventDefault();
    });
    item.addEventListener("drop", function(event) {
        let blockImg = this.children[0];
        let currentBlock = current.parentElement;
        this.appendChild(current);
        currentBlock.appendChild(blockImg);
    });
});
