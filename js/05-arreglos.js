//crear un array vacio

const listaProductos = [];

//crear un array con datos
const juegos = ["Stardew valley" ,1 , "fifa", 'league of legends', true, 2024, "fornite"];

//mostrar un array
console.log(listaProductos);
document.write(juegos);

const posicion = 0;

document.write(`<p>El array Juegos tiene ${juegos.length} elementos</p>`);
document.write(`<p>El juego número 3 es ${juegos[2]}</p>`);
document.write(`<p>El juego número 1 es ${juegos[posicion]}</p>`);
document.write(`<p>El juego número 20 es ${juegos[20]}</p>`);

document.write(`<h2>Array de juegos 🎮 (${juegos.length})</h2>`)
document.write(`<ul>`)
for(let posicion=0; posicion < juegos.length; posicion++){
    document.write(`<li>${juegos[posicion]}</li>`)
}
document.write(`</ul>`)

//agregar elementos en el array
juegos.unshift('Dark soul', 'Dota');
document.write(`<h2>Nuevo juego al principio del array 🎮 (${juegos.length})</h2>`)
document.write(`<ul>`)
for(let posicion=0; posicion < juegos.length; posicion++){
    document.write(`<li>${juegos[posicion]}</li>`)
}
document.write(`</ul>`)

juegos.push('Mario Bros');
document.write(`<h2>Nuevo juego al final del array 🎮 (${juegos.length})</h2>`)
document.write(`<ul>`)
for(let posicion=0; posicion < juegos.length; posicion++){
    document.write(`<li>${juegos[posicion]}</li>`)
}
document.write(`</ul>`)

juegos.splice(6, 0, 'Terraria');
document.write(`<h2>Nuevo juego en la posicion 6 del array 🎮 (${juegos.length})</h2>`)
document.write(`<ul>`)
for(let posicion=0; posicion < juegos.length; posicion++){
    document.write(`<li>${juegos[posicion]}</li>`)
}
document.write(`</ul>`)

//modificar elementos del array
juegos[3] = 'Dont starve';
// juegos = 'Dont starve'; este codigo es incorrecto, no puedo cambiar el contenido total del array por otro valor

document.write(`<h2>Modificamos el juego de la posicion 6 del array 🎮 (${juegos.length})</h2>`)
document.write(`<ul>`)
for(let posicion=0; posicion < juegos.length; posicion++){
    document.write(`<li>${juegos[posicion]}</li>`)
}
document.write(`</ul>`)

//Eliminar elementos del array
juegos.shift();
document.write(`<h2>Borramos el primer elemento del array 🎮 (${juegos.length})</h2>`)
document.write(`<ul>`)
for(let posicion=0; posicion < juegos.length; posicion++){
    document.write(`<li>${juegos[posicion]}</li>`)
}
document.write(`</ul>`)

juegos.splice(3,1);
// juegos.splice(3,2); //borramos desde la posicion 3, la cantidad de 2 elementos
// juegos.splice(3); // borramos desde la posicion 3 el resto de los elemenos del array
document.write(`<h2>Borramos el elemento de la posicion 3 del array 🎮 (${juegos.length})</h2>`)
document.write(`<ul>`)
for(let posicion=0; posicion < juegos.length; posicion++){
    document.write(`<li>${juegos[posicion]}</li>`)
}
document.write(`</ul>`)

juegos.pop();
document.write(`<h2>Borramos el ultimo elemento del array 🎮 (${juegos.length})</h2>`)
document.write(`<ul>`)
for(let posicion=0; posicion < juegos.length; posicion++){
    document.write(`<li>${juegos[posicion]}</li>`)
}
document.write(`</ul>`)
