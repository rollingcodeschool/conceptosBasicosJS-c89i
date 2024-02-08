//crear un array vacio
const listaProductos = [];
//crear un array con datos
const juegos = ["Stardew valley" ,1 , "fifa", 'league of legends', true, 2024, "fornite"];

const mostrarJuegos = (titulo)=>{
    document.write(`<h2>${titulo} (${juegos.length})</h2>`)
    document.write(`<ul>`)
    for(let posicion=0; posicion < juegos.length; posicion++){
        document.write(`<li>${juegos[posicion]}</li>`)
    }
    document.write(`</ul>`)
}

//mostrar un array
console.log(listaProductos);
document.write(juegos);

const posicion = 0;

document.write(`<p>El array Juegos tiene ${juegos.length} elementos</p>`);
document.write(`<p>El juego número 3 es ${juegos[2]}</p>`);
document.write(`<p>El juego número 1 es ${juegos[posicion]}</p>`);
document.write(`<p>El juego número 20 es ${juegos[20]}</p>`);
mostrarJuegos('Array de juegos');

//agregar elementos en el array
juegos.unshift('Dark soul', 'Dota');
mostrarJuegos('Nuevo juego al principio del array 🎮')


juegos.push('Mario Bros');
mostrarJuegos('Nuevo juego al final del array 🎮');

juegos.splice(6, 0, 'Terraria');
mostrarJuegos('Nuevo juego en la posicion 6 del array 🎮')

//modificar elementos del array
juegos[3] = 'Dont starve';
// juegos = 'Dont starve'; este codigo es incorrecto, no puedo cambiar el contenido total del array por otro valor
mostrarJuegos('Modificamos el juego de la posicion 6 del array 🎮')

//Eliminar elementos del array
juegos.shift();
mostrarJuegos('Borramos el primer elemento del array 🎮')

juegos.splice(3,1);
// juegos.splice(3,2); //borramos desde la posicion 3, la cantidad de 2 elementos
// juegos.splice(3); // borramos desde la posicion 3 el resto de los elemenos del array
mostrarJuegos('Borramos el elemento de la posicion 3 del array 🎮')

juegos.pop();
mostrarJuegos('Borramos el ultimo elemento del array 🎮')

