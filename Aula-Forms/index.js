//https://www.w3schools.com/js/js_validation.asp

const signupForm = document.forms.signup
let campoNome = document.getElementById("inputNome")
let campoSobrenome = document.getElementById("inputSobrenome")
let campoIdade = document.getElementById("inputIdade")
let campoCamiseta = document.getElementsByName("radioCamiseta")
let btnCriarUsuario = document.getElementById('criarUsuario')
let nomeEValido = false
let sobrenomeEValido = false
let idadeEValido = false
let tamanhoCamisetaEValido = false

btnCriarUsuario.addEventListener("click", (event) => {
  event.preventDefault()
  
  if (validacaoTelaDeSignup()) {
    
    const payload = {
      nome: signupForm.elements["inputNome"].value.trim().toLowerCase(),
      sobrenome: signupForm.elements["inputSobrenome"].value.trim().toLowerCase(),
      idade: signupForm.elements["inputIdade"].value,
    }
    
    console.log("Dados", payload)
  } else {
    alert("Todos os campos devem ser informados")
    event.preventDefault()
  }
  
})

//Validação do campo de nome
campoNome.addEventListener("blur", function () {
  //Captura o elemento "small"
  let inputNomeValidacao = document.getElementById("inputNomeValidacao")

  ///Se o campo estiver com algum valor...
  if (campoNome.value != "") {
    inputNomeValidacao.innerText = ""
    campoNome.style.border = ``
    nomeEValido = true

    //Se o campo estiver sem nenhum valor...
  } else {
    inputNomeValidacao.innerText = "Campo obrigatório"
    inputNomeValidacao.style.color = "#EE1729EC"
    inputNomeValidacao.style.fontSize = "8pt"
    inputNomeValidacao.style.fontWeight = "bold"
    campoNome.style.border = `1px solid #EE1729EC`
    nomeEValido = false
  }

  //Chama a função de validar, para "atualizar" o status da validação principal da tela de login
  validacaoTelaDeSignup()
})

//Validação do campo de sobrenome
campoSobrenome.addEventListener("blur", function () {
  //Captura o elemento "small"
  let inputSobrenomeValidacao = document.getElementById(
    "inputSobrenomeValidacao"
  )

  ///Se o campo estiver com algum valor...
  if (campoSobrenome.value != "") {
    inputSobrenomeValidacao.innerText = ""
    campoSobrenome.style.border = ``
    sobrenomeEValido = true

    //Se o campo estiver sem nenhum valor...
  } else {
    inputSobrenomeValidacao.innerText = "Campo obrigatório"
    inputSobrenomeValidacao.style.color = "#EE1729EC"
    inputSobrenomeValidacao.style.fontSize = "8pt"
    inputSobrenomeValidacao.style.fontWeight = "bold"
    campoSobrenome.style.border = `1px solid #EE1729EC`
    sobrenomeEValido = false
  }

  //Chama a função de validar, para "atualizar" o status da validação principal da tela de login
  validacaoTelaDeSignup()
})

//Validação do campo de idade
campoIdade.addEventListener("blur", function () {
  //Captura o elemento "small"
  let inputIdadeValidacao = document.getElementById(
    "inputIdadeValidacao"
  )

  ///Se o campo estiver com algum valor...
  if (campoIdade.value > 0 ) {
    inputIdadeValidacao.innerText = null
    campoIdade.style.border = ``
    idadeEValido = true

    //Se o campo estiver sem nenhum valor...
  } else {
    inputIdadeValidacao.innerText = "Campo obrigatório"
    inputIdadeValidacao.style.color = "#EE1729EC"
    inputIdadeValidacao.style.fontSize = "8pt"
    inputIdadeValidacao.style.fontWeight = "bold"
    campoIdade.style.border = `1px solid #EE1729EC`
    idadeEValido = false
  }

  //Chama a função de validar, para "atualizar" o status da validação principal da tela de login
  validacaoTelaDeSignup()
})

//Validação radioButton

for (let i = 0; i < campoCamiseta.length; i++) {
   
  campoCamiseta[i].addEventListener("change", function () {

    let campoCamisetaSelecionado = document.querySelector(
    'input[name="radioCamiseta"]:checked'
  )
    ///Se o campo estiver com algum valor...
    if (campoCamisetaSelecionado.value) {
      //campoCamiseta[i].parentElement.style.border = ``
      tamanhoCamisetaEValido = true
  
      //Se o campo estiver sem nenhum valor...
    } else {
      tamanhoCamisetaEValido = false
    }
  
    //Chama a função de validar, para "atualizar" o status da validação principal da tela de login
    validacaoTelaDeSignup()
  })
}

//Função que valida os campos e bloqueia o btn do form
function validacaoTelaDeSignup() {
  if (
    nomeEValido &
    sobrenomeEValido &
    idadeEValido &
    tamanhoCamisetaEValido
  ) {
    btnCriarUsuario.removeAttribute("disabled")
    btnCriarUsuario.innerText = "Criar conta"
    return true
  } else {
    btnCriarUsuario.setAttribute("disabled", true)
    btnCriarUsuario.innerText = "Bloqueado"
    return false
  }
}