export function mostrarViajes(viajes){
    const intinerario=document.getElementById("itinerario");
    intinerario.innerHTML=" ";    

    viajes.forEach(viaje =>{
        const destinoViaje=document.createElement("li");
        destinoViaje.innerHTML= `
        <div>
            <h5><b>Destino: <b> ${viaje.destino}<h5>
            <p><b>Fecha: </b> ${viaje.fecha}</p>
            <p><b>Transporte: </b> ${viaje.transporte}</p>
            <p><b>Costo: </b> ${viaje.total}</p>
        </div>
        `;
        intinerario.appendChild(destinoViaje);
    });
}