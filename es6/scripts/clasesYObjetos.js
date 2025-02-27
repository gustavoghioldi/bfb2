class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    saludar() { //metodo
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
    caminar(kms) {
        console.log(`Estoy caminando ${kms} kilómetros`);
    }
    set nombre(nuevoNombre) {
        if (this.edad > 18) {
            this._nombre = nuevoNombre;
        }
    }
    get nombre() { //getter
        return this._nombre;
    }
    set edad (nuevaEdad) {
        this._edad = nuevaEdad;
    }
    get edad() {
        return this._edad;
    }
}

class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
        super(nombre, edad);
        this._puesto = puesto;
        this._precioHora = 0;
        this._horasDeTrabajo = 0;
    }
    saludar() { // sobreecritura de metodo
        console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.puesto}.`);
    }
    set puesto(nuevoPuesto) {
        this._puesto = nuevoPuesto;
    }
    get puesto() {
        return this._puesto;
    }

    setearHorasDeTrabajo(horas) { 
        this._horasDeTrabajo = horas;
    }

    get horasDeTrabajo() { 
        return this._horasDeTrabajo;
    }

    get sueldo() { 
        return this._precioHora * this._horasDeTrabajo;
    }

 
}

class EmpladoDeConsultora extends Empleado {
    constructor(nombre, edad, puesto, proyecto) {
        super(nombre, edad, puesto);
        this._proyecto = proyecto;
        this._precioHora = 1000;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.puesto} en el proyecto ${this.proyecto}.`);
    }
    set proyecto(nuevoProyecto) {
        this._proyecto = nuevoProyecto;
    }
    get proyecto() {
        return this._proyecto;
    }
}

class EmpladoEnRealcionDeDependencia extends Empleado {
    constructor(nombre, edad, puesto, empresa) {
        super(nombre, edad, puesto);
        this._empresa = empresa;
        this._precioHora = 2000;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.puesto} en la empresa ${this.empresa}.`);
    }
    set empresa(nuevaEmpresa) {
        this._empresa = nuevaEmpresa;
    }
    get empresa() {
        return this._empresa;
    }
}   

const persona1 = new Persona('Juan', 30);
const persona2 = new Persona('Ana', 25);
persona1.saludar();
persona2.saludar();
persona1.caminar(12);

const empleado1 = new Empleado('Pedro', 35, 'Desarrollador Web');
empleado1.saludar();
empleado1.caminar(5);

const empleadoDepenmdencia1 = new EmpladoEnRealcionDeDependencia('Carlos', 40, 'Gerente', 'Google');
const empleadoConsultora1 = new EmpladoDeConsultora('Maria', 28, 'Analista', 'Proyecto X');
empleadoDepenmdencia1.saludar();
empleadoConsultora1.saludar();
empleadoConsultora1.setearHorasDeTrabajo(8);
console.log(empleadoConsultora1.horasDeTrabajo);
console.log(empleadoConsultora1.sueldo);
empleadoDepenmdencia1.setearHorasDeTrabajo(8);
console.log(empleadoDepenmdencia1.sueldo);

class MyClass {
    // Método estático
    static myStaticMethod() {
      console.log('Este es un método estático.');
    }
}
  
  // Llamar al método estático
  MyClass.myStaticMethod(); // Salida: Este es un método estático.
  