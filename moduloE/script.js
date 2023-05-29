// Função para contar 
function contar() {
     var inicio = document.querySelector('#txti')
     var fim = document.querySelector('#txtf')
     var passos = document.querySelector('#txtp')
     var res = document.querySelector('#res')

     // Condição para o contar() funcionar
     if ( inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0 ) {
        
        // Quando não insere os dados => Erro
        alert('Erro!!!')
        res.innerHTML = '[ Insira os dados corretamente ]'
     } else {

        res.innerHTML = 'Contando... <br>'

        // Transformando os valores dos input's em números
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)

        if ( p <= 0 ) {
            alert('Passo inválido!')
            p = 1
        }

        if ( i < f ) {

            //for ( var 'contador' = começa no i ; contador <=  fim ; contador += passos  ) 
            for( var c = i ; c <= f ; c += p ) {
                res.innerHTML += `${c} \u{1F449} ` // Contagem Crescente
            } 

        } else {
            for ( var c = i ; c >= f ; c-= p ) {
                res.innerHTML += ` ${c} \u{1F449} ` // Contagem Decrescente
            }
        }

        // Mostra a bandeira no final
        res.innerHTML += ` \u{1F3C1}`
     } 
}