class Persona {
  #apellido // Esta es la declaración de una propiedad privada

  constructor(nombreParam, apellidoParam, dniParam, telefonoParam, mailParam) {
    //Aqui agregar las propiedades
    this.#apellido = apellidoParam // Esta es una propiedad estrictamente privada
    this._nombre = nombreParam // Esto propiedad simula ser privada con el _ delante
    this.dni = dniParam // Esta es una propiedad publica
    this.tel = telefonoParam
    this.mail = mailParam
  }

  // Getters y Setters
  get apellido() {
    return this.#apellido
  }

  set apellido(nuevoApellido) {
    if (nuevoApellido === '') return console.error('El apellido esta vacio')
    if (typeof nuevoApellido !== 'string')
      return console.error('El apellido debe ser un string')

    this.#apellido = nuevoApellido
  }

  get getDni() {
    return this.dni
  }

  set setDni(newDni) {
    this.dni = newDni
  }

  // Aqui agregar los metodos de la clase
  saludar() {
    document.write(`<p>Hola soy ${this._nombre}, ${this.#apellido} </p>`)
  }

  // Metodo para mostrar la propiedad privada #apellido
  mostrarApellido() {
    return this.#apellido
  }
}

//como usar la clase persona
const abel = new Persona(
  'Abel',
  'Perez',
  '42501407',
  '3816690106',
  'abel@gmail.com'
)

console.log(abel.mostrarApellido())
console.log(abel.apellido)

abel.apellido = 'Soria'
console.log(abel.apellido)

document.write(`<p>Nombre: ${abel.nombre}</p>`)

abel.saludar()

const elias = new Persona(
  'Elias',
  'Perez',
  '425013453',
  '3816633333',
  'elias@gmail.com'
)
elias.saludar()

// Herencia
class Estudiante extends Persona {
  constructor(
    nombreParam,
    apellidoParam,
    dniParam,
    telefonoParam,
    mailParam,
    notasParam,
    legajoParam,
    cursoParam
  ) {
    super(nombreParam, apellidoParam, dniParam, telefonoParam, mailParam)
    this._notas = notasParam
    this._legajo = legajoParam
    this._curso = cursoParam
  }

  // Esto es polimorfismo, modificar un metodo que estamos heredando otra clase
  saludar() {
    document.write(`
    <p>
      Hola soy el estudiante ${this._nombre} ${this.apellido} y mi legajo es ${this._legajo}
    </p>
    `)
  }
}

const esteban = new Estudiante(
  'Esteban',
  'Lopez',
  '38473647',
  '381273849',
  'esteban@gmail.com',
  [8, 9, 10],
  1647,
  '89i'
)

esteban.saludar()
