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

// ===========================================
//                 hora na infor-tempo
// ===========================================

const hora = document.querySelector('#hora')
const data = new Date()

const dataFormatada = data.toLocaleDateString('pt-BR')
console.log(dataFormatada)
hora.textContent = ` ${dataFormatada}`