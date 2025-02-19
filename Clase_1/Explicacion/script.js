//repaso de variables var let cons
var edad; //Declarando una variable
edad= 25; //asignando un valor a la variable

function miFuncion(){
    //Alcance de la funcion
    var var1=2;
    let let1=2;

    if(true){
        var var2=3;
        let let2=3;
    }

    console.log("Adentro de la funcion")
    console.log("var1: "+var1);
    console.log("let1: "+let1);
    console.log("var2: "+var2);
    //console.log("let2: "+let2);

    edad=30;
}

function miOtraFuncion(){
    edad=40;
}

miOtraFuncion();
miFuncion();

console.log("Fuera de la funcion")
console.log("edad: "+edad);
console.log("var1: "+var1);
console.log("let1: "+let1);
console.log("var2: "+var2);
console.log("let2: "+let2);

//funciones flecha
function suma(a,b){
    return a+b;
}

(a,b) => {
    return a+b;
}

function realizarOperacion(funcionAEjecutar,a,b){
    
}