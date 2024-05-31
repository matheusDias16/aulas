function phone(numberValue) {
  let arrayLetras = []

  const arrayNumber = numberValue.split("")

  if (arrayNumber.length <= 0) {
    return []
  }
  arrayNumber.forEach((value) => {
    switch (value) {
      case "1":
        // arrayLetras.push(['']);
        break
      case "2":
        arrayLetras.push(["a", "b", "c"])
        break
      case "3":
        arrayLetras.push(["d", "e", "f"])
        break
      case "4":
        arrayLetras.push(["g", "h", "i"])
        break
      case "5":
        arrayLetras.push(["j", "k", "l"])
        break
      case "6":
        arrayLetras.push(["m", "n", "o"])
        break
      case "7":
        arrayLetras.push(["p", "q", "r", "s"])
        break
      case "8":
        arrayLetras.push(["t", "u", "v"])
        break
      case "9":
        arrayLetras.push(["w", "x", "y", "z"])
        break
    }
  })

  let controle = arrayLetras[0]
  let result = []
  arrayLetras.shift()

  if (arrayLetras.length > 0) {
    for (let i = 0; i < controle.length; i++) {
      for (let j = 0; j < arrayLetras.length; j++) {
        for (let k = 0; k < arrayLetras[j].length; k++) {
          result.push(controle[i] + arrayLetras[j][k])
        }
      }
    }
    
  } else {
    result = controle
  }
    

  return result
}
console.log(phone("23"))
