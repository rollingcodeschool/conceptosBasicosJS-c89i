//declarar variables

let saldo = 0;

do {
  const operacion = prompt(
    "Seleccione una opción: 1- Consultar el saldo, 2- Depositar dinero, 3- Extraer dinero"
  );

  switch (operacion) {
    case "1":
      document.write(`<p>Saldo disponible: $${saldo}</p>`);
      console.log(saldo);
      break;
    case "2":
      console.log("seleccionó la opción 2");
      const deposito = parseFloat(prompt("Ingrese el monto a depositar"));
      if (deposito > 0) {
        saldo = saldo + deposito;
        document.write(
          `<p>Ingreso $${deposito} a su cuenta, saldo actual: $${saldo}</p>`
        );
        console.log(
          `Depositaste ${deposito} a su cuenta, saldo actual: $${saldo}`
        );
      } else {
        document.write(`<p>Ingresaste un monto invalido</p>`);
        console.log(`Ingresaste un monto invalido`);
      }
      break;
    case "3":
      console.log("seleccionó la opción 3");
      const extraccion = parseFloat(prompt("Ingrese el monto a extraer"));
      if (extraccion <= saldo && extraccion > 0) {
        saldo = saldo - extraccion;
        document.write(
          `<p>Extracción de $${extraccion}, saldo actual: $${saldo}</p>`
        );
        console.log(
          `<p>Extracción de $${extraccion}, saldo actual: $${saldo}</p>`
        );
      } else {
        document.write(`<p>Ingresaste un monto invalido</p>`);
        console.log(`Ingresaste un monto invalido`);
      }

      break;
    default:
      alert("Seleccionó una opción invalida");
  }
} while (confirm("¿Desea realizar otra operación?"));

/*
if (operacion === "1") {
  document.write("<p>mostrar el saldo</p>");
} else if (operacion === "2") {
  document.write("<p>depositar dinero</p>");
} else if (operacion === "3") {
  document.write("<p>Extraer dinero</p>");
} else {
  document.write("<p>Seleccionó una opción invalida</p>");
}*/

// Estructura Switch
/*
switch (opcion) {
  case "1":
    document.write("<p>mostrar el saldo</p>");
    break;
  case "2":
    document.write("<p>mostrar el saldo</p>");
    break;
  case "3":
    document.write("<p>mostrar el saldo</p>");
    break;
  default:
    document.write("<p>Seleccionó una opción invalida</p>");
}
*/
