const arreglo = [1,3,4,5,7,9,11,13,15,18,20];

const noDeseado=12;
let x=0;
let y=arreglo.length-1;
let buscador=arreglo[x]+arreglo[y];

while (buscador !== noDeseado){
    buscador=arreglo[x]+arreglo[y];
    if (buscador<noDeseado){
        x++ 
    }else if (buscador>noDeseado){
        y--
    }

    if(x==y){
        console.log("No se encontro el numero");
        break
    }
}
console.log(buscador);