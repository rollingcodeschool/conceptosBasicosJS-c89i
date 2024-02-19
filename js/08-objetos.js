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
        document.write(`<p>La peli se esta reproduciendo... ▶️ </p>`)
    },  
    pausar: () =>{
        document.write(`<p>La peli esta en pausa ⏸️ </p>`)
    },
    stop: function () {
        document.write(`<p>La peli se detuvo ⏹️ </p>`)
    }
}