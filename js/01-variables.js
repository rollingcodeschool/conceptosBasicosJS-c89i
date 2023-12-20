// Esto es un comentario de una unica linea

/*
Esto es un comentario
de 
varias lineas
*/

// mostrar comentarios desde el archivo de js
console.log('Mensaje por consola');
console.log("Mensaje por consola");

//mostrar un mensaje en el documento html
document.write('<p class="text-center text-primary">Primer mensaje en el documento HTML</p>');

//ventanas emergentes
// alert('Ejemplo de un alerta');

//Declarar e inicializar una variable
// declarar o crear una variable (var - let -const)

let regaloNavidad = 'Iphone 15 Pro max';

document.write('Regalo de navidad 2023: '+ regaloNavidad + '<br>' );

//modificar el contenido de una variable creada con la palabra let
regaloNavidad = 'Rtx 4090 Rog Strix';

document.write('Regalo de navidad 2023: '+ regaloNavidad);

const urlUniverse = 'https://universe.rollingcodeschool.com/';

document.write('<br>Página de Universe: '+ urlUniverse);

// urlUniverse = 123;
// document.write('<br>Página de Universe: '+ urlUniverse);

let precioSinImpuestos = 1100;
let impuestos = 600;

// document.write('<br>El precio del Iphone 15 es: $'+ (precioSinImpuestos + impuestos) + ' USD');
let resultado = precioSinImpuestos + impuestos;

document.write('<br>El precio del Iphone 15 es: $'+ (resultado) + ' USD');

// agregamos el ejercicio de elias

//parseInt('50')
//parseFloat('50.3')
let gradosCelsius = parseInt(prompt('Ingrese un valor en grados centigrados'))
console.log(gradosCelsius)

let gradosFahrenheit = (gradosCelsius * 9) / 5 + 32;

document.write(
  "<br>" +
    gradosCelsius +
    "°C grados celsius son equivalentes a " +
    gradosFahrenheit +
    "°F grados farenheit"
);
document.write("<br>Otro ejemplo :" + (gradosCelsius + 50));