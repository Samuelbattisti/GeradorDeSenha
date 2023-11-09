import geraSenha from "./geradores"

const aCaracteres = document.querySelector('#qCaracter')
const aNumeros = document.querySelector('#numeros')
const aMaiusculas = document.querySelector('#maiusculas')
const aMinusculas = document.querySelector('#minusculas')
const aSimbolos = document.querySelector('#simbolos')
const btn = document.querySelector('#gerar')
const resultado = document.querySelector('.resposta')

export default () => {
    btn.addEventListener('click', () => {
        resultado.innerHTML = gera()
    })
}

function gera() {
    const senha = geraSenha(
        aCaracteres.value,
        aMaiusculas.checked,
        aMinusculas.checked,
        aNumeros.checked,
        aSimbolos.checked
    )
    return senha || 'Nada Selecionado!'
}