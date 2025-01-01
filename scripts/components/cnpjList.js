const menuList = document.querySelector('.menu-list')
const menuListContent = document.querySelector(".menu-list-content");
const arrowIndicator = document.querySelector(".arrow-indicator");
const btnList = document.querySelector('.btn-list')
const cnpj = document.querySelectorAll('.cnpj')
const copyText = document.querySelector('.copy-text')

export const openList = (e) => {
  menuListContent.classList.toggle("active");
  arrowIndicator.classList.toggle("active");
  btnList.classList.toggle("active")
};

export const closeOutsideList = (e) => {
  if(!menuList.contains(e.target)) {
    menuListContent.classList.remove("active");
    arrowIndicator.classList.remove("active");
    btnList.classList.remove("active")
  }
};

export const closePressList = (e) => {
  if(e.key === 'Escape') {
    menuListContent.classList.remove("active");
    arrowIndicator.classList.remove("active");
    btnList.classList.remove("active")
  }
};

export const copyToClipboard = (e) => {
  cnpj.forEach(item => {
    if(e.target.previousElementSibling === item) {
      const text = item.innerHTML

      navigator.clipboard.writeText(text)
      .then(() => {
        if(e.target.lastChild.previousElementSibling) {
          e.target.innerText = "Copiado!"

          setTimeout(() => {
            e.target.innerText = 'Copiar'
          }, 2000)

          
        }
        
      })
    }
  })
}



