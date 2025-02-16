function calcularTotal() {
  const cantidadPrendas = parseInt(prompt("Ingrese la cantidad de prendas compradas:"));
  const precioPrenda = parseFloat(prompt("Ingrese el precio por prenda:"));

  const subtotal = cantidadPrendas * precioPrenda;
  let descuento = 0;

  if (cantidadPrendas >= 5) {
    descuento = 0.20;
  } else if (cantidadPrendas >= 3) {
    descuento = 0.10; 
  }

  const total = subtotal * (1 - descuento);

  alert("Total a pagar: Q" + total );
}

calcularTotal();