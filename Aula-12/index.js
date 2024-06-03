//Requests
//https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

//fetch
//cada requisição é uma promessa

/* const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
)

console.log(fetchPromise)

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`)
})

console.log("Started request…") */

//exemplo 2
/* const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
).then((response) => {

  response.json().then((data) => {
    console.log(data[0].name)
  })
}) */

/* const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
)

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name)
  }) */

//Tratando errors

/* const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
)

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    return response.json()
  })
  .then((data) => {
    console.log(data[0].name)
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`)
  }) */

//Exemplo de uso
 let uri = "https://rickandmortyapi.com/api"
let configuracaoRequisicao = {
  method: "GET",
  headers: {
    //"content-type": "application/json",
    //authorization: tokenJwtusuarioLogado,
  },
  //body: JSON.stringify(dados a enviar),
  mode: "cors",
  cache: "default",
}

const fetchPromise = fetch(`${uri}/character`, configuracaoRequisicao)

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    return response.json()
  })
  .then((data) => {
    let container = document.getElementById("cardContainer")
    let dados = data.results

    dados.forEach((item) => {
      container.innerHTML += `
        <div class="card">
          <img src="${item.image}" alt="personagem" class="card-img">
          <section class="info-section">
            <p><strong>Nome:</strong> ${item.name}</p>
            <p><strong>Status:</strong> ${item.status}</p>
            <p><strong>Espécime:</strong> ${item.species}</p>
            <p><strong>Gênero:</strong> ${item.gender}</p>
          </section>
        </div>`
    })
  })
  .catch((error) => {
    console.error(`Aconteceu o seguinte erro: ${error}.`)
  }) 
