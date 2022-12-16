const popupBg = document.querySelector(".popup__bg");
const popup = document.querySelector(".popup");
const openPopupButtons = document.querySelectorAll(".open-popup");
const closePopupButtons = document.querySelector(".close-popup");

openPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popupBg.classList.add("active");
    popup.classList.add("active");
  });
});

closePopupButtons.addEventListener("click", () => {
  popupBg.classList.remove("active");
  popup.classList.remove("active");
});

//Hide a popup window when clicking on background
document.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove("active");
    popup.classList.remove("active");
  }
});
