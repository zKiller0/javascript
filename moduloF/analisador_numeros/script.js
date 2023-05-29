var num = document.querySelector('#fnum')
var lista = document.querySelector('#flista')
var res = document.querySelector('#res')
var valores = []

function isNumero( x ) {
    if ( Number(x) >= 1 && Number(x) <= 100 ) {
        return true
    } else {
        return false
    }
}

function inLista( x , y ) {
    if ( y.indexOf(Number(x)) != -1 ) {
        return true
    } else {
        return false
    }
 }

function adicionar() {
    if ( isNumero(num.value) && !inLista(num.value , valores) ) {
        valores.push(Number(num.value))

        var item = document.createElement('option')

        item.text = `Valor ${num.value} foi adicionado.`

        lista.appendChild(item)

        res.innerHTML = ''
    } else {

        alert('Valor inválido ou já encontrado!')
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if ( valores.length == 0 ) {

        alert('Adicione valores antes de finalizar!')
    } else {
        var txt = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0 
        var media = 0

        for(var pos in valores ) {
            soma += valores[pos]

            if ( valores[pos] > maior )
                maior = valores[pos]
            if ( valores[pos] < menor ) 
                menor = valores[pos]
        }

        media = soma / txt

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${txt} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> A soma de todos valores é ${soma}. </p>`
        res.innerHTML += `<p> A média de todos os valores é ${media}. </p>`
    }
}