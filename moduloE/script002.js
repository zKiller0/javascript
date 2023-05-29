// Função para calcular
function calcular() {
    // Selecionando os elementos e armazenando em variáveis
    var num = document.querySelector('#txtn')
    var tab = document.querySelector('#seltab')

        //  Caso o input esteja vazio //
        if ( num.value.length == 0 ){

            // Alerta de erro
            alert('Digite um número!')
        } else {

            // Transformando 'num' em número
            var n = Number(num.value)

            // Limpa o campo Select
            tab.innerHTML = ''
            
            // Variável para o contador
            var c = 1

                // Laço [ Repetição ]
                while ( c <= 10 ) {
                    // Criando um elemento option
                    var item = document.createElement('option')
                    
                    // Calculo
                    item.text = `${n} x ${c} = ${n * c}`

                    // Numera os itens tab
                    item.value = `tab${c}`

                    // Exibindo
                    tab.appendChild(item)

                    // Incremento
                    c++
                }

        }
        
}