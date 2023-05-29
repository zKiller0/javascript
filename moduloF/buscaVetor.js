var v = [ 1 , 3 , 5 , 7 , 11 ]

var pos = v.indexOf(11)
 
if( pos == -1 ) {
    console.log(`O valor não foi encontrado.`)
}  else {
    console.log(`O valor foi encontrado.Está na posição ${pos}.`)
}