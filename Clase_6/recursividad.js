function recursividad(){
console.log("soy una funcion que se laama a asi misma")
recursividad();
};
/*recursividad();*/

const laberinto = [

    [1,1,1,1,1,1,1,1,1,1],
    [2,0,1,1,1,1,1,1,0,3],
    [1,0,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,0,1],
    [1,0,1,1,1,1,1,1,1,1]
 
];

function avanzar(fila,columna,laberinto){
    console.log(`estoy en la fila ${fila} y la columna ${columna}`);

    if(
        fila <0 || fila >= laberinto.length ||
        columna <0 || columna >= laberinto[0].length ||
        laberinto[fila][columna]===1||
        laberinto[fila][columna]===4
    ){
        console.log("ya no puedo avanzar");
        return false;
    }

    if(laberinto[fila][columna]===3){
        console.log("encontre la salida");
        return true;
    }



    laberinto[fila][columna]=4; //marcando la casilla como visitada

    if(avanzar(fila,columna+1,laberinto)){
        console.log("regresando de la derecha");
        return true
    }; //avanzando a la derecha
    if(avanzar(fila+1,columna,laberinto)){
        console.log("regresando de abajo");
        return true
    }; //avanzando hacia abajo
    if(avanzar(fila,columna-1,laberinto)){
        console.log("regresando de la izquierda");
        return true
    } //avanzando hacia la izquierda
    if(avanzar(fila-1,columna,laberinto)){
        console.log("regresando de arriba");
        return true
    } //avanzando hacia arriba

    laberinto[fila][columna]=0; //marcando la casilla como no visitada
    console.log("no puedo avanzar");
    return false;

}

/*avanzar(1,0,laberinto);
console.log(laberinto);*/
;



