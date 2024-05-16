let array = [5,1,0,5,61,5,28,1]

//DEIXAR AO CONTRARIO 1
// let reverse = array.reverse()
console.log("o contrario é",array.reverse())

// SOMA 2
// let soma = array.reduce(function(soma, i) {
//     return soma + i;
// });
// console.log(soma);

//MAIOR NUMERO 3
// let maior = Math.max.apply(null, array)
// console.log(maior);

//NUMERO IMPAR 4
// for(let i = 0; i < array.length; i++){
//     let impar = array[i]
//     if((impar % 2) !=0){
//         console.log(impar)
//     }
// }

 //NUMERO PAR 5
// for(let i = 0; i < array.length; i++){
//     let par = array[i]
//     if((par % 2) ==0){
//         console.log(par)
//     }
// }

//QUANTAS VEZES CADA UM APARECE 6 
// let vezes = (ar , value , value2 ) => ar.reduce((acc,item)=>value === item ? acc + 1 : acc ,0 )
// console.log(vezes(array, 5 , 1))

//TIRAR OS NUMEROS REPETIDOS 7
// let numeroUnico = new Set()
// array.forEach((numero) => {
//     numeroUnico.add(numero);
// });
// console.log(numeroUnico);

//refazer sem set

//MULTIPLICAR POR PI 8
let pi = array.map((x) => x * Math.PI);

console.log(pi)

//refazer deixando so duas casas decimais



