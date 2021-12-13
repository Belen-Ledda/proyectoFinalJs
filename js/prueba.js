class Prueba {

    empezarPrueba(nombre, edad,email){
        const infoPersona = {
            nombre : nombre,
            edad: edad,
            email: email,
            puntsaje: 0,
        }

        this.guardarPruebaLocalStronge(infoPersona)

        location.href="preguntas.html";

    }
    guardarPruebaLocalStronge(infoPersona){
        let prueba;

        prueba = this.obtenerPruebaLocalStronge();

        prueba.push(infoPersona);

        localStorage.setItem('prueba', JSON.stringify(prueba));
    }

    obtenerPruebaLocalStronge() {
        let pruebaLS;


        if(localStorage.getItem ('prueba')===null){
            pruebaLS = [];
        }
        else {
            pruebaLS = JSON.parse(localStorage.getItem ('prueba'));
        }
        return pruebaLS;
    }
    leerLocalStorage(e) {
        e.preventDefault();
        
        document.getElementById('muestra-resultado').hidden = false;

        let pruebaLS
        pruebaLS = this.obtenerPruebaLocalStronge();

        console.log(pruebaLS);

        pruebaLS.forEach(prueba => {prueba
            const row = document.create
        
        })
    }


}