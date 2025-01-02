const menuList = document.querySelector('.menu-list')
const menuListContent = document.querySelector(".menu-list-content");
const arrowIndicator = document.querySelector(".arrow-indicator");
const btnList = document.querySelector('.btn-list')
const cnpj = document.querySelectorAll('.cnpj')
const field = document.querySelector('.label')
const input = document.querySelector('.field')
const pencilIcon = document.querySelector('.pencil-icon')

export const openList = (e) => {
  menuListContent.classList.toggle("active");
  arrowIndicator.classList.toggle("active");
  btnList.classList.toggle("active")
};

export const closeOutsideList = (e) => {
  if (!menuList.contains(e.target) && !field.contains(e.target)) {
    removeMenu()
  }
};

export const closePressList = (e) => {
  if (e.key === 'Escape') {
    removeMenu()
  }
};

const removeMenu = () => {
  menuListContent.classList.remove("active");
  arrowIndicator.classList.remove("active");
  btnList.classList.remove("active")
}

export const addMenu = () => {
  menuListContent.classList.add("active");
  arrowIndicator.classList.add("active");
  btnList.classList.add("active")
}

export const copyToClipboard = (e) => {
  cnpj.forEach(item => {
    if (e.target.previousElementSibling === item) {
      const text = item.innerText
      navigator.clipboard.writeText(text)
        .then(() => {
          let copyText = e.target.lastChild.previousElementSibling
          copyText.innerText = 'Copiado'
          e.target.style.backgroundColor = 'green';
          input.focus()

          setTimeout(() => {
            copyText.innerText = 'Copiar'
            e.target.style.backgroundColor = '#5d5fef'
          }, 2000)
        })
      if (navigator.clipboard && navigator.clipboard.writeText) {

      }

    }
  })
}



