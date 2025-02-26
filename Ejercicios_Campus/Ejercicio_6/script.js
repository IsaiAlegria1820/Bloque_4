const listaRegalos =["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];
let regalo="Lego"
function buscarRegalo(lista,regalo,indice){
    if(indice === lista.length){
        console.log(`No se encontro el regalo ${regalo}`);
        return
    }

    if (lista[indice]===regalo){
        console.log( `Se encontro el regalo ${regalo} en la posicion ${indice}`);
        return
    }
    console.log("buscando regalo");
    return buscarRegalo(lista,regalo,indice+1);
    
}
buscarRegalo(listaRegalos,regalo,0);