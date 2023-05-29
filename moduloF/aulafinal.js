let eu = {
nome:'Italo',
sexo:'masculino',
peso: 60.2,
engordar( p = 0 ) {
    console.log('Engordou')
    this.peso += p 
} }

eu.engordar(3) 
console.log(`${eu.nome} pesa ${eu.peso}Kg`)