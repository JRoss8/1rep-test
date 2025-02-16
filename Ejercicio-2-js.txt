const salario = parseInt (prompt("Ingrese su salario: "))
const BonosProducidos = parseInt(prompt("Ingrese las unidades del mes: "))
let Bonos= 0
if (BonosProducidos >= 100 && BonosProducidos < 200) {
    Bonos = BonosProducidos * 0.05
} else if (BonosProducidos >=  200) {
    Bonos = BonosProducidos * 0.1
}
let Total = salario + Bonos
alert ("El total que genero este mes fue de: " + Total)