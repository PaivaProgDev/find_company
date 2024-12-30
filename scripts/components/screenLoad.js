const container = document.querySelector('.container')
let screen;

export const screenLoader = () => {
    const screenLoader = document.createElement('span')
    screenLoader.className = 'screen-load'
    screen = screenLoader
    container.appendChild(screenLoader)
}

export const closeScreenLoader = () => {
    container.removeChild(screen)
}