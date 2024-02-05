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


