var v = [ 1 , 3 , 5 , 7 , 11 , 13 ]

/*
console.log(v[0])
console.log(v[1])
console.log(v[2])
console.log(v[3])
console.log(v[4])
console.log(v[5])
*/ 

/*
for( var pos = 0 ; pos < v.length ; pos++ ) {
    console.log(`A posição ${pos} tem o valor ${v[pos]}.`)
}
*/

// Forma mais resumida
for( var pos in v ) {
    console.log(`A posição ${pos} tem o valor ${v[pos]}.`)
}



