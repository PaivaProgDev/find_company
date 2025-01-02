export const saveLocal = () => {
    localStorage.setItem('tableElement', document.querySelector('.company-data').innerHTML)
    localStorage.setItem('initialModal', document.querySelector('.initial-modal').classList.contains('active'))
}