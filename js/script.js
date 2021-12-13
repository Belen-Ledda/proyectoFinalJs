const prueba = new Prueba();

const btnEmpezar = document.getElementById('btnEmpezar');
const listaResultados = document.getElementById('listaResultados');
const btnResultado = document.getElementById('btnResultado');



cargarEventos();

function cargarEventos() {
    btnEmpezar.addEventListener('click',verificar);
    
    btnResultado.addEventListener('click',(e) => {prueba.leerLocalStorage(e)});
}

function verificar(e){
    e.preventDefault();

    let nombre = document.getElementById('nombre');
    let edad = document.getElementById('edad');
    let email = document.getElementById('mail');

    //console.log(nombre);

    if(nombre==='' || edad==='' || email===''){
        swal.fire ({
            type: 'error',
            title: 'jiji :B',
            text: 'Ingresa todos los datos si o si =)',
            showConfirmButton: false,
            timer: 2000
        })
    }

    else {
        prueba.empezarPrueba(nombre, edad, email);

    }
}

