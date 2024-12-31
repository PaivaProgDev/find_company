const test = document.querySelector('.details-header')

export const cnpjListEvents = (e) => {
    e.target.classList.toggle('active')
}

export const cnpjListEventsRemove = (e) => {
    test.disabled = false
}