let count = 0

function addNumber() {
  count++

  document.getElementById(
    "totalTexto"
  ).innerHTML = `O numero agora é: ${count}!`
}
