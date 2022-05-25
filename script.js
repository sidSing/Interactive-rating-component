`use strict`;

const ratings = document.querySelectorAll(".rating");
const submitBTN = document.querySelector(".submit-btn");
const displayRating = document.querySelector(".ratingINSRT");
const sections = document.querySelectorAll("section");
let currentPosition = 0;
let ratingValue = 0;

ratings.forEach((rating) => {
  rating.addEventListener("click", (el) => {
    const target = el.target.closest(".rating");
    ratings.forEach((i) => {
      if (target === i) {
        i.classList.toggle("rating-selected");
        if (i.classList.contains("rating-selected")) {
          ratingValue = i.innerHTML;
        } else {
          ratingValue = 0;
        }
      } else {
        i.classList.remove("rating-selected");
      }
    });
  });
});

const changeSection = function (currentPosition) {
  sections.forEach((el, index) => {
    el.style.transform = `translateX(${(index - currentPosition) * 100}%)`;
  });
};

submitBTN.addEventListener("click", (el) => {
  el.preventDefault();
  displayRating.innerHTML = `${ratingValue}`;
  if (currentPosition < 1) {
    currentPosition++;
  }
  changeSection(currentPosition);
});

document.addEventListener("click", (el) => {
  if (el.target !== submitBTN) {
    if (currentPosition > 0) {
      currentPosition--;
    }
    changeSection(currentPosition);
  }
});
