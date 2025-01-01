const menuListContent = document.querySelector(".menu-list-content");
const arrowIndicator = document.querySelector(".arrow-indicator");

export const cnpjListEvents = (e) => {
  menuListContent.classList.toggle("active");
  arrowIndicator.classList.toggle("active");
};
