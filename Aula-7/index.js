




//Estrututas de decisão

/* if (condition) {
  
} else {
  
} */

/* const numero = 32
if (numero>30) {
  console.log(`${numero} maior que 30`);
} else if(numero<25) {
  console.log(`${numero} menor que 25`);
} else {
  console.log(`${numero} maior que 25 e menor que 30`);
} */





/* switch (key) {
  case value:
    
    break;

  default:
    break;
} */

/* switch (5) {
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
    name: 'Roberto',
    surname: 'Castro',
    age: 33
  },
  {
    id: 2,
    name: 'Claudete',
    surname: 'Aparecida',
    age: 31
  },
  {
    id: 3,
    name: 'Flávia',
    surname: 'Renbrant',
    age: 16
  },
  {
    id: 4,
    name: 'Daniel',
    surname: 'Eduardo',
    age: 45
  },
]

/* pessoas.forEach((item, index) => {
  if (item.id === 4) {
    console.log(`${item.name} ${item.surname}`)
  }
}) */


//usando function e arrow function
/* let total = [0, 1, 2, 3].reduce(function (acumulador, valorAtual) {
  return acumulador + valorAtual
}, 0)

var total2 = [0, 1, 2, 3].reduce(
  (acumulador, valorAtual) => acumulador + valorAtual,
  0
) */


/* //Map
const array = pessoas.map(item => item.name = item.name.toUpperCase())
console.log(array); */


/* //reduzir dados numéricos
const somaIdade = pessoas.reduce(
  (acumulador, valorAtual) => acumulador + valorAtual.age
)
console.log('Idades total', somaIdade); */


//usando 
/* const somaIdade = pessoas
  .map((item) => item.age)
  .reduce((acumulador, valorAtual) => acumulador + valorAtual) */
  
  
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

  
  



/* for (let i = 0; i < pessoas.length; i++) {
  console.log(pessoas[i].name);
} */



/* const objectNumbers = {
  a: 2,
  b: 4,
  c: 3,
  d: 6,
  e: 9,
  f: 7
}

for (var prop in objectNumbers) {
  console.log("obj." + prop + " = " + objectNumbers[prop])
} */

