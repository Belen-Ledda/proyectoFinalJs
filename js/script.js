const prueba = new Prueba();
const btnEmpezar = document.getElementById('btnEmpezar');
const listaResultados = document.getElementById('listaResultados');
const btnResultado = document.getElementById('btnResultado');



cargarEventos();

function cargarEventos() {
    btnEmpezar.addEventListener('click', verificar);
    
    btnResultado.addEventListener('click',(e) => {prueba.leerLocalStorage(e)});
}

function verificar(e) {
    e.preventDefault();

    let nombre = document.getElementById('nombre');
    let edad = document.getElementById('edad');
    let email = document.getElementById('email');

    //console.log(nombre);

    if(nombre.value ==='' || edad.value ==='' || email.value ===''){
        swal.fire ({
            type: 'error',
            title: 'jiji :B',
            text: 'Ingresa todos los datos si o si =)',
            showConfirmButton: false,
            timer: 2000
        })
    }

    else {
        prueba.empezarPrueba(nombre.value, edad.value, email.value);

    }
}

