function verificar(){
    mostrar();

    const tipo = document.querySelector('input[name="alternativas"]:checked').value;
    let respuestaLS;
    respuestasLS= prueba.obtenerPruebaLocalStronge();
    let tamaño = respuestasLS.length;

    if(respuesta == tipo){
        respuestaLS[tamaño -1].puntaje = respuestaLS[tamaño - 1].puntaje + 1;

        localStorage.setItem('prueba', JSON.stringify(respuestaLS));

    }
    else{
        respuestaLS[tamaño - 1].puntaje = respuestaLS[tamaño - 1].puntaje + 0;

        localStorage.setItem('prueba', JSON.stringify(respuestaLS));
    }



}