function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')

    var agora = new Date()
    var hora = agora.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
        if ( hora >= 0 && hora < 12 ) {
            img.src = 'manha.png'
            document.body.style.background = ''
        } else if ( hora >= 12 && hora <= 18 ) {
            img.src = 'tarde.png'
            document.body.style.background = '#FFBA70'
        } else {
            img.src = 'noite.png'
            document.body.style.background = '#001554'
        }
}