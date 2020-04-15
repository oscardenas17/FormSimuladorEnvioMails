//VARIABLES
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');





//EVENT LISTENERS
eventLIsteners();

function eventLIsteners(){
    //Inicio de la app y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    //campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
}





//FUNCTIONS
function inicioApp(){
    //deshabilitar en boton enviar
    btnEnviar.disabled = true;
}

//Valida que el campo tenga algo escrito
function validarCampo(){

    //Se valida la longitud del texto y que no este vacio
    validarLongitud(this);

    //Validar email
    //console.log(this.type)
    if(this.type === 'email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
        btnEnviar.disabled = false;
        }
    }
}

function validarLongitud(campo){

    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');

    }
}

function validarEmail(campo){
    const mensaje = campo.value;
    //sino es igual a -1 , encontro el @
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');

    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}