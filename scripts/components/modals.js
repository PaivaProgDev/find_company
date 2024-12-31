const container = document.querySelector('.container')
const btnSearch = document.querySelector('.btn-search')
let modalContent;
let btnClose;

export const modalError = (messageError) => {
    const modal = document.createElement('div')
    modal.className = 'modal-bg'
    modal.innerHTML =  `
    <div class="modal">
        <div class="modal-header">
            <div class="alert-header">
                <ion-icon name="alert-circle"></ion-icon>
                <h1 class="modal-title">Houve um erro...</h1>
            </div>
            <button class="modal-close">
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
        </div>
        <h3 class="modal-info">${messageError}</h3>
    </div> `
    
    container.appendChild(modal)
    modal.classList.add('active')
    document.querySelector('.modal').classList.add('active')
    btnClose = document.querySelector('.modal-close')
    btnClose.focus()
    // Desabilita a tecla TAB para não interagir com outros botões
    document.addEventListener('keydown', disableTab)
    btnSearch.disabled = false
    modalContent = modal
}

export const closeModalError = () => {
    container.removeChild(modalContent)
    document.removeEventListener('keydown', disableTab)
}

const disableTab = (e) => {
    if(e.key === 'Tab') {
        e.preventDefault();
        btnClose.focus()
    }
}
