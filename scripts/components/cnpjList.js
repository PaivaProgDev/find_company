const menuList = document.querySelector(".menu-list");
const menuListContent = document.querySelector(".menu-list-content");
const arrowIndicator = document.querySelector(".arrow-indicator");
const btnList = document.querySelector(".btn-list");
const cnpj = document.querySelectorAll(".cnpj");
const field = document.querySelector(".label");
const input = document.querySelector(".field");

export const openList = (e) => {
  menuListContent.classList.toggle("active");
  arrowIndicator.classList.toggle("active");
  btnList.classList.toggle("active");
};

export const closeOutsideList = (e) => {
  if (!menuList.contains(e.target) && !field.contains(e.target)) {
    removeMenu();
  }
};

export const closePressList = (e) => {
  if (e.key === "Escape") {
    removeMenu();
  }
};

const removeMenu = () => {
  menuListContent.classList.remove("active");
  arrowIndicator.classList.remove("active");
  btnList.classList.remove("active");
};

export const copyToClipboard = (e) => {
  cnpj.forEach((item) => {
    if (e.target.previousElementSibling === item) {
      const text = item.innerText;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          e.target.innerHTML = `
              <ion-icon class="pencil-icon" name="checkmark-done-outline"></ion-icon>
              <span class="copy-text">Copiado</span>
          `;
          e.target.style.backgroundColor = "green";
          input.focus();

          setTimeout(() => {
            e.target.innerHTML = `
                <ion-icon class="pencil-icon" name="pencil-sharp"></ion-icon>
                <span class="copy-text">Copiar</span>
            `;
            e.target.style.backgroundColor = "#5d5fef";
          }, 2000);
        });
      }
    }
  });
};
