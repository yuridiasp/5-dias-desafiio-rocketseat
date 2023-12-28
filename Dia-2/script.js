const itens = document.querySelectorAll('li')

let contador = 0
const comprimentoLista = itens.length
let last = null

setInterval(() => {
    if (last) {
        last.classList.remove('active')
    }
    last = itens[contador]
    itens[contador].classList.add('active')
    if (contador == comprimentoLista-1)
        contador = -1
    contador++
}, 500)