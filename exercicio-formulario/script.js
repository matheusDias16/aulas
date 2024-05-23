const cadastroForm = document.forms.cadastro
let campoIdade = document.querySelector("#idade")
let campoCep = document.querySelector("#cep")
let campoFonte = document.querySelector("#fonte")
let campoOcupacao = document.querySelector(".ocupacao")
let btnCadastroPaciente = document.querySelector('#cadastroPaciente')

    btnCadastroPaciente.addEventListener("click", (event) => {
    event.preventDefault()
    // console.log('aa', document.querySelector('input[name="radioEstado"]:checked'))
    let estado = document.querySelector('input[name="radioEstado"]:checked');
    let genero = document.querySelector('input[name="radioGenero"]:checked');
    let array = []
    let ocupacao = document.querySelectorAll('input[name="ocupacao"]:checked');
    if(ocupacao.lenght > 0 ){
        
        ocupacao.forEach(item =>{
        array.push(item.value) 

        })
    }else{
        // ocupacao = []
    }
    console.log(array);
    const payload = {
        idade: cadastroForm.elements["idade"].value,
        cep: cadastroForm.elements["cep"].value,
        fonte: cadastroForm.elements["fonte"].value,
        ocupacao: ocupacao , 
        estado: estado != null ? estado.value : "" ,
        genero: genero != null ? genero.value : "" ,
      }
      console.log("Dados", payload)
    
  })

  