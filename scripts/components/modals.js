const container = document.querySelector('.container')
const btnSearch = document.querySelector('.btn-search')
let modalContent;

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
            <ion-icon class="modal-close" name="close-outline"></ion-icon>
        </div>
        <h3 class="modal-info">${messageError}</h3>
    </div> `
    
    container.appendChild(modal)
    modal.classList.add('active')
    document.querySelector('.modal').classList.add('active')
    btnSearch.disabled = false
    modalContent = modal
}

export const closeModalError = () => {
    container.removeChild(modalContent)
}