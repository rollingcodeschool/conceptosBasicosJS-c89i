//objeto con notación literal


const pelicula = {
    //propiedades
    nombre : 'Iron Man',
    genero: ['acción', 'superheroes', 'Ciencia ficción'],
    anio: 2008,
    estado: true,
    duracion: 126,
    director: 'Jon Favreau',
    //metodos
    reproducir: function (){
        console.log(this)
        document.write(`<p>La peli ${this.nombre} se esta reproduciendo... ▶️ </p>`)
    },  
    pausar: () =>{
        console.log(this)
        document.write(`<p>La peli esta en pausa ⏸️ </p>`)
    },
    stop: function () {
        document.write(`<p>La peli se detuvo ⏹️ </p>`)
    }
}

//mostrar el objeto
console.log(pelicula)
document.write(`<p>Pelicula: ${pelicula.nombre}</p>`)
document.write(`<p>Genero: ${pelicula.genero}</p>`)
document.write(`<p>Director: ${pelicula['director']}</p>`)
document.write(`<p>Director: ${pelicula['Director']}</p>`)

//modificar objeto
pelicula.nombre = "Ironman 3";
document.write(`<p>Pelicula: ${pelicula.nombre}</p>`)

//agregar propiedades nuevas
document.write(`<p>Calidad: ${pelicula.calidad}</p>`);
pelicula.calidad = 'HD';
document.write(`<p>Calidad: ${pelicula.calidad}</p>`);

pelicula.calidad = 'Full HD';
console.log(pelicula);

//borrar una propiedad del objeto
delete pelicula.calidad;
console.log(pelicula);

//usar los métodos del objeto
pelicula.reproducir();

pelicula.pausar();

pelicula.stop();

console.log(pelicula.hasOwnProperty('calidad'))
console.log(pelicula.hasOwnProperty('anio'))

