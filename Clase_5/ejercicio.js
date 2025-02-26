/*
Dadas 2 cadenas llamadas ´a´ y ´b´ regresar el indice de la primera aparicion de la cadena b en la cadena a. 
Si no se encuentra la cadena b en la cadena a entonces regresar -1.

*/ 



const a =[1,2,3,4,8,9,10,11];
const b =[8,9,10]
let comparador
for(let i=0;i <a.length;i++){
    if(a.slice(i,3)===b.slice(0,3)){
        console.log(i);
    }else{
        console.log(-1);
    }

}