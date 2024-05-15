//Estrututas de decisão

//if-else
/* if (condition) {
  
} else {
  
} */

/* const numero = 22
if (numero>30) {
  console.log(`${numero} maior que 30`);
} else if(numero<25) {
  console.log(`${numero} menor que 25`);
} else {
  console.log(`${numero} maior que 25 e menor que 30`);
} */

//ternário
/* const decisao = true;

let dia = decisao ? 'segunda - feira' : 'sexta - feira'

console.log(dia); */

//Switch case
/* switch (key) {
  case value:
    
    break;

  default:
    break;
} */

/* switch (35) {
  case 16:
    console.log('Vermelho');
    break;
  case 24:
    console.log('Azul');
    break;
  case 35:
    console.log('Verde');
    break;
  default:
    console.log('Branco');
    break
} */

//Estruturas de repetição

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

/* pessoas.forEach((item, index) => {
  //console.log('Index do foreach', index);
  
  if (item.id === 4) {
    console.log(`${item.name} ${item.surname}`)
  }
}) */

//usando function e arrow function
/* let total = [0, 1, 2, 3].reduce(function (acumulador, valorAtual) {
  return acumulador + valorAtual
}, 0)

var total2 = [16, 1, 2, 3].reduce(
  (acumulador, valorAtual) => acumulador - valorAtual,
  0
)
console.log(total);
console.log(total2); */

//Map
/* const array = pessoas.map(item => {
  return {
    name: item.name.toUpperCase(),
    id: item.id.toString()
  }
})
console.log(array); */

//reduzir dados numéricos
/* const somaIdade = pessoas.reduce(
  (acumulador, valorAtual) => acumulador + valorAtual.age, 0
)
console.log('Idades total', somaIdade); */

//usando em conjunto
/* const somaIdade = pessoas
.map((item) => item.age)
.reduce((acumulador, valorAtual) => acumulador + valorAtual)

console.log('Idades total', somaIdade); */

/* const mediaDeIdade = pessoas.reduce(
  (acumulador, pessoaAtual) => {
    acumulador.soma += pessoaAtual.age
    acumulador.count++
    return acumulador
  },
  { soma: 0, count: 0 }
)

const idadeMedia = mediaDeIdade.soma / mediaDeIdade.count
console.log(`Idade média: ${idadeMedia.toFixed(2)} anos`) */

/* console.log(pessoas.length);
  
for (let index = 0; index< pessoas.length; index++) {
  console.log(pessoas[index].name);
} */

/* const objectNumbers = {
  a: 2,
  b: 4,
  c: 3,
  d: 6,
  e: 9,
  f: 7
}

// objectNumbers.a
// objectNumbers['a']

for (var prop in objectNumbers) {
  console.log("obj." + prop + " = " + objectNumbers[prop])
} */

//while
//var n = 0

/* while (n < pessoas.length) {
  console.log(pessoas[n].surname);
  n++
} */

//do while
/* do {
  console.log(pessoas[n].name);
  n++
} while (n<pessoas.length) */
