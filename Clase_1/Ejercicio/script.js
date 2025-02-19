class Persona{
    constructor(nombre,apellido,altura){
        this.nombre=nombre;
        this.apellido=apellido;
        this.altura=altura;
    }
}

let personas=[
    new Persona("Juan","Perez",1.72),
    new Persona("Pedro","Gomez",1.80),
    new Persona("Luis","Garcia",1.90),
    new Persona("Maria","Lopez",1.60)
];

generarTarjeta=(persona) =>{
    console.log(`nombre: ${persona.nombre}, apellido: ${persona.apellido}, altura: ${persona.altura}`);    
}

personas.forEach(generarTarjeta);

