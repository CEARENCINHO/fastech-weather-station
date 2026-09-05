// ===========================================
//                 ABRIR MENU
// ===========================================
const btMenu = document.querySelector('#btMenu img')
const menu = document.querySelector('.navbar')
const navBar = document.querySelector('.navbar')

btMenu.addEventListener('click', () => {
    navBar.classList.toggle('ativo')
    
    if (navBar.classList.contains('ativo')){
        btMenu.setAttribute('src', 'img/x.svg')
    } else {
        btMenu.setAttribute('src','img/list.svg')
    }
    
})

