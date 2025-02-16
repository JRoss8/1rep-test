const MontoCompra = parseInt(prompt("Ingrese el monto de la compra: "))
let MotonResultante = 0

if(MontoCompra >= 500 && MontoCompra < 200 ){
    MontoResultante = (MontoCompra - (MontoCompra * 0.10))
} else if (MontoCompra >= 200){
    MontoResultante = (MontoCompra - (MontoCompra *.20))
} else {
    MontoResultante = MontoCompra
}

alert ("El monto total a pagar es: " + MontoResultante)