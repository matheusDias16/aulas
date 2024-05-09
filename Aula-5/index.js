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
  console.log('variáveis de dentro da função', variavelB, variavelC);
}
/* console.log('variáveis de dentro da função', variavelB);
console.log('variáveis de dentro da função', variavelC); */



funcaoTeste()


//Arrays



//Objetos
const person = {
  firstName: "John",
  //lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName
  },
}

person["lastName"] = 'Rabelo'

console.log(person.fullName())



//JavaScript Object Notation
// let json = '{"name":"John", "age":30, "car":null}'

// console.log(json);
// console.log(JSON.parse(json));

// const jsonParsead = JSON.parse(json)
// console.log('Exemplo de acesso ao objeto JSON', jsonParsead.name);

// const obj = { name: "Matheus", age: 18, car: 'Mercedes AMG 640' }

// console.log(JSON.stringify(obj));
const dados ={
   nome:"Matheus",
   sobrenome: "Dias",
   idade : 18,
   x:32,
   y:97,

   calcularNumero: function(){
   return Math.pow(3,32) / Math.sqrt(97)
  },  
 
    
    alterarNome: function(){
      return this.nome  + " " + this.sobrenome + "," + "tenho" + " "+ this.idade + " " + "anos"

    }
}
console.log("Número final = ", dados.calcularNumero())
console.log("Response =", dados.alterarNome())
