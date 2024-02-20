class Persona {
  constructor(nombreParam, apellidoParam, dniParam, telefonoParam, mailParam) {
    //aqui agregar las propiedades
    this.apellido = apellidoParam;
    this.nombre = nombreParam;
    this.dni = dniParam;
    this.tel = telefonoParam;
    this.mail = mailParam;
  }

  //aqui agregar los metodos de la clase
  saludar() {
    document.write(`<p>Hola soy ${this.nombre}, ${this.apellido} </p>`);
  }
}

//como usar la clase persona
const abel = new Persona( "Abel", "Perez", "42501407",  "3816690106", "abel@gmail.com");

console.log(abel)
document.write(`<p>Nombre: ${abel.nombre}</p>`)

abel.saludar();

const elias = new Persona( "Elias", "Perez", "425013453",  "3816633333", "elias@gmail.com");
elias.saludar()