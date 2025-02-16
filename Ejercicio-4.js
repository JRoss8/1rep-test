function calcularPrecioPoliza() {
    
  const basica = 50;
  const intermedia = 75;
  const premium = 100;
  const tipoPoliza = prompt("Ingrese el tipo de póliza (Basica, Intermedia o Premium):").toUpperCase();

  let precio = 0;
  if (tipoPoliza === "BASICA") {
    precio = basica;
  } else if (tipoPoliza === "INTERMEDIA") {
    precio = intermedia;
  } else if (tipoPoliza === "PREMIUM") {
    precio = premium;
  } else {
    alert("Tipo de póliza no válido.");
    return;
  }

  alert("El precio a pagar por la poliza es de: $" + precio);
}

calcularPrecioPoliza();