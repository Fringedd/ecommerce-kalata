'use strict';

const cart = document.getElementById('cart');
const modal1 = document.querySelector('.modal1');
const carter = document.querySelector('.carter');
const quantity1 = document.getElementById('quantity1');
const plus = document.getElementById('rightB');
const minus = document.getElementById('leftB');
const amount = Number(document.querySelector('.multi').textContent);
const cart2 = document.querySelector('.cart2');
const moni = Number(document.querySelector('.mon').textContent);
const quanT = Number(document.querySelector('.quanty').textContent);
const counT = document.getElementById('ciR');
const fullCart = document.querySelector('.fullCart');
const checkO = document.getElementById('checkO');
const emptyCard = document.getElementById('emptyCard');
const coU = document.getElementById('coU');
const thrash = document.getElementById('thrash');
const xModal = document.getElementById('xModal');
const openImage = document.querySelectorAll('.imigi');
const modalimuss = document.getElementById('modalimuss');
const overlay = document.getElementById('overLay');
const hamburg = document.getElementById('hamburger');
const mobMenu = document.querySelector('.mob-modal-menu');
const closy = document.querySelector('.closy');
const moblArrow = document.getElementById('mob-lArrow');
const mobrArrow = document.getElementById('mob-rArrow');

function openI() {
  if (modalimuss.classList.contains('invisible')) {
    modalimuss.classList.remove('invisible');
    overlay.classList.remove('hidden');
  }
}

function closeI() {
  if (!modalimuss.classList.contains('invisible')) {
    modalimuss.classList.add('invisible');
    overlay.classList.add('hidden');
  }
}

let quant = 0;

function modOpen() {
  if (!modal1.classList.contains('active')) {
    modal1.classList.add('active');
  } else {
    modal1.classList.remove('active');
  }
}

cart.addEventListener('click', modOpen);

function add() {
  quant += 1;
  if (quant >= 0) {
    quantity1.innerHTML = `${quant}`;
  }
}
function substract() {
  quant -= 1;
  if (quant >= 0) {
    quantity1.innerHTML = `${quant}`;
  }
}

plus.addEventListener('click', add);
minus.addEventListener('click', substract);

function closeModal() {
  document.querySelector('.modal1').style.display = 'none';
}

const eScape = function (e) {
  if (e.key === 'Escape') {
    if (modal1.classList.contains('active')) {
      modal1.classList.remove('active');
    }
  }
};
document.addEventListener('keydown', eScape);

function addCart() {
  if (
    !fullCart.classList.contains('activate') &&
    !counT.classList.contains('activate') &&
    !checkO.classList.contains('activate')
  ) {
    fullCart.classList.add('activate');
    checkO.classList.add('activate');
    counT.classList.add('activate');
    emptyCard.classList.add('hidden');
    coU.innerHTML = `${quant}`;
  }
}

function removeCart() {
  if (
    fullCart.classList.contains('activate') &&
    counT.classList.contains('activate') &&
    checkO.classList.contains('activate')
  ) {
    fullCart.classList.remove('activate');
    checkO.classList.remove('activate');
    counT.classList.remove('activate');
    emptyCard.classList.remove('hidden');
  }
}
cart2.addEventListener('click', addCart);
for (let i = 0; i < openImage.length; i++) {
  openImage[i].addEventListener('click', openI);
}
thrash.addEventListener('click', removeCart);
xModal.addEventListener('click', closeI);

const slides = document.getElementsByClassName('picture-item');
let slidePosition = 0;
const totalSlides = slides.length;

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove('picture-item-visible');
    slide.classList.add('picture-item-hidden');
  }
}

function moveToNextSlide() {
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add('picture-item-visible');
}

function moveToPrevSlide() {
  hideAllSlides();

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  slides[slidePosition].classList.add('picture-item-visible');
}

function openHam() {
  if (!mobMenu.classList.contains('active2')) {
    mobMenu.classList.add('active2');
    overlay.classList.add('active2');
  }
}

function closeHam() {
  if (mobMenu.classList.contains('active2')) {
    mobMenu.classList.remove('active2');
    overlay.classList.remove('active2');
  }
}

document.getElementById('rArrow').addEventListener('click', moveToNextSlide);
document.getElementById('lArrow').addEventListener('click', moveToPrevSlide);
hamburg.addEventListener('click', openHam);
closy.addEventListener('click', closeHam);
moblArrow.addEventListener('click', moveToPrevSlide2);
mobrArrow.addEventListener('click', moveToNextSlide2);

const slides2 = document.getElementsByClassName('picture-item2');
let slidePositionTwo = 0;
const totalSlidesTwo = slides2.length;

function hideAllSlides2() {
  for (let slide of slides2) {
    slide.classList.remove('picture-item2-visible');
    slide.classList.add('picture-item2-hidden');
  }
}
function moveToNextSlide2() {
  hideAllSlides2();

  if (slidePositionTwo === totalSlidesTwo - 1) {
    slidePositionTwo = 0;
  } else {
    slidePositionTwo++;
  }

  slides2[slidePositionTwo].classList.add('picture-item2-visible');
}

function moveToPrevSlide2() {
  hideAllSlides2();

  if (slidePositionTwo === 0) {
    slidePositionTwo = totalSlidesTwo - 1;
  } else {
    slidePositionTwo--;
  }

  slides2[slidePositionTwo].classList.add('picture-item2-visible');
}
