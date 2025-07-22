let votos = {
    WD : 0,
    JS : 0,
    BD : 0,
}

let cantidadVotos = 0;

function votar(seleccion){
    votos[seleccion]++;
    cantidadVotos++;
    document.getElementById(`votos-${seleccion}`).textContent = votos[seleccion];
    alert("¡Gracias por tu voto!");
    if(cantidadVotos % 5 == 0){
        console.log("Genial, 5 votos más")
    }
    
}


