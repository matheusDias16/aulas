//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous



//Javascript síncrono
/* function makeGreeting(name) {
  return `Hello, my name is ${name}!`
}

const name = "Miriam"

const greeting = makeGreeting(name)
console.log(greeting) */




//Javascript assíncrono

/* function doStep1(init) {
  return init + 1
}

function doStep2(init) {
  setTimeout(() => {
    return init + 2
  }, 3000)
  
}

function doStep3(init) {
  return init + 3
}

function doOperation() {
  let result = 0
  result = doStep1(result)

  //setTimeout(() => {}, 3000)
  //result = doStep2(result)

  result = doStep3(result)
  console.log(`result: ${result}`)
}
doOperation() */



//usando callbacks para resolver funções assíncronas
/* function doStep1(init, callback) {
  const result = init + 1
  callback(result)
}

function doStep2(init, callback) {
  setTimeout(() => {
    const result = init + 2
    callback(result)
    
  }, 3000);
}

function doStep3(init, callback) {
  const result = init + 3
  callback(result)
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`)
      })
    })
  })
}

doOperation() */

//Lidando com multiplas promessas
//Promise.all
//Promise.any

const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
)
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
)
/* const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
) */

/* const fetchPromise3 = fetch(
  "badhjkukhyukhkhjkhjkhj-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
) */

  
/* Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`)
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: => ${error}`)
  }) */

/* Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`)
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
  }) */
  
    //resolvendo 1 promise
/* Promise.resolve(fetchPromise1)
  .then((response) => {
    console.log(`${response.url}: ${response.status}`)
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
  }) */

  
  
//Async / await
  
async function fetchProducts() {
  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error
    //Em vez de receber uma promise como resposta, recebe a resposta completa
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
    )
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json()
    console.log(data[0].name)
  } catch (error) {
    console.error(`Could not get products: ${error}`)
  }
}

fetchProducts()