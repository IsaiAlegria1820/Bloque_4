import {costo} from "./CalcularCostos.js";
import {mostrarViajes} from "./MostrarItinerario.js";

let viajes=[];
function registrarDestino(destino, fecha, transporte,total){
    const viaje={
        destino,
        fecha,
        transporte,
        total
    }    
    viajes.push(viaje);    
    mostrarViajes(viajes);
}

//manejo del formulario
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    
let destino=document.getElementById("destino");
let destinoIndex=destino.selectedIndex;
let opcionDestino=destino.options[destinoIndex];
let valorDestino=opcionDestino.value;
let textoDestino=opcionDestino.text;

let fecha = document.getElementById("fecha").value;

let transporte=document.getElementById("transporte");
let transporteIndex=transporte.selectedIndex;
let opcionTransporte=transporte.options[transporteIndex];
let valorTransporte=opcionTransporte.value;
let textoTranporte=opcionTransporte.text;

registrarDestino(textoDestino,fecha,textoTranporte,costo(valorDestino,valorTransporte));
})
 



