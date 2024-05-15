// variáveis dos tipos const, Var, e let

//variavelX: string = '';
//this.variavelX = 'Matheus';

const variavelA = 1
//variável cont não altera o valor
//variavelA = 2;
/* var variavelB = 2
let variavelC = 3 */

function funcaoTeste() {
  /* variavelB = variavelA * 5
  variavelC = variavelB-- */
  var variavelB = 2
  let variavelC = 3
  //console.log("variáveis de dentro da função", variavelB, variavelC)
}
/* console.log('variáveis de dentro da função', variavelB);
console.log('variáveis de dentro da função', variavelC); */

funcaoTeste()

//Arrays
let array = ["a", "b", "c", "d", "e", "f"]
let array2 = [1, 2, 3, 4, 5, 6]
let pessoas = [
  {
    id: 1,
    name: "Roberto",
    surname: "Castro",
    age: 33,
  },
  {
    id: 2,
    name: "Claudete",
    surname: "Aparecida",
    age: 31,
  },
  {
    id: 3,
    name: "Flávia",
    surname: "Renbrant",
    age: 16,
  },
  {
    id: 4,
    name: "Daniel",
    surname: "Eduardo",
    age: 45,
  },
]

//console.log(array[1])
//console.log("André"[3])

//concat
//console.log(array.concat(array2))

//filter
/* const filtro = pessoas.filter((item) => item.age > 30)
console.log(pessoas.filter((item) => item.age < 30)) */

//find
//console.log(pessoas.find((item) => item.age > 70))

//includes
//console.log(array.includes('z'))
//console.log(array2.includes(10))

//slice
/* console.log(array2.slice(2, 5))
console.log(array2.slice(2))
console.log(array2.slice(-2)) */

//splice
//0 inseri
/* array.splice(1, 0, array2)
console.log(array); */

//1 substitui
/* array.splice(3, 1, 'cat')
console.log(array); */

//indexOf
/* console.log(array.indexOf('e'));
console.log(array[array.indexOf("e")]) */

//push
/* console.log(array2);
array2.push(15)
console.log(array2); */

//Objetos
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    //return this.firstName + " " + this.lastName
    return `${this.firstName} ${this.lastName}`
  },
}

person[`index${1}`] = "Rabelo"
person.lastName = "Dias"

//console.log(person);
//console.log(person.fullName())




//JavaScript Object Notation
let json = '{"name":"John", "age":30, "car":null}'

//console.log(json)
//console.log(JSON.parse(json))

const jsonParsead = JSON.parse(json)
//console.log("Exemplo de acesso ao objeto JSON", jsonParsead.name)

const obj = { name: "Matheus", age: 18, car: "Mercedes AMG 640" }

//console.log(JSON.stringify(obj))






let x = 1
let y = 2

function calcularNumero(numero1, numero2) {
  const numeroFinal = Math.pow(numero1,3) / Math.sqrt(numero2)
  console.log(numeroFinal);
  //x = numeroFinal;
  
  return numeroFinal
}

//x = calcularNumero(x, y)
//x = calcularNumero(x, y)
//x = calcularNumero(x, y)

// const dados = {
//   nome: "Matheus",
//   sobrenome: "Dias",
//   idade: 18,
//   x: 32,
//   y: 97,

//   calcularNumero: function () {
//     return Math.pow(3, 32) / Math.sqrt(97)
//   },
  

//   alterarNome: function () {
//     return this.nome + " " + this.sobrenome + "," + "tenho" + " " + this.idade + " " + "anos" 

//   }
// }
// console.log("Número final = ", dados.calcularNumero())
// console.log("Response =", dados.alterarNome())