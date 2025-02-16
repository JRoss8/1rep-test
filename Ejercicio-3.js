function calcularDescuento(edad, consumo) {
  let descuento = 0

  if (edad <= 12) {
    descuento = consumo * 0.50
  } else if (edad => 65) {
    descuento = consumo * 0.25
  }
  const montoTotal = consumo - descuento
  return montoTotal
}

const edad = parseInt(prompt("Ingrese su edad: "))
const consumo = parseFloat(prompt("Ingrese su consumo: "))


const montoTotal = calcularDescuento(edad, consumo)

alert("Monto total a pagar: Q" + montoTotal)