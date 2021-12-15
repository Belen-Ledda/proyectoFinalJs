const prueba = new Prueba();
const btnAvanzar = document.getElementById('btnAvanzar');


cargarEventos();
function cargarEventos(){
    //mostramos preguntas con sus alternativas
    document.addEventListener('DOMContentLoaded', mostrar);
    btnAvanzar.addEventListener('click', verificar);
}

let i = 0;
let respuesta;



function mostrar(){
    fetch('/js/preguntas.json')
        .then(response =>{
            return response.json();
        })
        .then(response =>{

            if(i === response.length){
                location.href = "index.html";
            }
            else{
            document.getElementById('tituloPregunta').innerHTML = `${i+1}. ${response[i].tituloPregunta}`
            document.getElementById('opcion1').innerHTML = response[i].opciones[0].alternativa1;
            document.getElementById('opcion2').innerHTML = response[i].opciones[0].alternativa2;
            document.getElementById('opcion3').innerHTML = response[i].opciones[0].alternativa3;
            document.getElementById('opcion4').innerHTML = response[i].opciones[0].alternativa4;
            respuesta = response[i].respuesta;


            i = i + 1;

            }
            


        })
        .catch(error => {
           // console.log(error);
        })
}





function verificar(){

    mostrar();

    const tipo = document.querySelector('input[name="alternativas"]:checked');
    let respuestaLS;
    respuestaLS= prueba.obtenerPruebaLocalStronge();
    let tamaño = respuestaLS.length;

    if(respuesta == parseInt(tipo.value)){
        respuestaLS[tamaño -1].puntaje = respuestaLS[tamaño - 1].puntaje + 1;

        localStorage.setItem('prueba', JSON.stringify(respuestaLS));

    }
    else{
    
        respuestaLS[tamaño - 1].puntaje = respuestaLS[tamaño - 1].puntaje + 0;

        localStorage.setItem('prueba', JSON.stringify(respuestaLS));
    }



}