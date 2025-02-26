//a partir de un arreglo encontrar la suma de n numeros
let n=4





let numeros=[4,5,6,7,5,4,8,9,1,,4,14]

/*

Edge Cases (casos frontera)
1.- Si es mayor al tamaño del arreglo -> vamos a regresar -1
2.- SI n es cero -> vamos a regresar -1
3.- Si el arreglo esta vacio -> vamos a regresar -1
4.- Si n es 1 entonces -> encontrar el valor maximo
5.- Si n es igual al tamanio del arreglo -> sumaremos todos los elementos
*/


function suma(numeros,n){

    if(n>numeros.length || n==0 || numeros.length==0){
        return -1;
    }

    let suma=0;
    for(let i=0;i<n;i++){
        suma+=numeros[i];
    }

    let sumaMaxima = suma;
    
    for(let i=0; i< numeros.length - n+1; i++){
        let sumaDeVentana= numeros.slice(i,i+n).reduce((total,valor)=>total+valor);
        console.log(`Ventana ${i} ${numeros.slice(i,i+n)} Suma: ${sumaDeVentana}`);
        if(sumaDeVentana>sumaMaxima){
            sumaMaxima=sumaDeVentana;
        }
    }

    return sumaMaxima
}