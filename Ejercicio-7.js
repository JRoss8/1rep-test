function calcularCalificacion() {
    
  const nota = parseInt(prompt("IIngresar la nota del estudiante (0-100):"));

  if (nota < 0 || nota > 100) {
    alert("ERROR: Ingresar una nota entre 0 y 100.");
    return; 
  }

  let calificacion = "";
  if (nota >= 90) {
    calificacion = "A";
  } else if (nota >= 80) {
    calificacion = "B";
  } else if (nota >= 70) {
    calificacion = "C";
  } else if (nota >= 60) {
    calificacion = "D";
  } else {
    calificacion = "F";
  }

  alert("La calificación del estudiante es: " + calificacion);
}

calcularCalificacion();