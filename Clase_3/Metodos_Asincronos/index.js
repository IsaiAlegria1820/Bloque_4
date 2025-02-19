//objeto literal: Estructura de datos de tipos clave valor
let persona={
    nombre: "Juan",
    edad: 25,
    profesion : "futbolista"
}

//JSOn - JavaScript Object Notation =Objeto Literal

//lanzar peticion a un servidor
if(true){
    console.log("hola");
}else{

}

//cada promesa ocupa un fetch y un catch
/* esto se conoce como callback hell no debes manejar las promesas asi
fetch(" https://pokeapi.co/api/v2/pokemon").then((response)=>{ //thenpoint
    console.log(response);//imprimiendo resultado

    response.json().then((jsonRespuesta)=>{//promesa para leer lo pedido y convirtiendelo en json   
        console.log(jsonRespuesta); //imprimiendo resultado
    }).catch((error)=>{
        console.log(error);
    })
}).catch((error)=>{
    console.log(error);
}
);
*/

//async - await permite ejecutar una funcion asincrona de forma sincrona
//para ytukuzar async - await tenemos que marcar la funcion como asincrona con la palabra reservada async
async function peticionPokemones(){
    await fetch(" https://pokeapi.co/api/v2/pokemon")
    .then((response) =>{ 
        console.log("response");
        console.log(response);
        return response.json()
    })
    .then((jsonRespuesta)=>{
        console.log("jSON");
        console.log(jsonRespuesta);
        
    })
    .catch((error)=>{ //solo un catch por cada encadeanamiento de promesas
        //un catch detiene el flujo si detecta un error a lo largo de la cadena
        console.log(error);
    })
    .finally(()=>{
        console.log("proceso Finalizado");
    });
    
    console.log("mensaje despues de las promesas");
    //encadenamiento de promesas 
}

peticionPokemones();