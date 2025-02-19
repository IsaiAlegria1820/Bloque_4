let numeros=[4,5,6,7]

let suma = numeros.reduce((acumulador,elemento)=>{return acumulador + elemento},0);
console.log(suma);

let sonPares = numeros.every((elemento)=> {return elemento % 2 == 0});
if(sonPares){
    console.log("El arreglo solo tiene numeros pares")
}else{
    console.log("El arreglo tiene al menos un numero impar")
}