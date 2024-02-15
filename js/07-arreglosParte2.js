const perifericos = [
  "Ratón Logitech MX Master 3",
  "Teclado mecánico Corsair K95 RGB Platinum",
  "Monitor LG UltraGear 27GN950-B 4K",
  "Auriculares Bose QuietComfort 45",
  "Silla gaming Secretlab Omega",
  "Webcam Logitech C920 Pro HD",
  "Micrófono Blue Yeti USB",
  "Soporte para portátil ajustable Nexstand",
  "Lámpara de escritorio LED BenQ e-Reading",
  "Base de carga inalámbrica Anker PowerWave",
  "Smartwatch Garmin Forerunner 945",
  "Auriculares inalámbricos Sony WH-1000XM4",
  "Monitor Dell Ultrasharp U2720Q 27 Pulgadas 4K",
  "Silla ergonómica Steelcase Gesture",
  "Teclado inalámbrico Logitech MX Keys",
  "Webcam 4K Logitech Brio",
  "Auriculares gaming Razer BlackShark V2",
  "Soporte para monitor de madera",
  "Auriculares deportivos Powerbeats Pro",
  "Teclado mecánico Razer Huntsman Elite",
];

const mostrarArray = (titulo, arrayNuevo) => {
  document.write(`<h2>${titulo}</h2>`);
  document.write(`<ul>`);
   //metodo inmutable map
  arrayNuevo.map((producto) => document.write(`<li>${producto}</li>`));
  document.write(`</ul>`);
};

//invocar a la funcion mostrarArray
mostrarArray("Lista de productos", perifericos);

//verificar si el periferico: Auriculares gaming Razer BlackShark V2 existe en el array
//Ejemplo con includes
const productoParaBuscar = "Auriculares gaming Razer BlackShark V2";
document.write(`<p>Existe el producto: ${productoParaBuscar}</p>`)

if(perifericos.includes(productoParaBuscar)){
    document.write(`<p>El producto: ${productoParaBuscar}, si existe</p>`)
}else{
    document.write(`<p>El producto: ${productoParaBuscar}, No existe</p>`)
}
