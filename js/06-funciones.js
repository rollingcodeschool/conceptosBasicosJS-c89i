//funciones declarativas sin parametros
function top3Juegos() {
  //aqui agrego la logica de la funcion
  document.write("<h2>Top 3 de juegos</h2>");
  document.write(`<ul>
<li>resident evil Village</li>
<li>Red dead redemption 2</li>
<li>The binding of Isaac</li>
</ul>`);
}

//funciones con parametros
function saludarJugador(nombre, juego) {
  document.write(
    `<p>Hola ${nombre}, bienvenido a "${juego}". Que tengas una excelente jornada de juegos.</p>`
  );
}

//funciones que retornan un valor
function juegoClasico(nombreJuego, anioLanzamiento) {
  const anioActual = new Date().getFullYear();
  const antiguedad = anioActual - anioLanzamiento;
  let respuesta = "";
  if (antiguedad >= 10) {
    respuesta = `El juego ${nombreJuego} es considerado un clasico, tiene una antiguedad de ${antiguedad} años`;
  }else{
    respuesta =  `El juego ${nombreJuego} no es un clasico, tiene una antiguedad de ${antiguedad} años`;
  }
  return respuesta;
}

//llamar o invocar
top3Juegos();
saludarJugador("Lucas", "Minecraft");

const nombreJugador = prompt("Ingrese su nombre");
const juego = prompt("Ingrese un juego");

saludarJugador(nombreJugador, juego);
saludarJugador(nombreJugador);

const esClasico = juegoClasico('gta sa', 2004);
document.write(esClasico)

document.write(`<p>${juegoClasico('contra',1987) }</p>`)