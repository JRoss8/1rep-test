function calcularPrecioEntrada() {
  const edad = parseInt(prompt("Ingrese su edad: "));
    
  let precio = 0;
  if (edad < 12) {
    precio = 5;
  } else if (edad > 65) {
    precio = 7;
  } else {
    precio = 10;
  }

  alert("La entrada al cine es de: $" + precio);
}

calcularPrecioEntrada();