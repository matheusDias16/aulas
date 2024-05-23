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

//local storage
//diponível até ser apagado do storage
//localStorage.setItem("pessoas", pessoas)
/* localStorage.setItem("pessoas", JSON.stringify(pessoas))
localStorage.setItem("pessoas2", JSON.stringify(pessoas))
localStorage.setItem("pessoas3", JSON.stringify(pessoas))
const listaPessoas = JSON.parse(localStorage.getItem("pessoas"))
console.log(listaPessoas)
localStorage.removeItem("pessoas2")
localStorage.clear() */

//sesion storage
//disponívem no storage enquanto o usuário ne mantiver na mesma janela, aba

/* sessionStorage.setItem("pessoas", JSON.stringify(pessoas))
sessionStorage.setItem("pessoas2", JSON.stringify(pessoas))
sessionStorage.setItem("pessoas3", JSON.stringify(pessoas))
const listaPessoas = JSON.parse(sessionStorage.getItem("pessoas"))
console.log(listaPessoas)
sessionStorage.removeItem("pessoas")
sessionStorage.clear() */

//exemplo de manteneção de dados
/* document.getElementById('session').innerHTML = sessionStorage.getItem('pessoas')
document.getElementById('local').innerHTML = localStorage.getItem('pessoas')

function saveSessionStorage() {
  sessionStorage.setItem("pessoas", JSON.stringify(pessoas))
}

function saveLocalStorage() {
  localStorage.setItem("pessoas", JSON.stringify(pessoas))
} */

//DOM

//Seletor genérico
//document.querySelector('.listaUL')
//console.log(document.querySelector(".listaUL"))
// document.querySelectorAll('.item')
// console.log(document.querySelectorAll(".item"))

//selecionar elemento pelo id
//document.getElementById("lista")

//Selecionar elemento pela tag name do html
/* const carro = document.getElementsByName('MERCEDES')
console.log(carro); */

//selecionar elementos pela tag
/* let listaTag = document.getElementsByTagName("ul")
console.log(listaTag[0]);
let array = [...listaTag]
array.forEach((item, index) => {
  console.log(index, item);
  console.log(index, item.innerHTML);
  console.log(index, item.children);
  console.log(index, item.children[0]);
}) */

//selecionar todos os elementos que tem essa classe
/* let listaClasse = document.getElementsByClassName("item")
let array = Array.from(listaClasse)
//let array = [...listaClasse]
array.forEach((item, index) => {
  console.log(index, item.innerHTML);
}) */

//Modificando estilos
/* let ul = document.getElementById("lista")
ul.style.backgroundColor = 'red'
ul.style.border = '10px dotted black'
ul.style.display = 'none'
ul.style.display = 'block' */

//Modificando atributos
/* let btn1 = document.querySelector('#btnLocal')
console.log(btn1.hasAttribute("disabled"));
console.log(btn1.hasAttribute("id"));
console.log(btn1.getAttribute("name"));
btn1.removeAttribute("disabled");
btn1.setAttribute("src", "https://www.youtube.com") */

//Modificando classes
//let ul = document.getElementById("lista")
//ul.classList.add('borda')
//console.log(ul.classList.contains('borda'));
//ul.classList.toggle('borda')
//ul.classList.remove('borda')
//ul.classList.toggle('borda')
//console.log(ul.classList.contains('borda'));

//Eventos
/* let anchor = document.querySelector('a')

anchor.addEventListener("click", (event) => {
  console.log("Ocorreu um click")
  event.preventDefault()
})

anchor.addEventListener("mouseover", (event) => {
  console.log("passou o mouse sobre")
}) */

/* window.addEventListener('keydown', (event) => {
  console.log(event);
  console.log(`Precionou a tecla: ${event.key}`);
  
  if (event.key == 'F12') {
    console.log('Bloqueado');
    event.preventDefault()
  }
  
}) */
