"use strict";

const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const selectPlanBtns = document.querySelectorAll(".show-modal");
const btnsCloseModal = document.querySelectorAll(".close-modal");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

const openModal = function () {
  modal.classList.add("open");
  backdrop.classList.add("open");
};

// doing it schmedtmann's way of adding a class
const closeModal = function () {
  modal.classList.remove("open");
  backdrop.classList.remove("open");
};

for (let i = 0; i < selectPlanBtns.length; i++) {
  selectPlanBtns[i].addEventListener("click", openModal);
}

for (let i = 0; i < btnsCloseModal.length; i++) {
  btnsCloseModal[i].addEventListener("click", closeModal);
}

// btnsCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);
backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
});

// doing it schwartzmann's way of remving a style as in CSS Guide course
toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
