function buscadorSumas(){
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
}

let arregloLetras=[];
function separarLetras(frase){
    
    for (let i=0; i<frase.length; i++){
        if (frase[i] !== " "){
            arregloLetras.push(frase[i]);
        }
    }
    return arregloLetras;
}




function palindromo(){
    const frase="anita lava la tiaa";
    separarLetras(frase);
    let x=0
    let y=arregloLetras.length-1;

    while (arregloLetras[x]===arregloLetras[y]){
        x++;
        y--;
        if(arregloLetras[x]!==arregloLetras[y]){
            console.log("No es palindromo");
            break;
        }
        if(x==y){
            console.log("Es palindromo");
            break;
        }
    }
}

palindromo();