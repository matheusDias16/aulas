
btn();
function renderizarDadosUsuario(dados){

  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    let container = document.getElementById("cardContainer")
      dados = data.results[0];
      
      dados.forEach(item => {

      const nomeCompleto = `${item.name.title} ${item.name.first} ${item.name.last}`;
      const email = item.email;
      const picture = item.picture.large;

      container.innerHTML += `
      <div class="card">
        <img src="${picture}" alt="personagem" class="card-img">
        <section class="info-section">
          <p><strong>Nome:</strong> ${nomeCompleto}</p>
          <p><strong>Email:</strong> ${email}</p>
        </section>
      </div>`
     });

  })
  .catch((error) => {
    console.error(`Aconteceu o seguinte erro: ${error}.`)
  }) 
}  

function btn(){
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {   
        console.log(data)
       renderizarDadosUsuario(data)
    });
}
